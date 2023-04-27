import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import companyContext from '../context/company/companyContext'

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
            <div>Company Info</div>
            <div>{company.name}</div>
        </>
    )
}

export default Company