import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <>
    <div className="d-flex flex-end p-3" style={{flexDirection:"column", float:"inline-end"}}>
                    <div className="flex-no-wrap flex-end" style={{alignItems:"center"}}>
                        <label className="p-1 text-success"><FaCheckCircle className="text-success me-1" />Published</label>
                        <button className="btn-secondary btn-rad btn-grey-button"><FaEllipsisV/></button>
                    </div>
    </div>
    <br/><br/>
    <div className="p-3">
      <hr/>
      <h2>Assignment Name</h2>
      <input value={assignment?.title}
             className="form-control mb-2" />
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
        Cancel
      </Link>
    </div>
    </>
  );
}
export default AssignmentEditor;