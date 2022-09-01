import React from 'react';
import { Button, Table } from 'react-bootstrap';
import './Desh.css'

const Desh = () => {
  return (
    <>
    <h2>Dashboard</h2>
    <hr />
    <Button variant="success" className="btn btn-primary btn-sm">Add New Catagory</Button>
    <hr />
    <Table>
      <thead>
        <th>#</th>
        <th>Name</th>
        <th>Slug</th>
        <th>Action</th>
      </thead>
     <tbody>
      <td>1</td>
      <td>men</td>
      <td>men</td>
      <td>
        <Button  variant="info" size='sm'className='btuuomm'>View</Button>&nbsp;
        <Button variant="primary"  size='sm' className='btuuomm'>Edit</Button>&nbsp;
        <Button variant="warning" size='sm' className='btuuomm'>Delete</Button>
      </td>
     </tbody>
    </Table>
    </>
  )
};

export default Desh;