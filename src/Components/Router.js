import React from "react";
import {
  HashRouter as Routers,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "../Components/Header";
import MainLecture from "../Route/MainLecture";
import CallApiResult from "../Route/CallApiResult";
import TimeZone from "../Route/TimeZone";

const Router = () => {
    return (
        <Routers>
            <Header />    
            <Switch>
                <Route path = "/" exact component={MainLecture} />                
                <Route path = "/api_1_result" exact component={CallApiResult} />
                <Route path = "/TimeZone" exact component={TimeZone} />
                <Redirect from="*" to="/" />
            </Switch>
        </Routers>
    )
}

export default Router;