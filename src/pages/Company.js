import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import companyContext from '../context/company/companyContext'
import ProfileBar from '../components/ProfileBar'

const Company = () => {
    const navigate = useNavigate()
    const context = useContext(companyContext);
    const { companyLogin, company } = context;

    useEffect(() => {
        if (companyLogin === false) {
            navigate('/company/login')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <ProfileBar name={company.name} email={company.email}/>
        </>
    )
}

export default Company