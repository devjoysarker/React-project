import { useEffect, useState } from 'react';
import './_assets/css/style.css';
import './_assets/css/fontawesome.css';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/pages/Shop';
import Footer from './components/Footer/Footer';
import Home from './components/Admin/Home';
import Dashboard from './components/Admin/Dashboard';
import Desh from './components/Admin/Desh';
import Tag from './components/Admin/Tag';
import Catagories from './components/Admin/Catagories';
import Products from './components/Admin/Products';
import AddTag from './components/Admin/AddTag';
import axios from 'axios';
import AddProduct from './components/Admin/AddProduct';
import SingalProduct from './components/Admin/SingalProduct';

function App() {

    // make slug
    const makeSlug = (data) => {
      let arr = data.split(' ');
      return arr.join('-').toLowerCase(); 
    }

  // tags show state
  const [tags,SetTags] = useState([]);
 // Tag show effect
  useEffect( () =>{
    axios.get('http://localhost:5050/tag').then(res => {
      SetTags(res.data)
    })
  },[tags]);
  //Catgory Show State
  const [cats,setCats] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:5050/catagory').then( res => {
      setCats(res.data)
    })
  },[cats]);
      // All Products state
      const [product,setProduct] = useState([]);

      // Get All Data
      useEffect(() =>{
        axios.get('http://localhost:5050/products').then(res => {
          setProduct(res.data.reverse())
        })
      },[product])

  return (
   <>
       <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/shop' element={ <Shop product={product}  setProduct={setProduct} cats={cats} tags={tags} /> } />
          <Route path='/shop/:slug' element={ <SingalProduct/> } />
          <Route path='/admin' element={ <Dashboard /> } >
            <Route path='/admin/desh' element={ <Desh /> } />
            <Route path='/admin/catagories' element={ <Catagories makeSlug={ makeSlug } cats={ cats } /> } />
            <Route path='/admin/tag' element={ <Tag tags={ tags }  makeSlug={ makeSlug } /> } />
            <Route path='/admin/add-tag' element={ <AddTag /> } />
            <Route path='/admin/products' element={ <Products  tags={tags} cats={cats}  />  } />
            <Route path='/admin/addproduct' element={ <AddProduct /> } />
          </Route>
        </Routes>
        <Footer />
   </>
  );
}

export default App;
