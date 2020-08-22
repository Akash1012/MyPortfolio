import  React from 'react';
import {Grid,Cell} from 'react-mdl';
import  Me from '../assests/IMG_20200428_145214.jpg'

class LandingPage extends React.Component{
    render() {
        return (
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img src={Me} alt = 'Me' className = 'image'/>
                        <div className='banner-text'>
                            <h1>Front End Developer</h1>
                            <hr/>
                            <p>
                                React.Js/Redux/Hooks | JavaScript | HTML/CSS | BootStrap | Angular | Flutter
                            </p>
                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/akash-gupta-430667170/" rel="noopener noreferrer" target='_blank'>
                                    <i className='fa fa-linkedin-square' aria-hidden='true'/>
                                </a>
                                {/* Github */}
                                <a href="https://www.linkedin.com/in/akash-gupta-430667170/" target='_blank' rel="noopener noreferrer">
                                    <i className='fa fa-github-square' aria-hidden='true'/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export  default LandingPage;