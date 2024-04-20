import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-8">
                  <div className="location_text">
                     <ul>
                        <li>
                           <a href="#"><span className="padding_left_10"><i className="fa fa-map-marker" aria-hidden="true"></i></span>It is a long established fact that a <br/>reader will be </a>
                        </li>
                        <li>
                           <a href="#"><span className="padding_left_10"><i className="fa fa-phone" aria-hidden="true"></i></span>(+71) 1234567890</a>
                        </li>
                        <li>
                           <a href="#"><span className="padding_left_10"><i className="fa fa-envelope" aria-hidden="true"></i></span>demo@gmail.com</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="newslatter_main">
                     <h1 className="useful_text">Follow Us</h1>
                     <div className="footer_social_icon">
                        <ul>
                           <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- footer section end -->
      <!-- copyright section start --> */}
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">2024 All Rights Reserved. Design by <a>Free Html Templates</a> Distribution by <a href="https://themewagon.com">DC</a></p>
         </div>
      </div>
      {/* <!-- copyright section end -->
      <!-- Javascript files--> */}
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <script src="js/plugin.js"></script>
      {/* <!-- sidebar --> */}
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/custom.js"></script>
    </>
  )
}

export default Footer
