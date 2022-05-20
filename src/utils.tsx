import {
  development,
  qa,
  design,
  learning,
  documentation,
  meetings,
  others
} from "./constants";

export const getNewTaskType = (oldTaskType: string) => {
  if (development.includes(oldTaskType)) return "development";
  else if (qa.includes(oldTaskType)) return "qa";
  else if (design.includes(oldTaskType)) return "design";
  else if (learning.includes(oldTaskType)) return "learning";
  else if (documentation.includes(oldTaskType)) return "documentation";
  else if (meetings.includes(oldTaskType)) return "meetings";
  else if (others.includes(oldTaskType)) return "others";
  else return `unknown-${oldTaskType}`;
};

export const getRandomIntNM = () => {
  return Math.floor(Math.random() * 360)
}

export const consolidateProjData = (projData: any[]) => {
  let names = projData.map((x: { resourcename: any; }) => x.resourcename);
  names = [...new Set(names)];
  let tasktypes = projData.map((x: { taskType: any; }) => x.taskType);
  tasktypes = [...new Set(tasktypes)];
  let returnData: any[] = [];
  names.forEach((nm: any) => {
    tasktypes.forEach((tt: any) => {
      let taskList = projData.filter(
        (x: { resourcename: any; taskType: any; }) => x.resourcename === nm && x.taskType === tt
      );
      if (taskList.length > 0) {
        // console.log(taskList);
        let totalHours = taskList.reduce(
          (acc: number, curr: { TotalHours: any; }) => acc + Number(curr.TotalHours),
          0
        );
        // console.log(totalHours);
        returnData = [
          ...returnData,
          {
            resourcename: nm,
            taskType: tt,
            TotalHours: totalHours
          }
        ];
      }
    });
  });

  return returnData;
};

export const flattenProjData = (projData: any[]) => {
  let massagedData: any[] = [];
  projData.forEach((employee: { dates: any[]; employeeid: any; resourcename: any; email: any; }) => {
    if (employee.dates && employee.dates.length > 0) {
      employee.dates.forEach((date: { TasksList: any[]; }) => {
        if (date.TasksList && date.TasksList.length > 0) {
          date.TasksList.forEach((task: { taskType: string; }) => {
            massagedData = [
              ...massagedData,
              {
                ...task,
                taskType: getNewTaskType(task.taskType),
                employeeid: employee.employeeid,
                resourcename: employee.resourcename,
                email: employee.email
              }
            ];
          });
        }
      });
    }
  });
  // console.log(massagedData);

  return massagedData;
};

export const getRandomInt = (arg: string) => {
  if (arg === "development") {
    return 0;
  }
  if (arg === "qa") {
    return 60;
  }
  if (arg === "design") {
    return 120;
  }
  if (arg === "learning") {
    return 180;
  }
  if (arg === "documentation") {
    return 90;
  }
  if (arg === "meetings") {
    return 240;
  }
  if (arg === "others") {
    return 340;
  }
};

export const getTaskLabel = (type: string) => {
  if (type === "development") return "Development";
  if (type === "qa") return "Quality Assuarance";
  if (type === "design") return "Design";
  if (type === "learning") return "Learning";
  if (type === "documentation") return "Documentation";
  if (type === "meetings") return "Meetings";
  if (type === "others") return "Others";
}