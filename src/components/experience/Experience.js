import React from 'react'
import './Experience.css';

const data = [
  {
    id:1,
    image: "/assests/icons/react.svg",
    title: "REACTJS",
  },
  {
    id:2,
    image: "/assests/icons/java-script.svg",
    title: "JAVASCRIPT",
  },
  {
    id:3,
    image: "/assests/icons/redux.svg",
    title: "REDUX",
  },
  {
    id:4,
    image: "/assests/icons/node-js.svg",
    title: "NODE JS",
  },
  {
    id:5,
    image: "/assests/icons/bootstrap.svg",
    title: "BOOTSTRAP5",
  },
  {
    id:6,
    image: "/assests/icons/html5.svg",
    title: "HTML5",
  },
  {
    id:7,
    image: "/assests/icons/github-logo.svg",
    title: "GITHUB",
  },
  {
    id:8,
    image: "/assests/icons/css3.svg",
    title: "CSS3",
  },
  {
    id:9,
    image: "/assests/icons/java-script.svg",
    title: "EXPRESS Js",
  },
  {
    id:10,
    image: "/assests/icons/mui.svg",
    title: "MATERIAL UI",
  },
  {
    id:11,
    image: "/assests/icons/python.svg",
    title: "PYTHON",
  },
  {
    id:12,
    image: "/assests/icons/json-file.svg",
    title: "JSON",
  },

]











const Experience = () => {
  return (
    <div className='container-flued px-5 py-5'>
      <div className='experience__box'>
        <div className='text-center mb-4'>
          <h5 style={{color:'#FFFF'}}>What Skills I have</h5>
          <h2 style={{color:'#f9bf8f'}}>My Experience</h2>
        </div>
      <div className='row g-5'>
        {data?.map(({id, image, title }) => {
          return (
            <div key={id} className='col-lg-2 col-md-3 col-sm-12 col-12'>
              <div className='experience__details'>
                <img src={image} alt='icon' />
                <h4>{title}</h4>
              </div>
            </div>
          )
        })}

      </div>
      </div>
    </div>
  )
}

export default Experience
