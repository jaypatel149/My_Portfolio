import './About.css';
import React, { useEffect, useRef } from 'react';
import { init } from 'ityped'
import CTA from './CTA';

let isLoading = true;

const About = () => {
  const textRef = useRef(null);


  useEffect(() => {
    if (textRef.current && isLoading) {
      isLoading = false;
      init(textRef.current, {
        backDelay: 1500,
        backSpeed: 60,
        showCursor: true, strings: ["Developer", "React Js Developer", "Content Creator", "Self Learner", "Problem Solving"],
      })
    }
  }, [])
  return (
    <div className='container-flued px-5 py-4'>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
          <div className='image-contant'>
            <img src="/assests/jp.jpeg" alt='...' />
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
          <div className='intro'>
            <h2>
              Hello 👋🏻 I'm
            </h2>
            <h1>
              Jay Patel
            </h1>
            <h3>
              Frontend &nbsp; <span ref={textRef}></span>
            </h3>
            <CTA />
            <div className='pt-5'>
              <h2>About Me.</h2>
              <h5 style={{fontStyle:'oblique'}}>
                I am From Utter Pradesh.I am React Js Developer, I always had an interest in Computers to become a Software Engineer and make my family proud of my work. 
                I completed my school Education from a private college and have an interest in Technology. I started learning Python and Javascript 
                / ReactJs / HTML5/ CSS3/ Bootstrap4/ Matarial UI/ reactstrap/ Redux at Navgurukul.I am still learning in Navgurukul. 
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
