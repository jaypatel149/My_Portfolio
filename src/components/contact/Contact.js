import './Contact.css';
import React,{useState} from 'react';


const Contact = () => {
  const [message, setMessage] =useState(false);

  const HandlerSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
  };






  return (
    <div className='container-flued px-5 py-5'>
      <div className='row g-5'>
        <div className='col-lg-6 col-md-6 col-sm-12 col-12' >
          <div className='shake-logo'>
            <img src='/assests/shake.webp' alt='contact' />
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 col-12' >
          <div className='text-center text-white mb-3'><h4>Contact.</h4></div>
            <form onSubmit={HandlerSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">Name</label>
                <input type="text" className="form-control" aria-describedby="textHelp" placeholder='Type Name...' />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">Email Address</label>
                <input type="Email" className="form-control" placeholder='Type Email...' />
              </div>
              <div className="mb-3">
                <label htmlFor="textarea" className="form-label text-white">Message</label>
                <textarea className="form-control"  rows="3" placeholder='Type Message...'></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
              {message && <p style={{color:"white",marginTop:"1rem",fontSize:"1.3rem"}}>Thanks, I'll reply ASAP 😊</p>}
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact
