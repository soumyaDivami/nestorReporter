import { useEffect, useState } from "react";
import { getRandomInt, getRandomIntNM, getTaskLabel } from "./utils";
import "./styles.css";
import { NivoPie } from "./NivoPie";
import { Button, FormControl, MenuItem, Select } from "@material-ui/core";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { OverallProjectView } from "./OverallProjectView";

export const NestorReporter = (props: any) => {
  const {
    projectsList,
    setProjectsList,
    selectedProject,
    setSelectedProject,
    selectedProjectData,
    setSelectedProjectData,
    getTimeData,
    getOrgData,
    isLoading,
    setIsLoading,
    sid,
    reqUrl,
  } = props;
  const [MainViewState, setMainViewState] = useState<string>("projectView");
  const [PiewViewSwitch, setPiewViewSwitch] = useState<string>("task");
  const [selectedProjectDataView, setSelectedProjectDataView] = useState<any>([]);
  const [selectedProjectPieView, setSelectedProjectPieView] = useState<any>([]);
  const [selectedProjectPersonPieView, setSelectedProjectPersonPieView] = useState<any>([]);

  useEffect(() => {
    setSelectedProject([{ ...projectsList.filter((x: { status: string; }) => x.status === "Active")[0] }]);
    setSelectedProjectData([]);
  }, []);

  useEffect(() => {
    if (selectedProjectData.length > 0) {
      let viewData: any[] = [];
      let names: any[] = selectedProjectData.map((x: { resourcename: any; }) => x.resourcename);
      names = [...(new Set(names))];
      let tasktypes: any[] = selectedProjectData.map((x: { taskType: any; }) => x.taskType);
      tasktypes = [...(new Set(tasktypes))];

      names.forEach((nm: any) => {
        let totalTimeByResource = selectedProjectData
          .filter((x: { resourcename: any; }) => x.resourcename === nm)
          .reduce((acc: number, curr: { TotalHours: any; }) => acc + Number(curr.TotalHours), 0);
        viewData = [
          ...viewData,
          {
            resourcename: nm,
            taskType: "",
            // TotalHours: `Total Time: ${totalTimeByResource}`
            TotalHours: totalTimeByResource
          }
        ];

        tasktypes.forEach((tt: any) => {
          let emp = selectedProjectData.find(
            (x: { resourcename: any; taskType: any; }) => x.resourcename === nm && x.taskType === tt
          );
          if (emp) {
            viewData = [
              ...viewData,
              {
                resourcename: "",
                taskType: getTaskLabel(tt),
                TotalHours: emp.TotalHours
              }
            ];
          }
        });
      });

      setSelectedProjectDataView(() => [...viewData]);
    }
  }, [selectedProjectData]);
  useEffect(() => {
    if (selectedProjectData.length > 0) {
      let viewData: any[] = [];
      let tasktypes: any[] = selectedProjectData.map((x: { taskType: any; }) => x.taskType);
      tasktypes = [...(new Set(tasktypes))];
      // console.log(selectedProjectData)
      tasktypes.forEach((tt: any) => {
        viewData = [
          ...viewData,
          {
            id: getTaskLabel(tt),
            label: getTaskLabel(tt),
            value: Number(
              selectedProjectData
                .filter((x: { taskType: any; }) => x.taskType === tt)
                .reduce((acc: number, curr: { TotalHours: any; }) => acc + Number(curr.TotalHours), 0)
            ).toFixed(2),
            color: `hsl(${getRandomInt(tt)}, 70%, 50%)`
          }
        ];
      });
      setSelectedProjectPieView(() => [...viewData]);
    }
  }, [selectedProjectData]);
  useEffect(() => {
    if (selectedProjectData.length > 0) {
      let viewData: any[] = [];
      let names: any[] = selectedProjectData.map((x: { resourcename: any; }) => x.resourcename);
      names = [...(new Set(names))];
      // console.log(selectedProjectData)
      names.forEach((nm: any) => {
        viewData = [
          ...viewData,
          {
            id: nm,
            label: nm,
            value: Number(
              selectedProjectData
                .filter((x: { resourcename: any; }) => x.resourcename === nm)
                .reduce((acc: number, curr: { TotalHours: any; }) => acc + Number(curr.TotalHours), 0)
            ).toFixed(2),
            color: `hsl(${getRandomIntNM()}, 70%, 50%)`
          }
        ];
      });
      setSelectedProjectPersonPieView(() => [...viewData]);
    }
  }, [selectedProjectData]);

  const refreshData = async (tempSelectProjList: any[]) => {
    try {
      setIsLoading(true);
      await getTimeData(tempSelectProjList[0]);
      setIsLoading(false);
    } catch (err) {
      console.log(err)
    }
  }

  const onSelectProject = (event: { target: { value: any; }; }) => {
    const val = event.target.value;
    let tempSelectProjList = projectsList.filter((x: { projectId: any; }) => x.projectId === val);
    setSelectedProject(() => [...tempSelectProjList]);
    refreshData(tempSelectProjList).catch();
  };

  return (
    <div>
      <div className="select-header">
        <div className="header-btn">
          <Button
            color="primary"
            variant="outlined"
            onClick={() => setMainViewState("overallView")}
            disabled={MainViewState === "overallView"}
          >
            {"Overall View"}
          </Button>
        </div>
        <div className="header-btn">
          <Button
            color="primary"
            variant="outlined"
            onClick={() => setMainViewState("projectView")}
            disabled={MainViewState === "projectView"}
          >
            {"Project View"}
          </Button>
        </div>
        <FormControl className="select-project">
          {MainViewState === "projectView" &&
            <Select
              variant="outlined"
              labelId="select-project-label"
              id="select-project"
              value={selectedProject.length > 0 ? selectedProject[0].projectId : ""}
              // label="Select Project"
              onChange={onSelectProject}
            >
              {projectsList
                .filter((x: { status: string; }) => x.status === "Active")
                .map((x: any) => (
                  <MenuItem value={x.projectId}>{x.name}</MenuItem>
                ))}
            </Select>}
        </FormControl>
      </div>
      {/* <div>{selectedProject.length === 1 && selectedProject[0].name}</div> */}
      {MainViewState === "overallView" &&
        <OverallProjectView
          projectList={projectsList}
          sid={sid}
          reqUrl={reqUrl}
          {...props}
        />}
      {MainViewState === "projectView" && (
        <div className="view__data">
          {/**TABLE */}
          <div className="table overall-table-view">
            <div className="grid table_header">
              <div className="header">{"Name"}</div>
              <div className="header">{"Category"}</div>
              <div className="header">{"Time"}</div>
            </div>
            {selectedProjectDataView.length > 0 &&
              selectedProjectDataView.map((dt: any) => (
                <div className={`grid ${dt.resourcename ? 'grid-border-top' : ''}`}>
                  <div>{dt.resourcename}</div>
                  <div>{dt.taskType}</div>
                  <div>{Number(dt.TotalHours).toFixed(2)}</div>
                </div>
              ))}
          </div>
          {/**PIE CHART */}
          <div className="ChartContainer">
            <ToggleButtonGroup
              color="primary"
              value={PiewViewSwitch}
              exclusive
              onChange={(e) => {
                setPiewViewSwitch((_prev: string) => e.target.value)
              }}
            >
              <ToggleButton value="task">Task</ToggleButton>
              <ToggleButton value="person">Person</ToggleButton>
            </ToggleButtonGroup>
            {PiewViewSwitch === "task" && (<div className="Chart">
              {selectedProjectPieView.length > 0 && (
                <NivoPie data={selectedProjectPieView} />
              )}
            </div>
            )}
            {PiewViewSwitch === "person" && (
              <div className="Chart">
                {selectedProjectPersonPieView.length > 0 && (
                  <NivoPie data={selectedProjectPersonPieView} />
                )}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
