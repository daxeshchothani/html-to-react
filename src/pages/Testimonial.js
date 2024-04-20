import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Testimonial = () => {
  return (
   <>
    <Navbar />
      {/* <!-- header section end -->
      <!-- client section start --> */}
      <div className="client_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="client_taital">Our clients Review</h1>
                  <p className="client_text">Content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as</p>
               </div>
            </div>
         </div>
      </div>
      <div className="client_section_2">
         <div className="container">
            <div id="my_slider" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="row">
                        <div className="col-md-12">
                           <div className="customer_main">
                              <div className="customer_left">
                                 <div className="customer_img"><img  scr="asset/images/client-img.png"/></div>
                              </div>
                              <div className="customer_right">
                                 <h3 className="customer_name">Doen Amrk</h3>
                                 <p className="enim_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted </p>
                              </div>
                           </div>
                           <div className="customer_main_1">
                              <div className="customer_left_1">
                                 <div className="client_img1"><img  scr="asset/images/client-img1.png"/></div>
                              </div>
                              <div className="customer_right_1">
                                 <h3 className="customer_name">Josp Amrk</h3>
                                 <p className="enim_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of lette </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="row">
                        <div className="col-md-12">
                           <div className="customer_main">
                              <div className="customer_left">
                                 <div className="customer_img"><img  scr="asset/images/client-img.png"/></div>
                              </div>
                              <div className="customer_right">
                                 <h3 className="customer_name">Doen Amrk</h3>
                                 <p className="enim_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted </p>
                              </div>
                           </div>
                           <div className="customer_main_1">
                              <div className="customer_left_1">
                                 <div className="client_img1"><img  scr="./asset/images/client-img1.png"/></div>
                              </div>
                              <div className="customer_right_1">
                                 <h3 className="customer_name">Josp Amrk</h3>
                                 <p className="enim_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of lette </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="row">
                        <div className="col-md-12">
                           <div className="customer_main">
                              <div className="customer_left">
                                 <div className="customer_img"><img  scr="asset/images/client-img.png"/></div>
                              </div>
                              <div className="customer_right">
                                 <h3 className="customer_name">Doen Amrk</h3>
                                 <p className="enim_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted </p>
                              </div>
                           </div>
                           <div className="customer_main_1">
                              <div className="customer_left_1">
                                 <div className="client_img1"><img  scr="asset/images/client-img1.png"/></div>
                              </div>
                              <div className="customer_right_1">
                                 <h3 className="customer_name">Josp Amrk</h3>
                                 <p className="enim_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of lette </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
               <i className="fa fa-arrow-left"></i>
               </a>
               <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
               <i className="fa fa-arrow-right"></i>
               </a>
            </div>
         </div>
      </div>
      {/* <!-- client section end -->
      <!-- footer section start --> */}
      <Footer />
      {/* <!-- copyright section end -->
      <!-- Javascript files--> */}
      <script  scr="asset/js/jquery.min.js"></script>
      <script  scr="asset/js/popper.min.js"></script>
      <script  scr="asset/js/bootstrap.bundle.min.js"></script>
      <script  scr="asset/js/jquery-3.0.0.min.js"></script>
      <script  scr="asset/js/plugin.js"></script>
      {/* <!-- sidebar --> */}
      <script  scr="asset/js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script  scr="asset/js/custom.js"></script>
   </>
  )
}

export default Testimonial
