import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {logout} from '../../actions/user'
import {connect} from 'react-redux'
export const Navbar = (props) => {
    // <Redirect to={{path="", state={from:state.location}}}
    return (
        <React.Fragment>
            <nav
                className="navbar navbar-expand-lg navbar-light  "
                style={{
                    padding: "20px",
                    width: "650px",
                    margin: "0 auto"
                }}>

                <Link
                    className="navbar-brand"
                    to="/"
                    style={{
                        fontSize: "24px"
                    }}>Teams</Link>

                <ul className="navbar-nav mr-auto">
                    {
                        props.auth
                            ? ''
                            : <li className="nav-item active">
                                    <Link
                                        className="nav-link"
                                        to="/signup"
                                        style={{
                                            fontSize: "24px"
                                        }}>SignUp</Link>
                                </li>
                    }
                    {
                        props.auth
                            ? ''
                            : <li className="nav-item active">
                                    <Link
                                        className="nav-link"
                                        to="/login"
                                        style={{
                                            fontSize: "24px"
                                        }}>Login</Link>
                                </li>

                    }
                    {
                        props.auth
                            ? <li className="nav-item active">
                                    <Link
                                        className="nav-link"
                                        to="/"
                                        onClick={() => {
                                            props.logout()
                                        }}
                                        style={{
                                            fontSize: "24px"
                                        }}>Logout</Link>
                                </li>
                            : null
                    }
                    {
                        props.auth
                            ? <li className="nav-item active">
                                    <Link
                                        className="nav-link"
                                        to="/dashboard"
                                        style={{
                                            fontSize: "24px"
                                        }}>Dashboard</Link>
                                </li>
                            : ''

                    }
                </ul>

            </nav>
        </React.Fragment>
    )

}

const mapStateToProps = (state) => ({auth: state.users.auth})
const mapDispatchToProps = (dispatch) => ({

    logout: () => {
        dispatch(logout())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)