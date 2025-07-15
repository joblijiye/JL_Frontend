import React from 'react';
// import {  FaTwitter, FaAws, FaPlay, FaMicrosoft, FaFacebook} from 'react-icons/fa';
import './../FloatingIcons/FloatingIcons.css';
import googleIcon from '../../assets/google.svg';
import twitterIcon from '../../assets/twitter.svg';
import awsIcon from '../../assets/aws.svg';
import Accenture from '../../assets/accenture.svg';
import microsoftIcon from '../../assets/microsoft.svg';
import infosysIcon from '../../assets/infosys.svg';
import facebookIcon from '../../assets/facebook.svg';


// const iconss = [
//   { Component: FcGoogle, style: {  color: '#4285F4' } },
//   { Component: FaTwitter, style: { color: '#1DA1F2' } },
//   { Component: FaAws, style: {  color: '#FF9900' } },
//   { Component: SiAccenture, style: {  color: '#A100FF' } },
//   { Component: FaMicrosoft, style: {  color: '#00A4EF' } },
//   { Component: SiInfosys , style: {  color: '#1DA1F2' } },
//   { Component: FaFacebook, style: {  color: '#3b5998' } },
// ];


const icons = [
  { src: googleIcon, alt: 'Google', style: { top: '17%', left: '10%',} },
  { src: twitterIcon, alt: 'Twitter', style: { top: '-32%', right: '65%', } },
  { src: awsIcon, alt: 'AWS', style:  { top: '-3%', left: '86%',} },
  { src: Accenture, alt: 'accenture', style: {top: '-27%', right: '38%',} },
  { src: microsoftIcon, alt: 'Microsoft', style: {bottom: '35%', left: '33%',} },
  { src: infosysIcon, alt: 'Infosys', style: { bottom: '20%', right: '35%',} },
  { src: facebookIcon, alt: 'Facebook', style: { top: '50%', left: '78%', } },
];

function FloatingIcons() {
  return (
       <div className="floating-icons">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="floating-icon shadow-xl  rounded-full p-2  text-center"
          style={icon.style}
        />
      ))}
    </div>
  );
}

export default FloatingIcons;







// import React from 'react';
// import './FloatingIcons.css';

// // Import your icon images



// function FloatingIcons() {
//   return (

//   );
// }

// export default FloatingIcons;

