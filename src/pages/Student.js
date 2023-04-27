import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import StudentContext from '../context/student/studentContext'

const Student = () => {
    const navigate = useNavigate()
    const context = useContext(StudentContext);
    const { studentLogin, student } = context;

    useEffect(() => {
        if (studentLogin === false) {
            navigate('/student/login')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div>Student Info</div>
            <div>{student.name}</div>
        </>
    )
}

export default Student