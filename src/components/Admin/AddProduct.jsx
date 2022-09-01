
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Desh.css'

const AddProduct = () => {


  return (
    <>
    <section className='Porduct-form'>
     <h3 className='text-center'>Add New Products</h3>
     <hr />
     <Container>
     <Row>
     <Col>
     <div className="form-item">
     <Form>
        <Form.Group className='groupp'>
            <Form.Label>Product Name</Form.Label>
            <Form.Control className='w-50' type='text' />
        </Form.Group>
        <Form.Group className='groupp'>
            <Form.Label>Regular Price</Form.Label>
            <Form.Control className='w-50' type='text' />
        </Form.Group>
        <Form.Group className='groupp'>
            <Form.Label>Sale Price</Form.Label>
            <Form.Control className='w-50' type='text' />
        </Form.Group>
        <Form.Group className='groupp'>
            <Form.Label>Rating</Form.Label>
            <Form.Control className='w-50' type='text' />
        </Form.Group>
        <Form.Group className='groupp'>
            <Form.Label>Short Dis</Form.Label>
            <textarea className='form-control w-50 area'></textarea>
        </Form.Group>
        <Form.Group className='groupp'>
            <Form.Label>Photo</Form.Label>
            <Form.Control className='w-50' type='text' />
        </Form.Group>
     </Form>
        <Form.Group className='groupp'>
            <Form.Label>Catagory</Form.Label>
            <Form.Control className='w-50' type='text' />
        </Form.Group>
        <Form.Group className='groupp'>
            <Form.Label>Tag</Form.Label>
            <Form.Control className='w-50' type='text' />
        </Form.Group>
        <Form.Group className='groupp mt-3'>
         <Button type='submit' className='w-50'>Submit</Button>
        </Form.Group>
     </div>
     </Col>
     </Row>
     </Container>
    </section>
    </>
  )
}

export default AddProduct;