import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Modal, Button} from "react-bootstrap";
import {connect} from 'react-redux'
import TextBox from  '../UiComponents/TextBox'
import {addMember,deleteMember} from '../../actions/userData'
class UserDashBoard extends React.Component {

    constructor() {

        super()
        this.nameRef = React.createRef()
        this.compRef = React.createRef()
        this.statusRef =React.createRef()
        this.noteRef = React.createRef()
        this.state = {
            data: [],
            isOpen: false,
            company:[], 
            status:['Active','Close'],
            currentStatus:'All', 
            currentCompany:'All'
        }
    }

    componentDidMount() {
        const company = this.props.data.map(d=>(d.data().company))  
        this.setState({data: this.props.data,company:company,isOpen: false})
    }

    //after iLoading is set to false then it means the state is updated
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.isLoading !== prevProps.isLoading) {
         const company = this.props.data.map(d=>(d.data().company))   
         this.setState({data: this.props.data, company:company, isOpen: false})
        }
      }


    getDate = (date) => {
        let dateList = date.split(" ")

        return dateList[1] + "-" + dateList[2] + "-" + dateList[3]
    }
    handleAddMember = (e)=>{
        e.preventDefault()
        const data = { 
            name:this.nameRef.value,
            company:this.compRef.value,
            status:this.statusRef.value,
            notes:this.noteRef.value,
            last_updated:new Date()
        }
        this.props.addMem(data)
    }
 
    handleStatusChange = (e)=>{
        const StateData = this.props.data
        const status = e.target.value
        if(this.state.currentCompany === 'All'){
        //if company is all so status will be All active or closed
        const data = StateData.filter(d=>(d.data().status === status ))
        if (data.length !== 0){
            this.setState({...this.state,data:data,currentStatus:status})
        }
        else{
            this.setState({...this.state,data:StateData,currentStatus:status})
         }
        }
        else{
            //company is not All and status can be All, active and close
            const data = StateData.filter(d=>(d.data().company === this.state.currentCompany))
            .filter(s=>(s.data().status === status))

            if (data.length !== 0){
                this.setState({...this.state,data:data,currentStatus:status})
            }

            else if (status === 'All'){
            const data = StateData.filter(d=>(d.data().company === this.state.currentCompany))
            this.setState({...this.state,data:data,currentStatus:status})
            }

            else{
                this.setState({...this.state,data:[],currentStatus:status})
             }
        }

    }

    handleCompanyChange = e=>{
        const StateData = this.props.data
        const compnay = e.target.value
        if(this.state.currentStatus === 'All'){
            //status is all and company can be any and All
        const data = StateData.filter(d=>(d.data().company === e.target.value))
        if (data.length !== 0){
            this.setState({...this.state,data:data,currentCompany:compnay})
        }
        else{
            this.setState({...this.state,data:StateData,currentCompany:compnay})
         }
        }
        else{
            //status will be active and close and comapny will be active close or All
            const data = StateData.filter(d=>(d.data().status === this.state.currentStatus))
            .filter(s=>(s.data().company === compnay))

            if (data.length !== 0){
                this.setState({...this.state,data:data,currentCompany:compnay})
            }
            else if (compnay === 'All'){
                const data = StateData.filter(d=>(d.data().status === this.state.currentStatus))
                this.setState({...this.state,data:data,currentCompany:compnay})
            }
            else{
                this.setState({...this.state,data:[],currentCompany:compnay})
             }
        }
    }

    deleteRecord =  (e,id)=>{
        e.preventDefault()
        this.props.delete(id)
        this.setState({...this.state,data: this.props.data})
    }
    render() {

        if (this.props.isLoading){

            return <h1 style={{textAlign: 'center'}} className="mt-3">Loading</h1>
        }else{
        return (
            <React.Fragment>

                <div>
                    <div
                        style={{
                            marginLeft: "290px"
                        }}
                        className="mb-3 ">
                        <label>
                            <h4>Team Members</h4>
                        </label>
                        <Button
                            className="mx-3"
                            variant="secondary"
                            onClick={() => {
                                this.setState({
                                    ...this.state,
                                    isOpen: !this.state.isOpen
                                })
                            }}>
                            Add Member
                        </Button>
                    </div>
                    <div style={{marginLeft:"290px"}} className="mb-3">
                        <select onChange={e=>this.handleCompanyChange(e)}>
                            <option>All</option>
                            {[...new Set (this.state.company)].map(c=>(<option key={c}>{c}</option>))}
                        </select>
                        <select className="mx-3" onChange={e=>this.handleStatusChange(e)}>
                            <option>All</option>
                            {this.state.status.map(s=>(<option key={s}>{s}</option>))}
                        </select>
                    </div>
                    <div
                        style={{
                            width: "70%",
                            margin: "0 auto"
                        }}>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Status</th>
                                    <th>Last Updated</th>
                                    <th>Notes</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this
                                        .state
                                        .data
                                        .map(d => (

                                            <tr key={d.id}>
                                                <td>{
                                                        d
                                                            .data()
                                                            .name
                                                    }</td>
                                                <td>{
                                                     d
                                                     .data()
                                                     .company
                                                    }</td>
                                                <td>{
                                                        d
                                                            .data()
                                                            .status
                                                    }</td>
                                                <td>{this.getDate(String((d.data().last_updated.toDate())))}</td>
                                                <td>{
                                                        d
                                                            .data()
                                                            .notes
                                                    }</td>
                                                <td><i className="bi bi-trash" onClick={(e)=>this.deleteRecord(e,d.id)}></i></td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <Modal show={this.state.isOpen}>
                        <Modal.Header>
                            <Modal.Title>Add Member</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>

                                <div className="mt-3">
                                    <label className="mb-2">Name</label>
                                    <br/>
                                    <TextBox
                                        type="text"
                                        name="name"
                                        placeHolder="Enter Your Name"
                                        classname="form-control"
                                        userRef={input => this.nameRef = input}
                                        />
                                </div>

                                <div className="mt-3">
                                    <label className="mb-2">Company</label>
                                    <br/>
                                    <TextBox
                                        type="text"
                                        name="company"
                                        placeHolder="Enter Company"
                                        classname="form-control"
                                        userRef={input => this.compRef = input}/>
                                </div>
                                <div className="mt-3">
                                    <label className="mb-2">Status</label>
                                    <br/>
                                    <TextBox
                                        type="text"
                                        name="status"
                                        placeHolder="Enter Status"
                                        classname="form-control"
                                        userRef={input => this.statusRef = input}
                                        />
                                </div>
                                <div className="mt-3">
                                    <label className="mb-2">Notes</label>
                                    <br/>
                                    <TextBox
                                        type="text"
                                        name="note"
                                        placeHolder="Enter Notes"
                                        classname="form-control"
                                        userRef={input => this.noteRef = input}
                                        />
                                </div>
                                <Button className = "mt-3"
                                variant="primary" onClick={(e)=>{this.handleAddMember(e)}}> Submit</Button>

                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    this.setState({
                                        ...this.state,
                                        isOpen: !this.state.isOpen
                                    })
                                }}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </React.Fragment>
        )
    }
}
}
const mapStateToProps = (state) => ({data: state.userData.data, isLoading:state.userData.isLoading})
const mapDispatchToProps = (dispatch)=>({
    addMem:(data)=>{
        dispatch(addMember(data))
    },
    delete:(id)=>{
        dispatch(deleteMember(id))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(UserDashBoard);

//for state to render setState should get triggered use loading for this purpose