import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {


    const [user, setUser] = useState({
        name: '',
        mob: '',
        email: '',
        pass: ''
    })
    const { name, mob, email, pass } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        // await axios.post("http://localhost:3003/users", user);
        // history.push('/')

        localStorage.setItem('user', JSON.stringify(user));
    }








    return (

        <>

            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center">
                            <div className="brand_logo_container">
                                <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" className="brand_logo" alt="Logo" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center form_container">
                            <form onSubmit={e => onSubmit(e)}>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control input_user" placeholder="Full Name" name="name" value={name} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control input_user" placeholder="Mobile Number" name="mob" value={mob} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control input_user" placeholder="Email" name="email" value={email} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="text" className="form-control input_pass" placeholder="password" name="pass" value={pass} onChange={e => onInputChange(e)} />
                                </div>

                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <button type="button" className="btn login_btn" onClick={onSubmit} >Signup</button>
                                </div>
                            </form>
                        </div>

                        <div className="mt-4">
                            <div className="d-flex justify-content-center ">
                                Don't have an account?  <NavLink className="nav-link " aria-current="page" exact to="/">Login</NavLink>
                            </div>
                            <div className="d-flex justify-content-center links">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Signup 