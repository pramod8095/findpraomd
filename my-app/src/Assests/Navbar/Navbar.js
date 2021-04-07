import React from 'react'
import './Navbar.css'
import * as ReactBootStrap from 'react-bootstrap'
import {FiDownload} from 'react-icons/fi'

export default function NavbarApp(){
    return(
        <div className = 'nav-body'>
            <ReactBootStrap.Navbar bg="dark" variant="dark">                
                <ReactBootStrap.Nav className="mr-auto">
                <ReactBootStrap.Nav href="">Pramod K</ReactBootStrap.Nav>              
                </ReactBootStrap.Nav>
                <ReactBootStrap.Form inline>                
                <ReactBootStrap.Nav style={{
                    fontSize:'18px'
                }}>ph:+91 8095707975<br/>Email:kpramod8095@gmail.com<br/>
                </ReactBootStrap.Nav>                
                </ReactBootStrap.Form>
            </ReactBootStrap.Navbar>
        </div>
        
    )
}
