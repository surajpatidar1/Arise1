import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useContext, useState } from 'react';
import { StoreContext } from "../../Store/Store";

const Navbar = () => {
  const { setVideo, setShowService, setShowAbout, setShowContact } = useContext(StoreContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const onService = () => {
    setVideo("false");
    setShowService(true);
    setMenuOpen(false);
    navigate("/service");
  };

  const onContact = () => {
    setVideo("false");
    setShowContact(true);
    setMenuOpen(false);
    navigate("/contact");
  };

  const onAbout = () => {
    setVideo("false");
    setShowAbout(true);
    setMenuOpen(false);
    navigate("/about");
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="/logo.jpg" alt="Logo" className="logo" />
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`options ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={onService}>Services</li>
          <li onClick={onContact}>Contact Us</li>
          <li onClick={onAbout}>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
