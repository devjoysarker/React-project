
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom'
import './Shop.css';

const Shop = ( {product,setProduct,cats,tags} ) => {

    const handleTagShow = (e,id) => {
        e.preventDefault();
        axios.get(`http://localhost:5050/tag/${id}/products`).then(res => {
          setProduct(res.data)
        })
    }

   
  return (
<>
{
    <div className="body_wrap">

    <section className="shop_section sec_ptb_120 bg_default_gray">
    <div className="container">
      <ul className="filters-button-group ul_li_center wow fadeInUp" data-wow-delay=".1s">
          <li><button className="button text-uppercase active" data-filter="*">all</button></li>
          <li><button className="button text-uppercase" data-filter=".chocolate">chocolate</button></li>
          <li><button className="button text-uppercase" data-filter=".coffee">coffee</button></li>
          <li><button className="button text-uppercase" data-filter=".sandwiches">sandwiches</button></li>
          <li><button className="button text-uppercase" data-filter=".sweets">sweets</button></li>
          <li><button className="button text-uppercase" data-filter=".blacktea">black tea</button></li>
          <li><button className="button text-uppercase" data-filter=".greantea">grean tea</button></li>
      </ul>
    
      <div className="shop_filter_bar">
          <div className="row">
              <div className="col-lg-6">
                  <form action="#">
                      <div className="pricing_range wow fadeInUp" data-wow-delay=".2s">
                          <h4 className="item_title text-uppercase">Price range</h4>
                          <div className="price-range-area">
                              <div id="slider-range" className="slider-range"></div>
                              <div className="price-text d-flex align-items-center">
                                  <span>Price:</span>
                                  <input type="text" id="amount" readonly/>
                              </div>
                          </div>
                      </div>
                  </form>
              </div>
    
              <div className="col-lg-6">
                  <div className="shop_filter_tags wow fadeInUp" data-wow-delay=".1s">
                      <h4 className="item_title text-uppercase">Popular tag</h4>
                      <ul className="ul_li">
                        {
                            tags.map(data => 
                               <li><a onClick={ (e) => handleTagShow(e,data.id) } href="#!">{data.name}</a></li> 
                                )
                        }
                       

                      </ul>
                  </div>
              </div>
          </div>
      </div>
    
     
        {
            product.map(data => 
                <div className="shop_filter_grid grid wow fadeInUp" data-wow-delay=".3s">
                <div className="element-item chocolate greantea " data-category="chocolate">
                <div className="shop_card">
                    <a className="wishlist_btn" href="http"><i className="fal fa-heart"></i></a>
                    <div className="share_btns">
                        <button type="button" className="share_btn">
                            <i className="fal fa-share-alt"></i>
                        </button>
                        <ul className="ul_li">
                            <li><a href="http"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="http"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="http"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="http"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="http"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                    <Link className="item_image" to={`/shop/${data.slug}`}>
                        <img style={{height:'278px',width:'100%',objectFit:'cover',borderRadius:'5px'}} src={data.pro_link} alt="image_not_found"/>
                    </Link>
                    <div className="item_content">
                        <h3 className="item_title text-uppercase">
                            <a href="shop_details.html">{data.name}</a>
                        </h3>
                        <div className="btns_group">
                                {
                                data.sale_price ?
                                <><span style={{textDecoration:'line-through'}}>{data.regular_price}</span>
                                <span style={{color:'red'}}>{data.sale_price} BDT</span></>
                                :
                                <span style={{color:'red'}}>{data.sale_price} BDT</span>
                                }
                            <a className="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                )
        }
    
    </div>
    </section>
    </div>

}

<div className="pagi d-block py-3">
    <ul className="pagination_nav ul_li_center">
      <li><a href="#!"><i className="fal fa-angle-double-left"></i></a></li>
      <li className="active"><a href="#!">1</a></li>
      <li><a href="#!">2</a></li>
      <li><a href="#!">3</a></li>
      <li><a href="#!"><i className="fal fa-angle-double-right"></i></a></li>
  </ul>
</div>
</>
)

}

export default Shop;