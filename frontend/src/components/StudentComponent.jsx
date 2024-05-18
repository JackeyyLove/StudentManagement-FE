import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { addStudent , getStudent, updateStudent} from "../services/StudentService"
function StudentComponent() { 
    // Store elements get from form 
    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [school, setSchool] = useState('')
    const navigator = useNavigate();

    // Store errors from adding form 
    const [errors, setErrors] = useState({ 
        name: '',
        sex: '',
        school: '', 
    })
    // Store parameter id, which represents for update page
    const {id} = useParams();
    
    // handle get Student for update 
    useEffect(() => {
        if(id) { 
            getStudent(id).then((response) => {
                setName(response.data.name)
                setSex(response.data.sex)
                setSchool(response.data.school)
            }).catch(error => {
                console.error(error);
            })
        }
    },[id])

    // Function to handle form submit
    function handleName(e) { 
        setName(e.target.value)
    }
    function handleSex(e) { 
        setSex(e.target.value)
    }
    function handleSchool(e) { 
        setSchool(e.target.value)
    }
    function saveStudent(e) { 
        e.preventDefault();
        if (validatedForm()) { 
            const student = {name, sex, school}
            if (id) { // if it has ID, which means that we are going to update info
                updateStudent(id, student).then(res =>{
                    console.log(res)
                    navigator('/students')
                })
            } else {
                // send data to repository and navigate to listStudents 
                addStudent(student).then(res => {
                    console.log(res)
                    navigator('/students')
                })
            }
        }
    
    }
    function titleHeader() {
        if (id) {
            return <h2 className="text-center">Update student</h2>
        } else {
            return <h2 className="text-center">Add student</h2>
        }
    }
    // Check validated adding form (Required infor)
    function validatedForm() { 
        let valid = true; 
        const errorsCopy = {...errors}
        if (name.trim()) { 
            errorsCopy.name = '';
        } else {
            errorsCopy.name = 'First name is required'; 
            valid = false;
        }
        if (sex.trim()) { 
            errorsCopy.sex = '';
        } else {
            errorsCopy.sex = 'Gender is required'; 
            valid = false;
        }
        if (school.trim()) { 
            errorsCopy.school = '';
        } else {
            errorsCopy.school = 'University is required'; 
            valid = false;
        }
        setErrors(errorsCopy)
        return valid; 
    }
    return (
        <div className="container">
            <div className="row">
                <div className="card">
                    {
                        titleHeader()
                    }
                   <div className="card-body">
                        <form action="" className="needs-validation" noValidate>
                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Họ và tên</label>
                                <input type = 'text' placeholder="Enter Student's name" name = 'name' value={name} className={`form-control ${errors.name ? 'is-invalid' : ''}`} onChange={handleName} ></input>
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="sex" className="form-label">Giới tính</label>
                                <select 
                                    id="sex" 
                                    name="sex" 
                                    value={sex} 
                                    className={`form-control ${errors.sex ? 'is-invalid' : ''}`} 
                                    onChange={handleSex}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                    <option value="Khác">Khác</option>
                                </select>
                                {errors.sex && <div className="invalid-feedback">{errors.sex}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Đại học</label>
                                <input type = 'text' placeholder="Enter Student's university" name = 'school' value={school} className={`form-control ${errors.school ? 'is-invalid' : ''}`} onChange={handleSchool}></input>
                                {errors.school && <div className="invalid-feedback">{errors.school}</div>}
                            </div>
                            
                            <button className="btn btn-success" onClick={saveStudent}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StudentComponent