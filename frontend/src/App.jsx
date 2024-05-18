import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListStudentComponent from './components/ListStudentComponent'
import StudentComponent from './components/StudentComponent'
import HeaderComponent from './components/HeaderComponent'
function App() {

  return (
    <>
      <BrowserRouter>
          <HeaderComponent/>
            <Routes>
              <Route path ='/' element = {<ListStudentComponent/>}></Route>
              <Route path = '/students' element = {<ListStudentComponent/>}></Route>
              <Route path ='/add-student' element = {<StudentComponent/>}></Route>
              <Route path ='/edit-student/:id' element = {<StudentComponent/>}></Route>
              
            </Routes>
          
      </BrowserRouter>
    </>
  )
}

export default App
