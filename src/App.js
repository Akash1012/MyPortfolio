import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './Components/main'
import {Link} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="demo-big-content">
                    <Layout>
                        <Header className='header-color'
                                title={<Link style={{textDecoration: 'none', color: 'white'}} to='/'>PORTFOLIO</Link>}
                                scroll>
                            <Navigation>
                                <Link className='navFont'
                                      to="/resume">Resume</Link>
                                <Link className='navFont'
                                      to="/projects">Projects</Link>
                                <Link className='navFont'
                                      to="/contact">Contact</Link>
                            </Navigation>
                        </Header>
                        <Drawer className='header-color' title={<Link className='navFont' to='/'>PORTFOLIO</Link>}>
                            <Navigation>
                                <Link className='navFont' to="/resume">Resume</Link>
                                <Link className='navFont' to="/projects">Projects</Link>
                                <Link className='navFont' to="/contact">Contact</Link>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content"/>
                            <Main/>
                        </Content>
                    </Layout>
                </div>
            </div>
        )
    }
}

export default App;
