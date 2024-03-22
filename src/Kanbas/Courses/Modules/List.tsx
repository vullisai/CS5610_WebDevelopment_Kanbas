import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule,deleteModule,updateModule,setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
    <div className="module-cls p-4">
        <div className="buttons float-end">
      <button className="btns">Collapse All</button>
            <button className="btns">View Progress</button>
            <select className="btns p-1 border-secondary">
              <option>Publish All</option>
              <option>Unpublish All</option>
              <option>Unpublish All</option>
        </select>
        <button className="btns-module btn-danger">+ Module</button>
        <button className="btn btn-sm btn-secondary module-button course-home-col"><FaEllipsisV/>
                                    </button><br/><br/>
        </div>
      <ul className="list-group wd-modules">
      <li className="list-group-item" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '10px', marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '5px', marginBottom: '0', flex: '1' }} value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
          <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', marginLeft: '10px' }}>Add</button>
          <button className="btn btn-primary" style={{fontWeight:'bold', marginLeft:'5px', padding:'6px'}} onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
        </div>
        <textarea className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '5px', marginBottom: '10px', flex: '1' }} value={module.description} onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} />
      </li>
      {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" style={{marginRight:'3px'}}/>
                <button className='btn btn-secondary btn-sm'style={{marginRight:'10px', fontWeight:'lighter', padding:'2px'}}
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button className="btn btn-danger text-light" style={{fontWeight:'lighter', padding:'2px', marginLeft:'0px', marginBottom:'2px'}}
                        onClick={() => dispatch(deleteModule(module._id))}>
                        Delete
                </button>
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: any) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
export default ModuleList;