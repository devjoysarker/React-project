
import React from 'react';
import logo from './favourite_icon.png';
import { Link } from 'react-router-dom';
import './Heaer.css'

const Header = () => {
  return (
  <>
   <header className="header_section sticky style_2">
        <div className="content_wrap">
          <div className="container maxw_1560">
            <div className="row align-items-center">

              <div className="col-lg-2 col-md-6 col-6">
                <div className="brand_logo">
                  <a className="brand_link" href="http">
                    <img src={logo} alt=""/>
                  </a>
                </div>
              </div>

              <div className="col-lg-10 col-md-6 col-6">
                <nav className="main_menu navbar navbar-expand-lg">
                  <button className="mobile_menu_btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fal fa-bars"></i></span>
                  </button>
                  <div className="main_menu_inner collapse navbar-collapse" id="main_menu_dropdown">
                    <ul className="main_menu_list ul_li">
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/shop/singal">About</Link></li>
                     <li><Link to="/shop">Shop</Link></li>
                     <li><a href="http">Contact</a></li>
                     <li><a href="http">Blog</a></li>
                     <li><Link to="/admin">Admin</Link></li>
                    </ul>
                  </div>

                  <ul className="header_btns_group ul_li_right">
                    <li>
                      <button type="button" className="main_search_btn" data-bs-toggle="collapse" data-bs-target="#main_search_collapse" aria-expanded="false" aria-controls="main_search_collapse">
                        <i className="fal fa-search"></i>
                      </button>
                    </li>
                    <li>
                      <button type="button" className="cart_btn">
                        <i className="fal fa-shopping-bag"></i>
                        <small className="cart_counter">2</small>
                      </button>
                    </li>
                    <li>
                      <a className="btn btn_primary text-uppercase" href="http">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </div>


        <div className="main_search_collapse collapse" id="main_search_collapse">
          <div className="main_search_form card">
            <div className="container maxw_1560">
              <form action="#">
                <div className="form_item">
                  <input type="search" name="search" placeholder="Search here..."/>
                  <button type="submit" className="submit_btn"><i className="fal fa-search"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
  </>
  )
}

export default Header;