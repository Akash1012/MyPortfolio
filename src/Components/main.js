import React from 'react'
import {Switch,Route} from "react-router-dom";
import LandingPage from "./landingPage";
import MyContacts from "./myContacts";
import MyProjects from "./myProjects";
import MyResume from "./myResume";

const Main = () => {
    return (
        <Switch>
            <Route  path = '/MyPortfolio/' component={LandingPage}/>
            <Route  path = '/' component={LandingPage}/>
            <Route  path = '/contact' component={MyContacts}/>
            <Route  path = '/resume' component={MyResume}/>
            <Route  path = '/projects' component={MyProjects}/>
        </Switch>
    )
}

export  default Main