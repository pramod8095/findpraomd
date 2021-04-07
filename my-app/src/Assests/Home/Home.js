import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './Home.css'
import {FiDownload} from 'react-icons/fi'
import {BrowserRouter ,Route} from 'react-router-dom'


export default function Home () {
    return(
        <BrowserRouter>
        <div>
            <div className = 'nav-body'>
            <ReactBootStrap.Navbar bg="dark" variant="dark">                
                <ReactBootStrap.Nav className="mr-auto">
                <ReactBootStrap.Nav.Link href="#home">Pramod K</ReactBootStrap.Nav.Link>                
                </ReactBootStrap.Nav>
                <ReactBootStrap.Form inline>
                </ReactBootStrap.Form>
            </ReactBootStrap.Navbar>

            <div className='nav-main'>
                <>
                    Hi, my name is Pramod and im a React Frontend developer at Allstate India.
                </>
            </div>
            <div>
            <h1 className='button-place'>
                    <ReactBootStrap.Button variant="outline-info" onClick={
                        ()=>{
                            <Route path='/main' component='Main'/>
                            console.log('clicked')
                        }
                    }>
                        Get inside
                    </ReactBootStrap.Button>
                </h1>
            </div>
        </div> 
        </div>
        </BrowserRouter>
    );

}