import React from 'react'
import './Main.css'
import NavbarApp from '../Navbar/Navbar'
import Card  from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import imageOne from '../Images/1.jpg'
import exp from '../Images/exprience.jpg'
import awards from '../Images/awards.JPG'
import projects from '../Images/project.JPG'

export default function Main(){
    return(
        <div className='mainpage'>
            <NavbarApp />
            <div className='pramod'>
                <Card className="bg-dark text-white">
                    <Card.Img src={imageOne} 
                    style={{
                        opacity:0.7,
                        height:'auto',
                        padding:'10px',
                        boxShadow:'1px 1px 10px rgba(124, 100, 250, 1), 10px 10px 30px 10px rgba(34, 112, 147,1.0)',
                        width:'100%'
                     }}
                    />
                    
                    <Card.ImgOverlay>
                    
                        <Card.Title
                        style={{
                            fontSize:'35px',
                            height:'auto',
                            color: 'rgba(255, 255, 255, 0.952)',
                            fontFamily: 'Dancing Script',
                            resize: 'both',
                            overflow: 'auto'
                        }}>Pramod K, Consultant at Allstate</Card.Title>
                     
                        <Card.Text style={{
                            fontFamily: 'Dancing Script',
                            fontSize: '30px',
                            resize: 'both',
                            overflow: 'auto'
                        }}>
                        Aspiring for challenging level assignments in Software with a growth-oriented organization.<br/>Seeking a position to
                        utilize my skills & ability in the IT industry and offices that offers security<br/> & Professional growth while being
                        resourceful, innovative & Flexible. Industrious, self-motivated<br/>and cooperating, where I can exercise my skill to the
                        best and learn new skills to reinforce my knowledge<br/> base to mature as a thoroughbred professional.
                        </Card.Text>                    
                    </Card.ImgOverlay>                    
                </Card>
           </div>
           <div style={{
               marginTop:'20px',
               marginLeft:'1%',
               fontFamily:'Dancing Script',
               padding:'100px',  
               fontSize:'20px'             
           }}>
            <CardDeck>
                <Card
                style={{
                    boxShadow:'1px 1px 10px rgba(223, 230, 233,1.0), 10px 10px 30px 10px rgba(34, 112, 147,1.0)',
                }}>
                    <Card.Img variant="top" src={exp}/>
                    <Card.Body>
                    <Card.Title>Let me introduce myself </Card.Title>
                    <Card.Text>
                       i'm a react developer in Allstate and have 3.5 years of exprience in frontend developement, worked on many projects that involve complex and simple changes. 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                style={{
                    boxShadow:'1px 1px 10px rgba(223, 230, 233,1.0), 10px 10px 30px 10px rgba(34, 112, 147,1.0)',
                }}>
                    <Card.Img variant="top" src={projects} />
                    <Card.Body>
                    <Card.Title>Projects</Card.Title>
                    <Card.Text>
                        5 Major project in the span of 3.5, this includes creation of webpage from scrach.<br/>
                        Worked in Agile and Involving in daily meetings Key
                        Responsibilities Handled. <br/>
                        Handling different types of issues with suitable code
                        remediation tools.<br/>
                        Have hands on Experience in Javascript, ReactJs,
                        HTML, XMLs, React-Router,JSON.

                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                style={{
                    boxShadow:'1px 1px 10px rgba(223, 230, 233,1.0), 10px 10px 30px 10px rgba(34, 112, 147,1.0)',
                }}>
                    <Card.Img variant="top" src={awards} />
                    <Card.Body>
                    <Card.Title>Accomplishments/Awards</Card.Title>
                    <Card.Text>
                    Resolved 106 defects in span of 6 months related to
                    product through debug and coding testing.<br/>
                    Awarded Thanks a Zillion in the year of 2018 in
                    recognition of my development work in ARIA Project.<br/>
                    Star of the month.

                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
            </div>             
        </div>
        
    )
}