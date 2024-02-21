import ModuleList from "../Modules/List";
import { FaDownload, FaArrowCircleRight, FaCrosshairs, FaChartBar, FaBullhorn, FaBell, FaTimes, FaMinusCircle } from "react-icons/fa";
function Home() {
  return (
    <div className="d-flex">
    <div className="flex-grow-1">
      <ModuleList />
    </div>
      <div className="flex-grow-0 col-md-3 p-2 mt-3">
                                <div className="button-column">
                                    <button className="btn btn-secondary"><FaDownload/> Import Existing Content</button>
                                </div>
                                <div className="button-column">
                                    <button className="btn btn-secondary  btn-block"><FaArrowCircleRight/> Import from Commons</button>
                                </div>
                                <div className="button-column">
                                    <button className="btn btn-secondary"><FaCrosshairs/>
                                        Choose Home
                                        Page</button>
                                </div>
                                <div className="button-column">
                                    <button className="btn btn-secondary"><FaChartBar/>
                                        View
                                        Course Stream</button>
                                </div>
                                <div className="button-column">
                                    <button className="btn btn-secondary"><FaBullhorn/>
                                        New
                                        Announcement</button>
                                </div>
                                <div className="button-column">
                                    <button className="btn btn-secondary"><FaChartBar/>
                                        New
                                        Analytics</button>
                                </div>
                                <div className="button-column">
                                    <button className="btn btn-secondary"> <FaBell/>
                                        View
                                        Course Notifications</button>
                                </div>
                                <br/>

                                <div className="coming-up ">
                                <div>
                                    <ul className="list-group list-group-flush">
                                        <h5>To Do
                                        </h5>
                                        <br/>
                                        <li className="list-group-item"><link><FaMinusCircle/>
                                                Grade A1 - ENV + HTML <FaTimes/></link><br/>
                                            <span className="sub-text">100 points | Sep 18 at 11:59PM</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
            </div>
    </div>
  );
}
export default Home;