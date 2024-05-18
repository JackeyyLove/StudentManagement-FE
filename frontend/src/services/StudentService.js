import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/api/v1/students'; 

export const listStudents = async () => {
    try {
      const response = await axios.get(REST_API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching students:', error);
      return [];
    }
  };

export const addStudent = async (student) =>  {
    try { 
        const response = await axios.post(REST_API_BASE_URL, student);
        return response.data;
    } catch (error) { 
        console.error('Error creating student:', error);
        return [];
    }
}

export const updateStudent = async (studentId, student) =>  {
    try { 
      const response = await axios.put(REST_API_BASE_URL + '/' + studentId, student);
      return response.data;
    } catch (error) { 
      console.error('Error updating student:', error);
      return [];
    }
}

export const getStudent = async (studentId) => {
    try { 
      const response = await axios.get(REST_API_BASE_URL + '/' + studentId);
      return response;
    } catch (error) { 
      console.error('Error getting student:', error);
      return [];
    }
  }
  
  // handle delete an employee
  export const removeStudent = async (studentId) =>  {
    try { 
      const response = await axios.delete(REST_API_BASE_URL + '/' + studentId);
      return response.data;
    } catch (error) { 
      console.error('Error deleting student:', error);
      return [];
    }
  }
