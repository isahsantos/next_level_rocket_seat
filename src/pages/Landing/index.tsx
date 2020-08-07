import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/img/images/logo.svg';
import landingImg from '../../assets/img/images/landing.svg';
import studyIncon from '../../assets/img/images/icons/study.svg';
import giveClassesIncon from '../../assets/img/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/img/images/icons/purple-heart.svg';
import './style.css'

function Landing (){
    return(
 <div id="page-landing">
    <div id="page-landing-content" className="container">
       <div className="logo-container">
           <img src= {logoImg}alt="Proffy"/>
           <h2>Sua plataforma de estudos online</h2>
           </div> 
           <img src={landingImg}    
           alt="landing"    
           className="hero-image"
           />
        <div className="buttons-container">
            <Link to="/study" className="study">
                <img src={studyIncon} alt=""/>
                Estudar
            </Link>
            <Link to="/give-classes" className="give-classes">
                <img src={giveClassesIncon} alt=""/>
                Dar aulas
            </Link>
            
        </div>
        <span className="total-connections">
                Total de 200 conexoes realizadas
                <img src={purpleHeartIcon} alt="Coração roxo"/>
            </span>
    </div>
 </div>
        );
}
export default Landing;
