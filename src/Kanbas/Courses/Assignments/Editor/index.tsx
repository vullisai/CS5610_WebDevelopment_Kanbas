import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../../store";
import { updateAssignment, addAssignment, setAssignment } from "../assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignmentList=useSelector((state:KanbasState)=>
  state.assignmentsReducer.assignments);
  const dispatch=useDispatch();
  const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const isAssignmentExists = assignmentList.find(
    (assignment) => assignment._id === assignmentId
);
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
      <input value={assignment?.title} onChange={(e) => 
      dispatch(setAssignment({ ...assignment, title: e.target.value }))} 
      className="form-control w-100 mb-3 border-black" /><br/>
      <textarea value={assignment?.course} onChange={(e) => 
      dispatch(setAssignment({ ...assignment }))}
              className="form-control mb-2"/><br/>
              <div className="row justify-content-end">
              <div className="col-md-8">
                <label className="text-end">Point</label>
                <input value="100" className="form-control" />
              </div>
      </div>
      <br/>
      <div className="row justify-content-end">
      <label style={{width:'66.5%'}}>Assign</label>
      <li className="list-group-item" 
      style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '10px', 
      marginBottom: '10px', width:'65%', marginRight:'10px' }}>
        <div className="form-group">
          <label>Due</label>
          <input className="form-control" type="date"/>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-6">
            <label>Available From</label>
            <input className="form-control" type="date"/>
          </div>
          <div className="col-md-6">
            <label>Until</label>
            <input className="form-control" type="date"/>
          </div>
        </div>
      </li>
    </div>
      <br/>
      <hr/>
      <button onClick={() =>{ 
        if(isAssignmentExists)
        {dispatch(updateAssignment(assignment));}
        else
        {dispatch(addAssignment({...assignment,course:courseId}));}
      navigate(`/Kanbas/Courses/${courseId}/Assignments`)}}
       className="btn btn-success ms-2 float-end">
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