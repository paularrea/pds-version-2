import React from "react";
import "../styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailPage from "../components/PdsAgenda/components/detailPage/DetailPage";
import Questionnaire from "../components/Form/Questionnaire/Questionnaire"
import Autoevaluation from "../components/Form/Autoevaluation/Autoevaluation"
import UpcomingIntervention from "../components/Form/UpcommingIntervention/UpcommingIntervention"
import SuccessPage from "../components/Form/components/Success/SuccessPage"
import PdsHomePage from "../pages/PDS/home";

const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PdsHomePage} />
          <Route path="/pds-agenda/:id" component={DetailPage} />
          <Route path="/questionnaire" component={Questionnaire} />
          <Route path="/autoevaluation" component={Autoevaluation} />
          <Route path="/upcomming-intervention" component={UpcomingIntervention} />
          <Route path="/success" component={SuccessPage} />
        </Switch>
    </BrowserRouter>
  );
};

export default Routes;
