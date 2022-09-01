
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link,Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
  return (
  <>
  <section className='fixedpad'>
  <Container >
    <Row className='aaccormargin'>
        <Col md={3}>
            <ul className='list-group mt-5 manu-list'>
                <li className='list-group-item'><Link to="/admin/desh">Dashboard</Link></li>
                <li className='list-group-item'><Link to="/admin/catagories">Catagory</Link></li>
                <li className='list-group-item'><Link to="/admin/products">Products</Link></li>
                <li className='list-group-item'><Link to="/admin/tag">Tags</Link></li>
                <li className='list-group-item'><Link to="/shop/singal">Logout</Link></li>
            </ul>
        </Col>
        <Col md={9}>
        <Outlet />
        </Col>
    </Row>
  </Container>
  </section>
  </>
  )
}

export default Dashboard;