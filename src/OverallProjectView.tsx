import React, { useState, useEffect } from "react";
import { tasktypesList } from "./constants";
import { NivoPie } from "./NivoPie";
import { getRandomInt, getTaskLabel } from "./utils";
import "./styles.css";
import { NivoBar } from "./NivoBar";
import downChevron from "./assets/down-chevron.svg"

export const OverallProjectView = (props: any) => {
    const {
        projectList,
        sid,
        reqUrl,
        projectsList,
        setProjectsList,
        selectedProject,
        setSelectedProject,
        selectedProjectData,
        setSelectedProjectData,
        getTimeData,
        getOrgData,
        OverallDataState
    } = props;

    const [OverallTaskPieData, setOverallTaskPieData] = useState<any>([])
    const [OverallTaskTableData, setOverallTaskTableData] = useState<any>([])
    const [OverallTaskBarData, setOverallTaskBarData] = useState<any>([])
    const [ScrolledIntoView, setScrolledIntoView] = useState<boolean>(false)
    useEffect(() => {
        if (OverallDataState.length > 0) {
            let overalldataFlattenedForTaskType = tasktypesList.map((x) => ({ type: x, hours: 0 }));
            OverallDataState.forEach((prj: any) => {
                if (prj.data && prj.data.length) {
                    prj.data.forEach((prjData: any) => {
                        overalldataFlattenedForTaskType =
                            overalldataFlattenedForTaskType.map((xODFT: any) =>
                                xODFT.type === prjData.taskType ?
                                    { ...xODFT, hours: xODFT.hours + Number(prjData.TotalHours) }
                                    : xODFT)
                    })
                }
            });
            let viewData: any[] = [];
            let tasktypes: any[] = tasktypesList;

            const totalOverallHours = overalldataFlattenedForTaskType.reduce((acc, curr) => acc + Number(curr.hours), 0)

            tasktypes.forEach((tt: any) => {

                const pieEleValue = overalldataFlattenedForTaskType.find((x) => x.type === tt)?.hours
                const percentval = pieEleValue ? Number((pieEleValue / totalOverallHours) * 100).toFixed(2) : "0.00"
                viewData = [
                    ...viewData,
                    {
                        id: `${getTaskLabel(tt)} (${percentval}%)`,
                        label: getTaskLabel(tt),
                        value: Number(pieEleValue).toFixed(2),
                        color: `hsl(${getRandomInt(tt)}, 70%, 50%)`
                    }
                ];
            });
            setOverallTaskPieData(() => [...viewData]);
        }
    }, [OverallDataState])

    useEffect(() => {
        if (OverallDataState.length > 0) {
            let newData: any[] = [];
            OverallDataState.forEach((prj: any) => {
                let databyTaskType = tasktypesList.map((x) => ({ type: x, hours: 0 }));
                if (prj.data && prj.data.length > 0) {
                    prj.data.forEach((dataEle: any) => {
                        databyTaskType = databyTaskType.map((dbtt: any) => dbtt.type === dataEle.taskType ? { ...dbtt, hours: dbtt.hours + Number(dataEle.TotalHours) } : dbtt)
                    })
                }
                newData = [...newData,
                {
                    name: prj.name,
                    type: "",
                    hours: Number(databyTaskType.reduce((acc, curr) => acc + Number(curr.hours), 0)).toFixed(2),
                },
                ...databyTaskType.map((dbtt) => ({
                    name: "",
                    ...dbtt
                }))
                ]
            })
            // console.log(newData)
            setOverallTaskTableData(() => [...newData])
        }
    }, [OverallDataState])
    useEffect(() => {
        if (OverallDataState.length > 0) {
            let newData: any[] = [];
            OverallDataState.forEach((prj: any) => {
                let databyTaskType = tasktypesList.map((x) => ({ type: x, hours: 0 }));
                if (prj.data && prj.data.length > 0) {
                    prj.data.forEach((dataEle: any) => {
                        databyTaskType = databyTaskType.map((dbtt: any) => dbtt.type === dataEle.taskType ? { ...dbtt, hours: dbtt.hours + Number(dataEle.TotalHours) } : dbtt)
                    })
                }
                let obj = { label: prj.name }
                databyTaskType.forEach((x: any) => {
                    obj = { ...obj, [x.type]: Number(x.hours).toFixed(2) }
                })
                newData = [...newData, obj]
            })
            // console.log("setOverallTaskBarData => ", newData)
            setOverallTaskBarData(() => [...newData])
        }
    }, [OverallDataState])

    return (
        <div style={{ position: "relative" }}>

            <div className="overall-view-container">
                <div className="overall-table-view">
                    <div className="table">
                        <div className="grid table_header">
                            <div className="header">{"Name"}</div>
                            <div className="header">{"Category"}</div>
                            <div className="header">{"Time"}</div>
                        </div>
                        {OverallTaskTableData.length > 0 &&
                            OverallTaskTableData.map((dt: any, idx: number) => (
                                <div className={`grid ${dt.name ? 'grid-border-top' : ''}`} key={`${dt.name}-${idx}`}>
                                    <div>{dt.name}</div>
                                    <div>{getTaskLabel(dt.type)}</div>
                                    <div>{Number(dt.hours).toFixed(2)}</div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="overall-pie-view">
                    {OverallTaskPieData.length > 0 && (
                        <NivoPie data={OverallTaskPieData} />
                    )}
                </div>
            </div>
            <div className="scroll-btn" onClick={() => {
                document.getElementById("overall-bar-graph")?.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" })
            }} >
                <span>Click to see all projects</span>
                <img src={downChevron} alt="Scroll" title="Scroll to bottom" />
            </div>
            {OverallTaskBarData.length > 0 && (
                <div id="overall-bar-graph">
                    <div style={{ width: `100%`, height: "768px" }}>
                        <NivoBar data={OverallTaskBarData} />
                    </div>
                </div>
            )
            }
        </div >
    )
}