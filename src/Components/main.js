import React from 'react'
import {Switch,Route} from "react-router-dom";
import LandingPage from "./landingPage";
import MyContacts from "./myContacts";
import MyProjects from "./myProjects";
import MyResume from "./myResume";

const Main = () => {
    return (
        <Switch>
            <Route  exact path = '/MyPortfolio/' component={LandingPage}/>
            <Route  exact path = '/' component={LandingPage}/>
            <Route  exact path = '/contact' component={MyContacts}/>
            <Route exact path = '/resume' component={MyResume}/>
            <Route exact path = '/projects' component={MyProjects}/>
        </Switch>
    )
}

export  default Main