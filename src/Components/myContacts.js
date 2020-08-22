import React from 'react';
import {Grid, Cell, ListItemContent, ListItem, List} from 'react-mdl'
import Akash from '../assests/akash.jpg'

class MyContacts extends React.Component {
    render() {
        return (
            <div className="contactBody">
                <Grid className="contactGrid">
                    <Cell col={6}>
                        <h2>Akash Gupta</h2>
                        <img src={Akash} alt="Akash" className='akash'/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}} className='intro'>
                            I am JavaScript web developer. I am really passionate to join some cool team to work with,
                            learn and explore. I am always curious to learn new technologies and take challenges while
                            working with them.

                            Working on project is always a great experience either for yourself or for some companies
                            since at the end building stuff that solve communities problems or help people to make their
                            life easier that drives me more.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contactList">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px',fontWeight:'bold'}}
                                    >
                                        <i className="fa fa-phone-square aria-hidden='true'"></i>
                                        952-332-2228</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px',fontWeight:'bold'}}
                                    >
                                        <i className="fa fa-envelope-square aria-hidden='true'"></i>
                                        gupta.akash2090@gmail.com</ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px',fontWeight:'bold'}}
                                    >
                                        <i className="fa fa-skype" aria-hidden='true'></i>
                                        live:gupta.akash2090</ListItemContent>
                                </ListItem>

                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default MyContacts;