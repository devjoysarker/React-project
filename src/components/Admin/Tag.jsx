
import React, {useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Desh.css';

const Tag = ({ makeSlug ,tags}) => {

// Edit tag data
const [tag,SetTag] = useState({
  name : '',
  id    : ''
})

// update Edit Data
const [updataform,SetupdatForm] = useState(false)

// Get Data for Edit
const handleEditData = (id) => {
 SetupdatForm(true)
  axios.get('http://localhost:5050/tag/' + id).then(res => {
    SetTag({
      ...tag,
      name : res.data.name,
      id : res.data.id
    })
  })
}

//Delete Tag
const handleDeleteData = (id) =>{
  axios.delete('http://localhost:5050/tag/'+ id);
}

// UPdata Form Data

const handleEditFormData  = (e) =>{
  e.preventDefault();
  let slug = makeSlug(tag.name)
  axios.patch('http://localhost:5050/tag/' + tag.id,{
    name : tag.name,
    slug : slug
  }).then(res => {
    SetupdatForm(false)
  })

}


  return (
  <>
   <h2>All Tag</h2>
    <hr />
    <Link variant="success" className="btn btn-primary btn-sm" to={'/admin/add-tag'}>Add New Tags</Link>
    <hr />
    <Table striped bordered hover size="sm">
      <thead>
        <th>#</th>
        <th>Name</th>
        <th>Slug</th>
        <th>Action</th>
      </thead>
      {
        tags.map( (data,index) =>
        <tbody>
        <td>{ index + 1 }</td>
        <td>{ data.name }</td>
        <td>{ data.slug }</td>
        <td>
         <div className="edit-button">
         <Button variant="primary"  size='sm' onClick={ () => handleEditData(data.id) } >Edit</Button>&nbsp;
          <Button variant="warning" onClick={ () => handleDeleteData(data.id) } size='sm'>Delete</Button>
         </div>

        </td>
       </tbody>
          
          )
      }

    </Table>
    {
      updataform && 
      <>
      <h3>Edit Tag Data</h3>
    <Form onSubmit={ handleEditFormData }>
      <Form.Group className='mt-3'>
        <Form.Control className='w-50' type='text' value={ tag.name } placeholder='Tag Name' onChange={e => SetTag({...tag,name:e.target.value})} ></Form.Control>
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

export default Tag;