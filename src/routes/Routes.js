import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailPage from "../components/Agenda/components/detailPage/DetailPage";
import Questionnaire from "../components/communityWorker/Form/Questionnaire/Questionnaire";
import Autoevaluation from "../components/communityWorker/Form/Autoevaluation/Autoevaluation";
import UpcomingIntervention from "../components/communityWorker/Form/UpcommingIntervention/UpcommingIntervention";
import SuccessPage from "../components/communityWorker/Form/components/Success/SuccessPage";
import LoginForm from "../components/Login/LoginForm";
import PdsHomePage from "../pages/communityWorker/home";
import LegalAdvise from "../components/communityWorker/LegalAdvise/LegalAdvise";

import SupervisorNavigation from "../components/Supervisor/Navigation/Navigation";
import Inicio from "../pages/Supervisor/Inicio";
import GestionarAgenda from "../pages/Supervisor/GestionarAgenda";
import DashboardPDS from "../pages/Supervisor/DashboardPDS";
import DashboardPacientes from "../pages/Supervisor/DashboardPacientes";
import Agenda from "../components/Supervisor/Manage/Agenda/Agenda";
import ConfirmIntervention from "../components/Supervisor/Manage/ConfirmIntervention/ConfirmIntervention";
import CreateIntervention from "../components/Supervisor/Manage/CreateIntervention/CreateIntervention";
import EditWorker from "../components/Supervisor/Manage/Agenda/components/EditWorker/EditWorker";
import "../styles/App.scss";
import { SupervisorContext } from "../SupervisorContext";
import supervisorData from "../data/dynamicSupervisorData";
import { CommunityWorkerContext } from "../CommunityWorkerContext";
import communityWorkerData from "../data/dynamicPDSData";

const Routes = () => {
  const [pdsData, setPdsData] = useState();
  const [contextData, setContextData] = useState();
  useEffect(() => {
    setContextData(supervisorData);
    setPdsData(communityWorkerData);
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        {/* Community Worker routes */}
        {/* <CommunityWorkerContext.Provider value={{ pdsData, setPdsData }}> */}
        <Route exact path="/" component={PdsHomePage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/legal-advise" component={LegalAdvise} />
        <Route path="/pds-agenda/:id" component={DetailPage} />
        <Route path="/questionnaire" component={Questionnaire} />
        <Route path="/autoevaluation" component={Autoevaluation} />
        <Route
          path="/upcomming-intervention"
          component={UpcomingIntervention}
        />
        <Route path="/success" component={SuccessPage} />
        {/* </CommunityWorkerContext.Provider> */}

        {/* Supervisor routes */}
        <SupervisorContext.Provider value={{ contextData, setContextData }}>
          <RouteWrapper
            exact
            path="/supervisor"
            component={Inicio}
            layout={SupervisorNavigation}
          />
          <RouteWrapper
            exact
            path="/gestionar-agenda"
            component={GestionarAgenda}
            layout={SupervisorNavigation}
          />
          <RouteWrapper
            exact
            path="/dashboard-pds"
            component={DashboardPDS}
            layout={SupervisorNavigation}
          />
          <RouteWrapper
            exact
            path="/dashboard-pacientes"
            component={DashboardPacientes}
            layout={SupervisorNavigation}
          />
          <RouteWrapper
            path="/gestionar-agenda/agenda"
            component={Agenda}
            layout={SupervisorNavigation}
          />
          <RouteWrapper
            path="/gestionar-agenda/edit/:id"
            component={EditWorker}
            layout={SupervisorNavigation}
          />
          <RouteWrapper
            path="/gestionar-agenda/intervenciones-pendientes"
            component={ConfirmIntervention}
            layout={SupervisorNavigation}
          />
          <RouteWrapper
            path="/gestionar-agenda/nueva-intervencion"
            component={CreateIntervention}
            layout={SupervisorNavigation}
          />
                 <RouteWrapper
            path="/gestionar-agenda/create-form-success"
            component={SuccessPage}
            layout={SupervisorNavigation}
          />
        </SupervisorContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

function RouteWrapper({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default Routes;
