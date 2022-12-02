import React from 'react'
import './InvalidAccess.css'
import { useLocation } from 'react-router-dom'
export default function InvalidAccess() {
    let location = useLocation()
    // let navigator = useNavigate()

    console.log(location.pathname)
    return (
        <p className='para'>Email id and password  are not matching. Please Try Again later </p>
    )
}