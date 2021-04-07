import React from 'react'
import {SiCoffeescript} from 'react-icons/si'
import {FaCode} from 'react-icons/fa'
import {GiTimeBomb} from 'react-icons/gi'
import {IoMdPhotos} from 'react-icons/io'
import {MdComputer} from 'react-icons/md'
import triangle from '../Images/triangle.png'
import './Facts.css'

export default function Facts(){
    return(
        <div>
            <div className='facts'>
                Facts
            </div>
            
            <div className='facts-des'>
                <p>
            <SiCoffeescript style={{ 

            }} /> 3 cups of coffee everyday!!, yeah you know the relation between coffee and developer ( <MdComputer/> + <SiCoffeescript /> = <FaCode/> )
            </p>
            <p>
            <FaCode /> 3.3K lines of code.
            </p>
            <p>
            <GiTimeBomb/> 36 hours of continuous codding. Hackathon!!! 
            </p>
            <p>
            <IoMdPhotos /> 200 Photos/Week. Photography enthusiast 
            </p>
            </div>
            <img src={triangle} style={{
                marginRight:'0',
                marginLeft:'80%',
                marginTop:'139%',
                position:'absolute',
                height:'4vh'
            }} className='tri-img'/>
        </div>
    )
}