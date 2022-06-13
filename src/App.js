import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { NestorReporter } from "./NestorReporter";
import "./styles.css";
import { consolidateProjData, flattenProjData } from "./utils";

const sid = "22sjsumc14bhkr8evtqdl4o0r4";
const reqUrl = "https://nestor.divami.com/request.php";
export default function App() {
  const [projectsList, setProjectsList] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [selectedProjectData, setSelectedProjectData] = useState([]);
  const [OverallDataState, setOverallDataState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTimeData = async (tempSelectProj) => {
    try {
      // setIsLoading(true);
      const resTime = await axios.post(reqUrl, {
        command: "getProjectTimesheet",
        client: { sid },
        data: {
          projectId: tempSelectProj.projectId, // "1"
          startDate: "2016-01-01",
          endDate: moment().format("YYYY-MM-DD"),
          individualProject: true,
        },
      });
      if (resTime.data && resTime.data.data) {
        const tempProjData = Array.from(resTime.data.data);
        let restProjData = flattenProjData(tempProjData);
        restProjData = consolidateProjData(restProjData);
        setSelectedProjectData(restProjData);
      } else throw resTime;
      // setIsLoading(false);
    } catch (err) {
      // setIsLoading(false);
      console.log("getTImeData err=>", err);
    }
  };

  const getOrgData = async () => {
    try {
      // setIsLoading(true);
      const res = await axios.post(reqUrl, {
        command: "getProjectList",
        client: { sid },
        data: { count: 999 },
      });
      if (res.data && res.data.data && res.data.data?.projects) {
        const projects = Array.from(res?.data?.data?.projects);
        // console.log("fetched ProjectList", projects);
        setProjectsList(projects);
        let tempSelectProj = projects.filter((x) => x.status === "Active")?.[0];
        setSelectedProject(() => [tempSelectProj]);
        await getTimeData(tempSelectProj);
      } else throw res;
      // setIsLoading(false);
    } catch (err) {
      // setIsLoading(false);
      console.log("getOrgData err => ", err);
    }
  };

  const getOverallData = async () => {
    try {
      setIsLoading(true);

      const AllRes = await Promise.all(
        projectsList
          .filter((x) => x.status === "Active" && x.projectId !== "1")
          .map((prj) =>
            axios.post(reqUrl, {
              command: "getProjectTimesheet",
              client: { sid },
              data: {
                projectId: prj.projectId, // "1"
                startDate: "2000-01-01",
                endDate: moment().format("YYYY-MM-DD"),
                individualProject: true,
              },
            })
          )
      );
      let overallDataTemp = projectsList
        .filter((x) => x.status === "Active" && x.projectId !== "1")
        .map((proj, index) => {
          let prjdata =
            AllRes[index] && AllRes[index].data && AllRes[index].data.data
              ? AllRes[index].data.data
              : [];
          prjdata = flattenProjData(prjdata);
          prjdata = consolidateProjData(prjdata);
          return {
            ...proj,
            data: prjdata,
          };
        });

      // console.log(overallDataTemp)
      setOverallDataState(overallDataTemp);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log("getOverallData Error=>", err);
    }
  };

  useEffect(() => {
    if (projectsList.length > 0) {
      getOverallData().catch();
    }
    var list = document.getElementById("root").parentElement.children;
    for (var i = 0; i < list.length; i++) {
      if (list[i].localName === "iframe") list[i].remove();
    }
  }, [projectsList]);

  useEffect(() => {
    getOrgData().catch();
  }, []);

  return (
    <div className="App">
      {isLoading && (
        <div className="loader">
          <InfinitySpin color="#ff1400" width="200px" />
        </div>
      )}
      {projectsList.length > 0 && (
        <NestorReporter
          projectsList={projectsList}
          setProjectsList={setProjectsList}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          selectedProjectData={selectedProjectData}
          setSelectedProjectData={setSelectedProjectData}
          getTimeData={getTimeData}
          getOrgData={getOrgData}
          setIsLoading={setIsLoading}
          sid={sid}
          reqUrl={reqUrl}
          OverallDataState={OverallDataState}
        />
      )}
    </div>
  );
}
