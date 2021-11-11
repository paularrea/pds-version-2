import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../user_auth_with_FIREBASE/AuthContext";
import Login from "../components/GeneralComponents/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/HomePageRedirection";
import { UserDataProvider } from "../context/UserContext";
import SupervisorHomePage from "../pages/Supervisor/SupervisorHomePage";
import DetailPage from "../components/GeneralComponents/Agenda/components/detailPageTemplate/DetailPage";
import Questionnaire from "../components/communityWorker/Form/Questionnaire/Questionnaire";
import Autoevaluation from "../components/communityWorker/Form/Autoevaluation/Autoevaluation";
import UpcommingIntervention from "../components/communityWorker/Form/UpcommingIntervention/UpcommingIntervention";
import SuccessPage from "../components/communityWorker/Form/components/Success/SuccessPage";
import GestionarAgenda from "../pages/Supervisor/GestionarAgenda";
import SupervisorNavigation from "../components/Supervisor/Navigation/Navigation";
import CreateIntervention from "../components/Supervisor/ManageAgenda/CreateIntervention/CreateIntervention";
import ConfirmIntervention from "../components/Supervisor/ManageAgenda/ConfirmIntervention/ConfirmIntervention";
import Agenda from "../components/GeneralComponents/Agenda/Agenda";
import DashboardPacientes from "../pages/Supervisor/DashboardPacientes";
import DashboardPDS from "../pages/Supervisor/DashboardPDS";
import SeeAgenda from "../components/Supervisor/ManageAgenda/SeeAgenda/SeeAgenda";

const Routes = () => {
  return (
    <AuthProvider>
      <UserDataProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            {/* COMMUNITY WORKER ROUTES */}
            <PrivateRoute path="/pds-agenda/:id" component={DetailPage} />
            <PrivateRoute path="/questionnaire" component={Questionnaire} />
            <PrivateRoute path="/autoevaluation" component={Autoevaluation} />
            <PrivateRoute
              path="/upcomming-intervention"
              component={UpcommingIntervention}
            />
            <PrivateRoute path="/success" component={SuccessPage} />

            {/* SUPERVISOR ROUTES */}
            <RouteWrapper
              exact
              path="/supervisor"
              component={SupervisorHomePage}
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
              component={SeeAgenda}
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
          </Switch>
        </Router>
      </UserDataProvider>
    </AuthProvider>
  );
};

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
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
