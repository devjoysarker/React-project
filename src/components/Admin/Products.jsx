
import React, { useEffect, useState } from 'react';
import { Button, Table, Col, Container, Form, Row } from 'react-bootstrap';
import './Desh.css';
import axios from 'axios';

const Products = ({tags,cats}) => {

  
  // Form show state
  const [addForm,SetAddform] = useState(false);
  //form input state
  const [inputs,SetInputs] = useState({
    name : '',
    regular_price :0,
    sale_price : 0,
    rating :'',
    CatagoryId : '',
    tagId : '',
    pro_link :'',
    short_dis : ''
  });

  // Add Products  
  const handleSubmit = (e) => {
   e.preventDefault();
   axios.post('http://localhost:5050/products',inputs).then(res=>{
    SetInputs({
      name : '',
      regular_price : 0,
      sale_price : 0,
      rating :'',
      CatagoryId : '',
      tagId : '',
      pro_link :'',
      short_dis : ''
    });
    SetAddform(false)
   })
  }
    // All Products state
    const [product,setProduct] = useState([]);

    // Get All Data
    useEffect(() =>{
      axios.get('http://localhost:5050/products?_expand=category&_expand=tag').then(res => {
        setProduct(res.data.reverse())
      })
    },[product])
  


  return (
  <>
    <Button variant="success" onClick={ () => SetAddform(true) } className="btn btn-primary btn-sm" >Add New Products</Button>
    <hr />
    {
      addForm &&
      <section className='Porduct-form'> 
      <Container>
      <Row>
      <Col>
      <div className="form-item">
      <Form onSubmit={ handleSubmit }>
       <h4 className='text-center'>Add a New Products</h4>
         <Form.Group className='groupp'>
             <Form.Label>Product Name</Form.Label>
             <Form.Control  onChange={ e => SetInputs({...inputs,name:e.target.value }) } className='w-50' type='text' value={ inputs.name } />
         </Form.Group>
         <Form.Group className='groupp'>
             <Form.Label>Regular Price</Form.Label>
             <Form.Control onChange={ e => SetInputs({...inputs,regular_price:e.target.value }) } className='w-50' type='text' value={ inputs.regular_price } />
         </Form.Group>
         <Form.Group className='groupp'>
             <Form.Label>Sale Price</Form.Label>
             <Form.Control onChange={ e => SetInputs({...inputs,sale_price:e.target.value }) } className='w-50' type='text' value={ inputs.sale_price } />
         </Form.Group>
         <Form.Group className='groupp'>
             <Form.Label>Rating</Form.Label>
             <Form.Control onChange={ e => SetInputs({...inputs,rating:e.target.value }) } className='w-50' type='text' value={ inputs.rating } />
         </Form.Group>
         <Form.Group className='groupp'>
             <Form.Label>Short Dis</Form.Label>
             <textarea onChange={ e => SetInputs({...inputs,short_dis:e.target.value }) } className='form-control w-50 area' value={ inputs.short_dis }></textarea>
         </Form.Group>
         <Form.Group className='groupp'>
             <Form.Label>Photo</Form.Label>
             <Form.Control onChange={ e => SetInputs({...inputs,pro_link:e.target.value }) } className='w-50' type='text' value={ inputs.pro_link } />
         </Form.Group>
         <Form.Group className='groupp'>
             <Form.Label>Catagory</Form.Label>
             <Form.Select className='w-50' onChange={ e => SetInputs({...inputs,CatagoryId:e.target.value }) } defaultValue="select catagory" value={ inputs.CatagoryId }>
             <option>select catagory</option>
                {
                  cats.map(data =>
                      <option value={data.id}>{data.name}</option>
                    )
                }
             </Form.Select>
         </Form.Group>
         <Form.Group className='groupp'>
             <Form.Label>Tag</Form.Label>
             <Form.Select onChange={ e => SetInputs({...inputs,tagId:e.target.value }) } className='w-50' defaultValue='Select a tag' value={ inputs.tagId }>
             <option>select Tag</option>
                {
                  tags.map(data =>
                      <option value={data.id}>{data.name}</option>
                    )
                }
             </Form.Select>
         </Form.Group>
         <Form.Group className='groupp mt-3'>
          <Button type='submit' className='w-50'>Submit</Button>
         </Form.Group>
      </Form>
      </div>
      </Col>
      </Row>
      </Container>
     </section>

    }


    <section className='table-section'>
    <h2>Products</h2>
    <Table striped>
      <thead>
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Photo</th>
            <th>Acton</th>
        </tr>
      </thead>
      <tbody>
      {
 
       product.map( (data,index) =>
       <>
       <tr>
        <td>{ index + 1 }</td>
        <td>{ data.name }</td>
        <td>{ data.CatagoryId.name }</td>
        <td>{ data.tagId.name }</td>
        <td><img style={{width: '40px', height: '40px', objectFit: 'cover'}} src={ data.pro_link } alt="" /></td>
        <td>
          <div className="produvt">
          <Button variant="primary"  size='sm' >Edit</Button>&nbsp;
          <Button variant="warning" size='sm'>Delete</Button>
          </div>
        </td>
        </tr>
        </>
         )
 
      }
     </tbody>
 
    </Table>
    </section>
  
  </>
  )
};

export default Products;