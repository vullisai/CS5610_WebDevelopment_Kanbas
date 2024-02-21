import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaFilm, FaArrowAltCircleRight, FaQuestionCircle } from "react-icons/fa";
import logo from "../../Images/NEU.png"
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 text-danger" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 text-danger" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 text-danger" /> },
    { label: "Inbox",   icon:<FaInbox className="fs-2 text-danger"/>},
    { label: "History", icon:<FaClock className="fs-2 text-danger"/>},
    { label: "Studio", icon:<FaFilm className="fs-2 text-danger"/>},
    { label: "Commons", icon:<FaArrowAltCircleRight className="fs-2 text-danger"/>},
    { label: "Help", icon:<FaQuestionCircle className="fs-2 text-danger"/>},
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation ">
        <a href="http://northeastern.edu" target="_blank" rel="noreferrer">
                    <img id="neu-logo" src={logo} alt="Northeastern University Logo" className="neu-logo"/>
                </a>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;