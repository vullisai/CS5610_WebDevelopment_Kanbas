import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaGripVertical, FaPenSquare, FaCaretDown } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <ul className="list-group wd-modules p-4">
                <li className="list-group-item">
                    <div>
                        <FaGripVertical className="me-2" size={25} /><FaCaretDown className="me-2" size={25} /> ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <FaGripVertical className="me-2" size={25} />
                                    </div>
                                    <div>
                                        <FaPenSquare className="me-2" size={25} />
                                    </div>
                                    <div className="flex-grow-1">
                                        <Link
                                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
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