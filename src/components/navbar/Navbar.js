import './Navbar.css';
import React,{useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ChatIcon from '@mui/icons-material/Chat';
import {IconButton} from '@mui/material'

const Navbar = () => {
  const [navbar, setNavbar] = useState('#');


  return (
    <div className='container-flued mx-5'>
      <div className='nav'>
        <a href="#about"  onClick={()=>setNavbar('#about')} className={navbar==="#" ? 'active' : ''}><IconButton className='redius'><HomeIcon/></IconButton></a>
        <a href="#contact"  onClick={()=>setNavbar('#contact')} className={navbar==="#contact" ? 'active' : ''} ><IconButton className='redius'><PersonIcon/></IconButton></a>
        <a href="#topbar"  onClick={()=>setNavbar('#topbar')} className={navbar==="#topbar" ? 'active' : ''}><IconButton className='redius'><LibraryBooksIcon/></IconButton></a>
        <a href="#experience"  onClick={()=>setNavbar('#experience')} className={navbar==="#experience" ? 'active' : ''}><IconButton className='redius'><HandshakeIcon/></IconButton></a>
        <a href="#portfolio"  onClick={()=>setNavbar('#portfolio')} className={navbar==="#portfolio" ? 'active' : ''}><IconButton className='redius'><ChatIcon/></IconButton></a>
      </div>
    </div>
  )
}

export default Navbar
