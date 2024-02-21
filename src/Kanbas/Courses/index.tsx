import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home"
import Assignments from "./Assignments"
import AssignmentEditor from "./Assignments/Editor"
import Grades from "./Grades";

function Courses() {
  const location=useLocation();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <h1><HiMiniBars3 /> Course {course?.name}{"  >  "}{location.pathname.split('/')[location.pathname.split('/').length-1]}</h1>
      <hr/>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "240px", top: "70px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Grades" element={<Grades/>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>}/>
            <Route path="People" element={<h1>People</h1>}/>
            <Route path="PanoptoVideo" element={<h1>Panoptp Video</h1>}/>
            <Route path="Credentials" element={<h1>Credentials</h1>}/>
            <Route path="ProgressReports" element={<h1>Progress Report</h1>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;