import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import { MDBRow, MDBCol, MDBBtn,MDBCardTitle,MDBCardHeader,MDBIcon } from "mdbreact";
import { palette } from '@material-ui/system';
import { FormLabel } from '@material-ui/core';
import { FormControlLabel,RadioGroup,FormControl } from '@material-ui/core'
import { Radio } from '@material-ui/core';
import '@fortawesome/fontawesome-free/css/all.min.css';
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';


export default class RegisterSupplier extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeSupplierName = this.onChangeSupplierName.bind(this);
    this.onChangeSupplierlastname = this.onChangeSupplierlastname.bind(this);
    this.onChangeSupplieremail = this.onChangeSupplieremail.bind(this);
    this.onChangeSuppliernic = this.onChangeSuppliernic.bind(this);
    this.onChangeSuppliermobile = this.onChangeSuppliermobile.bind(this);
    this.onChangeSuppliergender = this.onChangeSuppliergender.bind(this);
    this.onChangeSupplieraddress = this.onChangeSupplieraddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      lastname:'',
      email: '',
      NIC: '',
      Mobile:'',
      address:'',
      gender:'',
   
    }
  }

  onChangeSupplierName(e) {
    this.setState({name: e.target.value})
  }
  
  onChangeSupplierlastname(e) {
    this.setState({lastname: e.target.value})
  }


  onChangeSupplieremail(e) {
    this.setState({email: e.target.value})
  }

  onChangeSuppliernic(e) {
    this.setState({NIC: e.target.value})
  }
  onChangeSuppliermobile(e) {
    this.setState({mobile: e.target.value})
  }

  onChangeSupplieraddress(e) {
    this.setState({address: e.target.value})
  }
  
  onChangeSuppliergender(e) {
    this.setState({gender: e.target.value})
  }


  onSubmit(e) {
    e.preventDefault()


    const Supplier ={

        name:this.state.name,
        email:this.state.email,
        NIC:this.state.NIC,
        mobile:this.state.mobile,
        lastname:this.state.lastname,
        address:this.state.address,
        gender:this.state.gender,
    }


   axios.post(' http://localhost:4000/supplier/register',Supplier).then(res =>{


   console.log('added');
   alert('Register sucessfully')
   }).catch(err=>{

    console.log(err)
   })

   this.setState({name:'',email:'',NIC:'',mobile:'',lastname:'',address:'',gender:''})


   window.location='./'
  }

  render() {
    return (<div className="form-wrapper">
       <center>
<div class="card" style={{width:'40rem',top:'4rem' }}>

  <div class="card-body">
  <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  Register
                </h3>
              </MDBCardHeader>
              <br>
              </br>
              <br></br>
    


      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
        
          <Form.Control type="text"  placeholder={"first Name"} value={this.state.name} onChange={this.onChangeSupplierName}/>
        </Form.Group>

        <Form.Group controlId="Name">
         
          <Form.Control type="text"   placeholder={"last Name"}value={this.state.lastname} onChange={this.onChangeSupplierlastname}/>
        </Form.Group>


        <Form.Group controlId="Email">
         
          <Form.Control type="email"  placeholder={"email"} value={this.state.email} onChange={this.onChangeSupplieremail}/>
        </Form.Group>

        <Form.Group controlId="Name">
      
          <Form.Control type="text"  placeholder={"NIC"} value={this.state.NIC} onChange={this.onChangeSuppliernic}/>
        </Form.Group>

        <Form.Group controlId="Name">
          
          <Form.Control type="text" placeholder={"mobile"} value={this.state.mobile} onChange={this.onChangeSuppliermobile}/>
        </Form.Group>

      

        <MDBRow>
              <MDBCol md="4">
          <FormControl component="fieldset">
       
          <RadioGroup aria-label="gender" name="gender1" >
            <FormControlLabel value="male"  checked={this.state.gender =="male"}
                onChange={this.onChangeSuppliergender} control={<Radio />} label="male" />
            <FormControlLabel value="female"   checked={this.state.gender == "female"}
                onChange={this.onChangeSuppliergender}  control={<Radio />} label="female" />
            
          </RadioGroup>
        </FormControl>
        </MDBCol>

        </MDBRow>
        <Form.Group controlId="Name">
          
          <Form.Control type="text" placeholder={"address"} value={this.state.address} onChange={this.onChangeSupplieraddress}/>
        </Form.Group>

      
        <Button variant="danger" size="lg" block="block" type="submit">
          Register
        </Button>
      </Form>
     </div>
     </div>
     </center>
    </div>);
  }
}