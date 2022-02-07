import React from 'react';
import TextBox from '../UiComponents/TextBox'
import Button from '../UiComponents/Button'
import {connect} from 'react-redux';
import {signUpRequest} from '../../actions/user'
class SignUpForm extends React.Component {
    //line element only takes content width
    constructor() {
        super()
        this.nameRef = React.createRef()
        this.passRef = React.createRef()
        this.confirmRef = React.createRef()
}
    signup = (e) => {
    e.preventDefault();
    let email = this.nameRef.value
    let password = this.passRef.value
    let confirmPassword = this.confirmRef.value

    if (password !== confirmPassword) {
        alert('Password do not match')
    }else{
    this.props.signup(email, password)
    }
    }
    render() {
        return (

            <React.Fragment>
                <div className="form">
                    <h2>Teams Signup Form</h2>
                    <form>

                        <div className="mt-3">
                            <label className="mb-2">Email</label>
                            <br/>
                            <TextBox
                                type="text"
                                name="name"
                                placeHolder="Enter Your Name"
                                classname="form-control"
                                userRef={input => this.nameRef = input} value={this.nameRef.value}/>
                        </div>

                        <div className="mt-3">
                            <label className="mb-2">Password</label>
                            <br/>
                            <TextBox
                                type="password"
                                name="password"
                                placeHolder="Enter Your Password"
                                classname="form-control"
                                userRef={input => this.passRef = input}/>
                        </div>
                        <div className="mt-3">
                            <label className="mb-2">Confirm Password</label>
                            <br/>
                            <TextBox
                                type="password"
                                placeHolder="Confirm Password"
                                classname="form-control"
                                userRef={input => this.confirmRef = input}/>
                        </div>
                        <Button
                            type="submit"
                            value="Submit"
                            classname="btn btn-primary mt-3"
                            submitButton={e=>this.signup(e)}/>

                    </form>
                </div>

            </React.Fragment>
        )

    }
}

const mapDispatchToProps = (dispatch)=>({

    signup :(email, password)=>{
            dispatch(signUpRequest(email, password))
    }
})
export default connect(null,mapDispatchToProps)(SignUpForm)