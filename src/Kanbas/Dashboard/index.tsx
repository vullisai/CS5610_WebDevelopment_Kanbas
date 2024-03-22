import { Link } from "react-router-dom";
import courseImage from "../../Images/blue.jpg"

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; }){
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (12)</h2> <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
             <br/>
      <button onClick={addNewCourse} className="btn btn-secondary">
        Add
      </button>
      <span style={{ margin: '0 5px' }}></span>
      <button onClick={updateCourse} className="btn btn-secondary">
        Update
      </button>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card" >
                {/* <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/> */}
                <img src={courseImage} alt="Course" className="card-img-top"
                     style={{ height: 110 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course._id} {course.name}
                    </Link>
                  <p className="card-text">{course.startDate}{course.number}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-success">
                    Go
                    </Link>
                    <span style={{ margin: '0 5px' }}></span>
                    <button className="btn btn-secondary" onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                    }}>
                    Edit
                </button>
                <span style={{ margin: '0 5px' }}></span>
                    <button className="btn btn-danger" onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
              </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;