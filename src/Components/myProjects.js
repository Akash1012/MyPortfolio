import React from 'react';
import {
    Tab,
    Tabs,
    CardText,
    section,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardActions,
    Button,
} from "react-mdl";

class MyProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    btnClick = () => {
        window.open('https://codesandbox.io/s/github/Akash1012/e-commerce-website/tree/master/?fontsize=14&hidenavigation=1&theme=dark');
    }
    btnClick1 = () => {
        window.open('https://codesandbox.io/s/github/Akash1012/Github_Finder-React/tree/master/github_finder_Adding_Hooks?fontsize=14&hidenavigation=1&theme=dark');
    }

    peak = () => {
        window.open('https://peakplanner.peakalpha.com/welcome/#/login');
    }

    toggleTabs = () => {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <br/><br/>
                    <Card shadow={0} style={{width: '912px', margin: 'auto'}}>
                        <CardTitle style={{
                            color: 'white',
                            height: '176px',
                            background: 'url(https://images.hindustantimes.com/auto/img/2020/04/23/960x540/toyota-rav4-2019-header-HT_Auto_1587630796796_1587630797030.jpg) center / cover'
                        }}>GSM Marketing Toyota </CardTitle>
                        <CardText style={{fontWeight: 'bold'}}>
                            Website for displaying data from business analytics tool for marketing strategies built
                            using
                            React library with Single Page FrameWork. I was involved in creating, editing and displaying
                            data
                            for different pages, managing filtering of data and search results and manages the image
                            module where users can upload the multiple image and show this in list table view.
                            <h4 className='headline'>Technology Used</h4>
                            <ul>
                                <li>React.JS</li>
                                <li>Redux</li>
                                <li>React-BootStrap</li>
                                <li>BootStrap</li>
                                <li>Single Page FrameWork</li>
                                <li>Micro-Services</li>
                            </ul>

                        </CardText>
                        <CardActions border>
                            <Button className='liveDemo' colored onClick={this.btnClick1}>Can't Share The link Due to
                                Privacy Issue</Button>
                        </CardActions>
                    </Card>
                    <br/><br/><br/>
                    <Card shadow={0} style={{width: '912px', margin: 'auto'}}>
                        <CardTitle style={{
                            color: '#fff',
                            height: '176px',
                            background: 'url(https://www.altran.com/as-content/uploads/sites/4/2017/05/5-0_finance_1600.jpg) center / cover'
                        }}>PeakAlpha</CardTitle>
                        <CardText style={{fontWeight: 'bold'}}>
                            Finance and Investment management website based on Ionic(a framework built on Angular).
                            Responsibilities to manages the dashboard , and users can upload the photos and included
                            data
                            to representation in expandable table format.

                            <h4 className='headline'>Technology Used</h4>
                            <ul>
                                <li>Angular 6</li>
                                <li>Ionic</li>
                            </ul>

                        </CardText>
                        <CardActions border>
                            <Button className='liveDemo' colored onClick={this.peak}>Live Demo</Button>
                        </CardActions>
                    </Card>
                    <br/><br/><br/>
                    <Card shadow={0} style={{width: '912px', margin: 'auto'}}>
                        <CardTitle style={{
                            color: '#fff',
                            height: '176px',
                            background: 'url(https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2018/10/10095425/ecommerce-solutions-intro-img.jpg) center / cover'
                        }}>E-Commerce</CardTitle>
                        <CardText style={{fontWeight: 'bold'}}>
                            This is a E-commerce website where you can buy clothes such as
                            T-shirt, shoes,caps and also you can add multiple items to cart and see the
                            current price and also checkout the payment process .
                            <p style={{color: 'red'}}>(This is my personal project)</p>
                            <h4 className='headline'>Technology Used</h4>
                            <ul>
                                <li>React.JS</li>
                                <li>Redux</li>
                                <li>FireBase</li>
                            </ul>

                        </CardText>
                        <CardActions border>
                            <Button className='liveDemo' colored onClick={this.btnClick}>Live Demo</Button>
                        </CardActions>
                    </Card>
                    <br/><br/><br/>
                    <Card shadow={0} style={{width: '912px', margin: 'auto'}}>
                        <CardTitle style={{
                            color: 'black',
                            height: '176px',
                            background: 'url(https://miro.medium.com/max/906/1*pXPseZOkwPqHGKaBXGS3sQ.png) center / cover'
                        }}>Git-Hub-Finder</CardTitle>
                        <CardText style={{fontWeight: 'bold'}}>
                            In this you can search any github user by name or by usename of
                            github and also you can see such as top 5 Repository, email id , company name where
                            he work etc .
                            <p style={{color: 'red'}}>(This is my personal project)</p>
                            <h4 className='headline'>Technology Used</h4>
                            <ul>
                                <li>React.JS</li>
                                <li>Hooks</li>
                            </ul>

                        </CardText>
                        <CardActions border>
                            <Button className='liveDemo' colored onClick={this.btnClick1}>Live Demo</Button>
                        </CardActions>

                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <Card shadow={0} style={{width: '912px', margin: 'auto'}}>
                        <CardTitle style={{
                            color: 'yellow',
                            fontWeight: 'bold',
                            height: '176px',
                            background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVJQftIhunWepz2tjJ1TgDpebpNbfrno_PkA&usqp=CAU) center / cover'
                        }}>Food APP</CardTitle>
                        <CardText style={{fontWeight: 'bold'}}>
                            This is a FoodApp where user can order food such as milk , bread chicken.
                            <h4 className='headline'>Technology Used</h4>
                            <ul>
                                <li>Flutter</li>
                                <li>Dart.Js</li>
                            </ul>

                        </CardText>
                        <CardActions border>
                            <Button className='liveDemo' colored onClick={this.btnClick1}> Not Completed Yet ( Still in Development phase )</Button>
                        </CardActions>

                    </Card>
                </div>
            )
        }
    }

    tab = (tabId) => {
        this.setState({
            activeTab: tabId
        })
    }


    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={this.tab} ripple>
                    <Tab>React</Tab>
                    <Tab>Flutter</Tab>
                </Tabs>
                <section>
                    <Grid className='projects-grid'>
                        <Cell col={12}>
                            <div className="content"> {this.toggleTabs()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default MyProjects;