import  React from 'react';
import {Grid,Cell,ProgressBar} from 'react-mdl';
import  Me from '../assests/IMG_20200428_145214.jpg'
import {Link} from "react-router-dom";

class MyResume extends React.Component{
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={5}>
                        <div style={{textAlign:'center'}}>
                            <img src={Me} alt = 'Me' className = 'image'/>
                            
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Akash Gupta</h2>
                        <h4 style={{color:'grey'}}>Front End Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:'60%'}}/>
                        <p style={{ margin: 'auto', paddingTop: '1em'}} className='intro'>
                            I am JavaScript web developer. I am really passionate to join some cool team to work with, learn and explore. I am always curious to learn new technologies and take challenges while working with them. Working on project is always a great experience either for yourself or for some companies since at the end building stuff that solve communities problems or help people to make their life easier that drives me more.
                        </p>
                        <br/><br/><br/><br/>
                        <h5>Phone:- 952-332-22228</h5>
                        <h5>Email:- gupta.akash2090@gmail.com</h5>

                        <hr style={{borderTop:'3px solid #833fb2',width:'60%'}}/>
                    </Cell>
                    <Cell className='resumeRight' col={7}>
                        <h2>Education</h2>
                        <Grid>
                            <Cell col={4}>
                                <p style={{marginBottom:'0px'}}>B.Tech :- 2018</p>
                                <hr style={{borderTop:'2px solid #833fb2',marginTop:'0px',width:'50%'}}/>

                            </Cell>
                            <Cell col={8}>
                                <h4 style={{marginTop:'0px'}}>Academy of Technology</h4>
                                <p>Percent
                                    Obtained :- 84%</p>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <p style={{marginBottom:'0px'}}>Class 12 :- 2013</p>
                                <hr style={{borderTop:'2px solid #833fb2',marginTop:'0px',width:'50%'}}/>

                            </Cell>
                            <Cell col={8}>
                                <h4 style={{marginTop:'0px'}}> D.A.V Public School (C.B.S.E)</h4>
                                <p>Percent
                                    Obtained :- 78%</p>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <p style={{marginBottom:'0px'}}>Class 10 :- 2011</p>
                                <hr style={{borderTop:'2px solid #833fb2',marginTop:'0px',width:'50%'}}/>

                            </Cell>
                            <Cell col={8}>
                                <h4 style={{marginTop:'0px'}}>D.A.V Public School (C.B.S.E)</h4>
                                <p>Percent
                                    Obtained :- 70%</p>
                            </Cell>
                        </Grid>
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Grid>
                            <Cell col={4}>
                                <p style={{marginBottom:'0px'}}>1st April 2019 - Present </p>
                                <hr style={{borderTop:'2px solid #833fb2',marginTop:'0px',width:'96%'}}/>

                            </Cell>
                            <Cell col={8}>
                                <h4 style={{marginTop:'0px'}}>Company : Totient Business Solution</h4>
                                <p>Working as a Front End Developer,
                                    <Link to = '/projects'> <b>Click To See My Projects</b></Link>
                                </p>
                            </Cell>
                        </Grid>
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Grid>
                            <Cell col={12}>
                                <div style={{display:'flex',color:'red',fontWeight:'bold'}}>React.js<ProgressBar style={{margin:'auto',width:'75%'}} progress={91}/>91/100</div>
                            </Cell>
                        </Grid>

                        <Grid>
                            <Cell col={12}>
                                <div style={{display:'flex',color:'red',fontWeight:'bold'}}>JavaScript<ProgressBar style={{margin:'auto',width:'75%'}} progress={80}/>80/100</div>
                            </Cell>
                        </Grid>


                        <Grid>
                            <Cell col={12}>
                                <div style={{display:'flex',color:'red',fontWeight:'bold'}}>Angular<ProgressBar style={{margin:'auto',width:'75%'}} progress={45}/>45/100</div>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={12}>
                                <div style={{display:'flex',color:'red',fontWeight:'bold'}}>Flutter<ProgressBar style={{margin:'auto',width:'75%'}} progress={60}/>60/100</div>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={12}>
                                <div style={{display:'flex',color:'red',fontWeight:'bold'}}>HTML<ProgressBar style={{margin:'auto',width:'75%'}} progress={88}/>88/100</div>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={12}>
                                <div style={{display:'flex',color:'red',fontWeight:'bold'}}>CSS<ProgressBar style={{margin:'auto',width:'75%'}} progress={84}/>84/100</div>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={12}>
                                <div style={{display:'flex',color:'red',fontWeight:'bold'}}>BootStrap 4<ProgressBar style={{margin:'auto',width:'75%'}} progress={80}/>80/100</div>
                            </Cell>
                        </Grid>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export  default MyResume;