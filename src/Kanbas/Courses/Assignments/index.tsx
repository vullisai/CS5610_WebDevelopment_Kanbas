import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaGripVertical, FaPenSquare, FaCaretDown } from "react-icons/fa";
import { Link, useParams,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";
function Assignments() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const assignmentList=useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
    const assignment=useSelector((state:KanbasState)=>
    state.assignmentsReducer.assignment);
    return (
        <>
            <ul className="list-group wd-modules p-4">
                <li className="list-group-item">
                    <div>
                        <FaGripVertical className="me-2" size={25} /><FaCaretDown className="me-2" size={25} /> ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                        <button onClick={() => {navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`)}}>
                            <FaPlusCircle className="ms-2" />
                            </button>
                            <FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList
                        .filter((module) => module.course === courseId)
                        .map((a) => (
                            <li className="list-group-item">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <FaGripVertical className="me-2" size={25} />
                                    </div>
                                    <div>
                                        <FaPenSquare className="me-2" size={25} />
                                    </div>
                                    <div className="flex-grow-1">
                                        <Link onClick={()=>dispatch(setAssignment(a))}
                                            to={`/Kanbas/Courses/${courseId}/Assignments/${a._id}`}>{a.title}</Link>
                                        <div >
                                            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                                                <div className="text-danger">
                                                    Multiple Modules
                                                </div>
                                                <div> | Due 10th Dec at 11:59pm | 100 pts</div>  
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-0">
                                    <FaCheckCircle className="text-success" />
                                    <FaEllipsisV className="ms-2" />
                                    <button className="btn btn-danger text-light" style={{ fontWeight:'lighter', padding:'2px', marginLeft:'0px', marginBottom:'2px' }}
                                            onClick={() => {
                                                if (window.confirm("Are you sure you want to delete this assignment?")) {
                                                    dispatch(deleteAssignment(a._id));
                                                }
                                            }}>
                                        Delete
                                    </button>

                                    </div>
                                </div>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;