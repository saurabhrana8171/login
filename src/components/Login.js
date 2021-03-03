import React, { useEffect, useState } from 'react'
import { NavLink, Link, Redirect, useHistory } from 'react-router-dom'

const Login = () => {
    let history = useHistory()

    const [user, setUser] = useState({
        email: '',
        pass: ''
    })
    const { email, pass } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (localStorage.getItem(user)) {
            history.push('/dashbord')
        }

    })

    const login = (e) => {
        const getuser = JSON.parse(localStorage.getItem('user'));
      

        if(!getuser){
            history.push('/')
        }
        else{
            if (user.email == getuser.email) {

                if (user.pass == getuser.pass) {
                    localStorage.setItem('session', JSON.stringify(getuser));
                    history.push('/dashbord')
                }
                else {
                    history.push('/')
                }
            }
            else {
                history.push('/')
            }

        }
   

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
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control input_user" placeholder="username" name="email" value={email} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control input_pass" placeholder="password" name="pass" value={pass} onChange={e => onInputChange(e)} />
                                </div>

                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <button type="button" name="button" className="btn login_btn" onClick={login}>Login</button>
                                </div>
                            </form>
                        </div>

                        <div className="mt-4">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?  <NavLink className="nav-link " aria-current="page" exact to="/signup">Signup</NavLink>
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

export default Login 