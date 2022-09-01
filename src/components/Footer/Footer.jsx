
import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
  
    <>
    <footer className="footer_section text-white deco_wrap">
        <div className="overlay"></div>
        <div className="footer_widget_area">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-5 col-md-6 col-sm-7">
            <div className="footer_subscribe_form text-center">
            <h2 className="form_title text-uppercase wow fadeInUp" data-wow-delay=".1s">Coffee Build your Fresh mind</h2>
            <form action="#">
                <div className="form_item wow fadeInUp" data-wow-delay=".2s">
                <input type="email" name="email" placeholder="Enter your email"/>
                <button className="btn btn_primary text-uppercase" type="submit">Subscribe Now</button>
                </div>
            </form>
            </div>
        </div>
        </div>

        <div className="row justify-content-lg-between">
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="footer_widget footer_about wow fadeInUp" data-wow-delay=".1s">
            <div className="brand_logo">
                <a className="brand_link" href="index_1.html">
                <img src="assets/images/logo/logo_white_1x.png" srcset="assets/images/logo/logo_white_2x.png 2x" alt="logo_not_found"/>
                </a>
            </div>

            <p>
                Rorem ipsum dolorconsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniaminventore veritatis et.orem ipsum dolorconsectetur adipisicing elit, sed do eiusmod tempor incididunt aneye.
            </p>

            <ul className="social_links social_icons ul_li">
                <li><a href="#!"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#!"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#!"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#!"><i className="fab fa-youtube"></i></a></li>
                <li><a href="#!"><i className="fab fa-behance"></i></a></li>
            </ul>
            </div>
        </div>

  <div className="col-lg-3 col-md-4 col-sm-6">
    <div className="footer_widget footer_contact wow fadeInUp" data-wow-delay=".2s">
      <h3 className="footer_widget_title text-uppercase">Contact us</h3>
      <ul className="ul_li_block">
        <li><strong className="text-uppercase">Adress:</strong> 8638 Amarica Stranfod Mailbon Star</li>
        <li><strong className="text-uppercase">Mail:</strong> Israfilsupol836@gmail.com</li>
        <li><strong className="text-uppercase">Phone:</strong> +7464 0187 3535 645</li>
        <li><strong className="text-uppercase">Fax id:</strong> +9 659459 49594</li>
      </ul>
    </div>
  </div>

  <div className="col-lg-3 col-md-4 col-sm-6">
    <div className="footer_widget footer_opening_time wow fadeInUp" data-wow-delay=".3s">
      <h3 className="footer_widget_title text-uppercase">Opening Hours</h3>
      <ul className="ul_li_block">
        <li>
          Monday
          <span>9:00 - 18:00</span>
        </li>
        <li>
          tuesday
          <span>10:00 - 18:00</span>
        </li>
        <li>
          wednestday
          <span>11:00 - 18:00</span>
        </li>
        <li>
          Thusday
          <span>12:00 - 18:00</span>
        </li>
        <li>
          Friday
          <span>14:00 - 18:00</span>
        </li>
        <li>
          saterday
          <span>16:00 - 18:00</span>
        </li>
        <li>
          Sunday
          <span>closed</span>
        </li>
      </ul>
    </div>
  </div>

  <div className="col-lg-3 col-md-4 col-sm-6">
    <div className="footer_widget footer_recent_post wow fadeInUp" data-wow-delay=".4s">
      <h3 className="footer_widget_title text-uppercase">Recent News</h3>

      <div className="recent_post">
        <a className="item_image" href="blog_details.html">
          <img src="assets/images/recent_post/img_01.png" alt="image_not_found"/>
        </a>
        <div className="item_content">
          <h4 className="item_title">
            <a href="blog_details.html">Best Smell of Americano Coffee Trins</a>
          </h4>
          <span className="post_date text-uppercase">December 30 - 2021</span>
        </div>
      </div>

      <div className="recent_post">
        <a className="item_image" href="blog_details.html">
          <img src="assets/images/recent_post/img_02.png" alt="image_not_found"/>
        </a>
        <div className="item_content">
          <h4 className="item_title">
            <a href="blog_details.html">Best Smell of Americano Coffee Trins</a>
          </h4>
          <span className="post_date text-uppercase">December 30 - 2021</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

<div className="container">
<div className="footer_bottom text-center">
<p className="copyright_text mb-0 wow fadeInUp" data-wow-delay=".2s">Copyright@ 2021 Desing by <a className="btn_text" href="https://themeforest.net/user/xpressrow"><span>Xpressrow</span></a></p>
</div>
</div>
</footer>
    </>
  )
}

export default Footer;