import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { MDBTypography } from 'mdbreact';


class SupplierTableRow extends Component {
    constructor(props) {
        super(props);

        this.deleteSupplier = this.deleteSupplier.bind(this);
        this.state = {  }
    }


    deleteSupplier(){


        axios.delete('http://localhost:4000/supplier/delete/'+this.props.obj._id).then(res=>{
            console.log('sucessfull deleted')
        }).catch(err =>{

            console.logerr()
        })
    }
    render() { 
        return (


            <tr>
                
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.lastname}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.mobile}</td>
                <td>{this.props.obj.gender}</td>
                <td>{this.props.obj.NIC}</td>
             
                
                <td>
                <Link className="edit-link" to={"/edit-supplier/" + this.props.obj._id}>
                    <MDBTypography colorText="orange">  Edit</MDBTypography>
                    </Link>
                    <Button onClick={this.deleteSupplier} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
       );
    }
}
 
export default SupplierTableRow;