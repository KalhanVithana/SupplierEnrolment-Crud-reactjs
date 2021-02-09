import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import SupplierTableRow from "./SupplierTableRow";






export default class ListSupplier extends Component {

  constructor(props) {
    super(props)

    
    this.state = {
        supplier: [],
        name: '',
        lastname:'',
        email: '',
        NIC: '',
        Mobile:'',
        address:'',
        gender:''
    };
  }

  componentDidMount() {

    axios.get('http://localhost:4000/supplier/')
      .then(res => {
        this.setState({
            supplier: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })

     
  }

  DataTable() {
    return this.state.supplier.map((res, i) => {
      return <SupplierTableRow obj={res} key ={i}/>
    });

    


  }


  





  render() {
    return (<div className="table-wrapper">
      
     
    
      <Table class="table" >
        <thead>
          <tr scope="row">
            <th  scope="col">firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Email</th>
            <th scope="col"> address</th>
            <th scope="col">mobile</th>
            <th scope="col">gender</th>
            <th scope="col">NIC</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>


      
        
    </div>);
  }
}