import React from 'react'
import square from '../Images/square.png'
import './Exprience.css'

export default function Experience (){
    return(
        <div>
            <div className='exp'>
                Experience
            </div>
            
            <div className='exp-des'>
                I started my carrer as Frontend Developer till now i have 3+ exprience building various types of websites using React, here are some intresting work of mine
                <li>Resolved 106 defects in span of 6 months related to product through debug and coding testing.</li> 
                <li>I grow as designer, by collaboration, research, advice, bring product into reality.</li>
                <li>Conducts preliminary discussions with clients regarding design and functionality of website.</li>
                <li>Reviews designs and features as presented by the team.</li>
                <li>Evaluates state of readiness of websites before turning over project to client.</li>
                <li>Carried out website updates.</li>
            </div>
            <img src={square} className='sq-img' style={{
                position:'absolute',
                marginTop:'90%',
                marginLeft:'20px'
            }}/>
            
        </div>
    )

}