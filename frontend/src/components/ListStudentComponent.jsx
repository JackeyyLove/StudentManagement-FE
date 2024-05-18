import React, {useEffect, useState} from "react"
import { listStudents, removeStudent } from "../services/StudentService"
import {useNavigate} from 'react-router-dom'
function ListStudentComponent() {
    const [students, setStudents] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
      getAllStudent();
    }, []);
    function getAllStudent() {
      listStudents().then((response) => {
        setStudents(response); // response is already the data array
      }).catch((error) => {
        console.log(error);
      });
    }

    // Functions handle click button events
    function addNewStudent() {
      navigator('/add-student');
    }
    function updateStudent(id) { 
      navigator(`/edit-student/${id}`);
    }
    function deleteStudent(id) {
      removeStudent(id).then((response) => {
        getAllStudent();
      }).catch(error => {
        console.log(error);
      })
    }
  return (
    <>
        <div className="container">
            <h2 className="text-center">List of student</h2>
            <button className="btn btn-primary mb-2" onClick={addNewStudent}>Add student</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ và tên</th>
                        <th>Giới tính</th>
                        <th>Đại Học</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        students.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.sex}</td>
                                <td>{student.school}</td>
                                <td>
                                  <button type="button" className="btn btn-info" onClick={() => updateStudent(student.id)}>Update</button>
                                  <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ListStudentComponent