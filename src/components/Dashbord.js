import React, { useEffect } from 'react'
import { NavLink, Link, Redirect, useHistory } from 'react-router-dom'

const Dashbord = () => {
    let history = useHistory()


    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('session'))) {
            history.push('/')
        }

    })

    const logout = () => {
        window.localStorage.removeItem("session");
        history.push('/')


    }




    return (

        <>



            <div className="d-flex justify-content-center mt-3 login_container">
                <button type="button" name="button" className="btn login_btn" onClick={logout}>Logout</button>
            </div>

        </>

    )
}

export default Dashbord