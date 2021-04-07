import React from 'react'
import SkillBar from 'react-skillbars'
import './Skills.css'
import circle from '../Images/circle.png'
const SKILLS = [
    {
      "type": "Java",
      "level": 70,
    },
    {
      "type": "React",
      "level": 85
    },
    {
      "type": "Javascript",
      "level": 60
    },
    {
      "type": "CSS",
      "level": 75
    },
    {
      "type": "HTML 5",
      "level": 70
    }    
  ]


export default function Skills(){
    return(
        <div>
            <div className='skills'>
                Skills
            </div>
            <div className='graph'>
            <p style={{
                fontSize:'30px'
            }}>
                Technical Skills
            </p>
             <SkillBar skills={SKILLS} height={50} />
            </div>
            <img className='circle-img' src={circle} style={{
              position:'relative',
              height:'200px',
              top:'200px',
              left:'350px',
            }}/>

            
            
            
        </div>
    )
}