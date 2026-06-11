import { Link } from "react-router-dom";
import "../styles/Navbar.css";

// Destructure currentTheme and onToggleTheme from the properties sent by App.jsx
function Navbar({ currentTheme, onToggleTheme }) {
 return (
  <nav className="navbar">

   <h2>Inthumathy</h2>

   <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/projects">Projects</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    
    {/* Dynamic Theme Toggle Action Element */}
    <li>
     <button 
      onClick={onToggleTheme} 
      className="theme-toggle-btn"
      aria-label="Toggle website display theme"
     >
      {currentTheme === "light" ? "🌙 Dark" : "☀️ Light"}
     </button>
    </li>
   </ul>

  </nav>
 );
}

export default Navbar;