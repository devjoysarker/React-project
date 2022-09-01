

import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddTag = () => {

    // make slug
    const makeSlug = (data) => {
        let arr = data.split(' ');
        return arr.join('-').toLowerCase(); 
      }
    
    // Add Tag State
    const [tag,SetTag] = useState();

    const handleAddTags = (e) => {
        e.preventDefault();
        let slug = makeSlug(tag)
        axios.post('http://localhost:5050/tag',{
            id : '',
            name : tag,
            slug : slug
        }).then(
            SetTag('')
        )
    }



  return (
  <>
   <h3>Edit Tag Data</h3>
   <hr />
   <Link  to={'/admin/tag'} className=" btn btn-info btn-sm">All Tag</Link>
    <Form onSubmit={ handleAddTags }>
      <Form.Group className='mt-3'>
        <Form.Control className='w-50' value={ tag } type='text' placeholder='Tag Name' onChange={ e => SetTag(e.target.value) } ></Form.Control>
      </Form.Group>
      <Form.Group className='mt-3'>
        <Button className='btn btn-info' type='submit'>Submit</Button>
      </Form.Group>
    </Form>
  </>
  )
}

export default AddTag;