import React from 'react'
import './About.css';

const CTA = () => {
  return (
    <div className='cta'>
      <a href='/assents/cv.pdf'download className='btn' >Download Resume</a>
      <a href='#contact' className='btn btn-primary' >Let's Talk</a>
    </div>
  )
}

export default CTA;
