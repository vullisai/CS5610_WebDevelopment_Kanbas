import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFilter, FaSearch, FaCog, FaShareSquare, FaCaretDown, FaDownload} from "react-icons/fa";
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div className="table-responsive p-3">
      <div className="row">
      
                        <div className="mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                            <div className="text-danger fs-4">GradeBook <FaCaretDown/></div>
                            <div>
                            <button type="button" className="btn btn-secondary btn-grey-button float-end mx-2">
                                <FaCog/></button>
                            <button type="button" className="btn btn-secondary btn-grey-button float-end mx-2">
                                <FaShareSquare/> Export <FaCaretDown/></button>
                            <button type="button" className="btn btn-secondary btn-grey-button  float-end mx-2">
                                <FaDownload/> Import</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-sm-6 ">
                            <label className="font-weight-bold">Student Names</label>
                            <div className="input-group-text" style={{backgroundColor:"white",height:"55%"}}>
                                <span><FaSearch/></span>
                                <select className="form-control form-select" style={{borderColor:"white"}}>
                                    <option value="" selected>Search Students
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label className="font-weight-bold">Assignment Names</label>
                            <div className="input-group-text" style={{backgroundColor:"white",height:"55%"}}>
                                <span><FaSearch/></span>
                                <select className="form-control form-select" style={{borderColor:"white"}}>
                                    <option value="" selected>Search Assignment
                                    </option>
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-secondary btn-grey-button"><FaFilter/> Apply Filters</button>
                        </div>
                    </div>
                    <br/>
                    <div className="table-responsive">
  <table className="table">
    <thead>
      <tr>
        <th style={{ borderCollapse: 'collapse', border: '1px solid black' }}>Student Name</th>
        {as.map((assignment) => (
          <th key={assignment._id} style={{ borderCollapse: 'collapse', border: '1px solid black' }}>{assignment.title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {es.map((enrollment, index) => {
        const user = users.find((user) => user._id === enrollment.user);
        return (
          <tr key={enrollment.user} className={index % 2 === 0 ? 'bgLight' : ''}>
            <td style={{ borderCollapse: 'collapse', border: '1px solid black' }} className="text-danger">
              {user?.firstName} {user?.lastName}
            </td>
            {as.map((assignment) => {
              const grade = grades.find(
                (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
              return (
                <td key={assignment._id} style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                  {grade?.grade || ""}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
</div>


      </div></div>);
}
export default Grades;

