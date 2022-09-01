
import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import './Desh.css';

const Catagories = ({ makeSlug ,cats}) => {

  //Add Catagory State
  const [cat,SetCat] = useState({
    name : '',
    id  : ''
  })
  // Catagory edit & update form
  const [catForm,SetCatForm] = useState(false);
  const [editForm,SetEditForm] = useState(false);

  // Catagory Add
  const  handleAddCat  = () => {
  SetCatForm(true);
  SetEditForm(false)
  SetCat({
    name : '',
    id   :''
  })
}
  // Catagory Add Data
  const handleFormAdd = (e) => {
    e.preventDefault();
    let slug = makeSlug(cat.name);
    axios.post('http://localhost:5050/catagory/',{
      id : '',
      name : cat.name,
      slug : slug
    }).then(res =>{
      SetCat({
        name : '',
        id : ''
      });
      SetCatForm(false)
    })
  }

  // Catagory Edit Data
  const handleEditData = (id) =>{
  SetEditForm(true)
  SetCatForm(false)
  axios.get('http://localhost:5050/catagory/' + id).then(res =>{
    SetCat({
      name : res.data.name,
      id   : res.data.id
    })
  })
  }
  // Catagory updata Data
  const handleUpdataData =(e) =>{
    e.preventDefault();
    let slug = makeSlug(cat.name)
   axios.patch('http://localhost:5050/catagory/'+ cat.id,{
    name : cat.name,
    slug : slug
   }).then(res => {
    SetEditForm(false)
    SetCat({
      name : '',
      id  : ''
    })
   })
  }
  // Catagory Delete Data
  const handleDeleteData = (id) =>{
    axios.delete('http://localhost:5050/catagory/' + id );
  }
  return (
  <>
   <h2>All Catagories</h2>
    <hr />
    <Button variant="success" onClick={ handleAddCat } className="btn btn-primary btn-sm">Add New Catagory</Button>
    <hr />
    <Table striped bordered hover size="sm">
      <thead>
        <th>#</th>
        <th>Name</th>
        <th>Slug</th>
        <th>Action</th>
      </thead>
      {
        cats.map((data,index) => 
        <tbody>
        <td>{ index + 1 }</td>
        <td>{ data.name }</td>
        <td>{ data.slug }</td>
        <td>
         <div className="edit-button">
         <Button variant="primary"  size='sm' onClick={ () => handleEditData(data.id) }>Edit</Button>&nbsp;
          <Button variant="warning" onClick={ () => handleDeleteData(data.id) } size='sm' >Delete</Button>
         </div>
        </td>
       </tbody>
        )
      }

    </Table>
    {
      catForm &&
      <>
      <h3>Add New Catagory</h3>
    <Form onSubmit={ handleFormAdd }>
      <Form.Group className='mt-3'>
        <Form.Control className='w-50' type='text' value={cat.name}  placeholder='Tag Name' onChange={ e => SetCat({...cat,name:e.target.value}) } ></Form.Control>
      </Form.Group>
      <Form.Group className='mt-3'>
        <Button className='btn btn-info' type='submit'>Submit</Button>
      </Form.Group>
    </Form>
      </>
    }
    {
      editForm &&
      <>
      <h3> Edit a Catagory</h3>
    <Form onSubmit={ handleUpdataData }>
      <Form.Group className='mt-3'>
        <Form.Control className='w-50' type='text' value={cat.name}  placeholder='Tag Name' onChange={ e => SetCat({...cat,name:e.target.value}) } ></Form.Control>
      </Form.Group>
      <Form.Group className='mt-3'>
        <Button className='btn btn-info' type='submit'>Submit</Button>
      </Form.Group>
    </Form>
      </>
    }


  </>
  )
};

export default Catagories;