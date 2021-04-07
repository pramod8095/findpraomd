import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function SocialFollow() {
  return (
    <div>
      <div style={{
        fontFamily:'Dancing Script',
        fontSize:'30px',
        textAlign:'center',
        textIndent:'2px',
        color:'white',
        
      }}>
        <h3>Social Media</h3>
      </div>
      <div style={{
        marginLeft:'45%'

      }}>
        <a
          href="https://www.facebook.com/pramod.kotresh/" target='_blank'
          className="facebook social"
        >&emsp;
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://github.com/pramod8095" target='_blank' 
           className="twitter social">&emsp;
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/impramodk/" target='_blank'
          className="instagram social"
        >&emsp;
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a 
          href="../Images/Pramod_ReactJs.pdf" download="Pramod_ReactJS.pdf"
          style={{
            fontFamily:'Dancing Script',
            fontSize:'30px',
          }}>&emsp;
          Resume <FontAwesomeIcon icon={faDownload} size='0.5x' />
        </a>
      </div>
    </div>
  );
}
