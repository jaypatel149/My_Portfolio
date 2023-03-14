import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';




const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="/" color='inherit'  className="footer__logo">Home</a>
        </li>
        <li>
          <a href="#about" color='inherit' className="footer__logo">About</a>
        </li>
        <li>
          <a href="#experience" color='inherit' className="footer__logo">Exprience</a>
        </li>
        <li>
          <a href="#portfolio" color='inherit' className="footer__logo">Portfolio</a>
        </li>
        <li>
          <a href="#contact" color='inherit' className="footer__logo">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/" color='inherit'  className="social"><LinkedInIcon /></a>
        <a href="https://www.facebook.com/" color='inherit'  className="social"><FacebookIcon /></a>
        <a href="https://www.instagram.com/" color='inherit'  className="social"> <InstagramIcon /></a>
        <a href="https://twitter.com/" color='inherit'  className="social"> <TwitterIcon /></a>
      </div>
      <div className="footer__copyright">
        <h4 >♥ Jay Patel</h4>
      </div>
    </footer>
  )
}

export default Footer
