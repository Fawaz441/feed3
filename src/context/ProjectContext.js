/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext({
  activeStage: null,
  stages: null,
  project: null,
  getData: null,
});

export const ProjectContextWrapper = ({ children }) => {
  const [activeStage, setActiveStage] = useState(false);
  const [stages, setStages] = useState(false);
  const [project, setProject] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return new Promise((resolve, reject) => {
      if (stages || activeStage) {
        resolve(true);
        return;
      }
      const API_URL = "https://api.feed3.io/api/v1";
      // get all stages
      let stagesRequest = fetch(API_URL + "/stages", { method: "GET" }).then(
        (response) => {
          return response.json();
        }
      );
      // get active/current stage
      let activeStageRequest = fetch(API_URL + "/stages/active", {
        method: "GET",
      }).then((response) => {
        return response.json();
      });
      let projectRequest = fetch(API_URL + "/projects/current", {
        method: "GET",
      }).then((response) => {
        return response.json();
      });
      Promise.all([stagesRequest, activeStageRequest, projectRequest])
        .then((responses) => {
          setStages(responses[0].data);
          setActiveStage(responses[1]);
          setProject(responses[2]);
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const StageData = {
    activeStage,
    stages,
    project,
    getData,
  };

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      getData();
    }
  }, []);

  return (
    <ProjectContext.Provider value={StageData}>
      {children}
    </ProjectContext.Provider>
  );
};
