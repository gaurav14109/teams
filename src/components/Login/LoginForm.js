import React from 'react';
import TextBox from '../UiComponents/TextBox'
import Button from '../UiComponents/Button'
import {loginRequest} from '../../actions/user'
import {connect} from 'react-redux'

class Login extends React.Component {
    //line element only takes content width
    constructor() {
        super()
        this.nameRef = React.createRef()
        this.passRef = React.createRef()
    }
    
    login = (e) => {
        e.preventDefault();
        let email =  this.nameRef.value
        let password = this.passRef.value
        this.props.login(email, password)
    }
    render() {

        return (


            <React.Fragment>
                <div style={{textAlign:"center",color:"red", fontSize:"24px"}}>{this.props.error}</div>
                <div className="form">
                    <h2>Teams Login Form</h2>
                    <form>

                        <div className="mt-3">
                            <label className="mb-2">Email</label>
                            <br/>
                            <TextBox
                                type="text"
                                name="name"
                                placeHolder="Enter Your Name"
                                classname="form-control"
                                userRef={input => this.nameRef = input}
                                value={this.nameRef.value}/>
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
                        <Button
                            type="submit"
                            value="Submit"
                            classname="btn btn-primary mt-3"
                            submitButton={e=>this.login(e)}/>

                    </form>
                </div>

            </React.Fragment>
        )

    }
}
const mapDispatchToProps = (dispatch)=>({

    login :(email, password)=>{
            dispatch(loginRequest(email, password))
    }

})
const mapStateToProps = (state)=>({
    error:state.users.error
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)