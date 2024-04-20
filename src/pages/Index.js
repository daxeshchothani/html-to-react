import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Index = () => {
  return (
    <>
    <Navbar/>
    
      {/* <!-- header section end -->
      <!-- banner section start -->  */}
      <div className="banner_section layout_padding">
         <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
               <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
               </ol>
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="banner_img"><img src="asset/images/banner-img.png"/></div>
                        </div>
                        <div className="col-md-6">
                           <div className="banner_taital_main">
                              <h1 className="banner_taital">Become Artitech of your future business</h1>
                              <form>
                                 <input type="text" className="search_text" placeholder="Search text here" name="Search text here"/>
                                 <div className="search_bt"><a href="#">Search Now</a></div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="banner_img"><img src="asset/images/banner-img.png"/></div>
                        </div>
                        <div className="col-md-6">
                           <div className="banner_taital_main">
                              <h1 className="banner_taital">Become Artitech of your future business</h1>
                              <form>
                                 <input type="text" className="search_text" placeholder="Search text here" name="Search text here"/>
                                 <div className="search_bt"><a href="#">Search Now</a></div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="banner_img"><img src="asset/images/banner-img.png"/></div>
                        </div>
                        <div className="col-md-6">
                           <div className="banner_taital_main">
                              <h1 className="banner_taital">Become Artitech of your future business</h1>
                              <form>
                                 <input type="text" className="search_text" placeholder="Search text here" name="Search text here"/>
                                 <div className="search_bt"><a href="#">Search Now</a></div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- banner section end -->
      <!-- categroy section start --> */}
      <div className="categroy_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="categroy_taital">Popular Categories</h1>
               </div>
            </div>
            <div className="categroy_section_2">
               <div id="main_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img src="asset/images/img-1.png"/></figure>
                              </div>
                              <h3 className="materials_text">Materials</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img src="asset/images/img-2.png"/></figure>
                              </div>
                              <h3 className="materials_text">Industrials</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn active"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img src="asset/images/img-3.png"/></figure>
                              </div>
                              <h3 className="materials_text">Consumer Disc</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn"><a href="#">Read More</a></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img src="asset/images/img-1.png"/></figure>
                              </div>
                              <h3 className="materials_text">Materials</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img src="asset/images/img-2.png"/></figure>
                              </div>
                              <h3 className="materials_text">Industrials</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn active"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img src="asset/images/img-3.png"/></figure>
                              </div>
                              <h3 className="materials_text">Consumer Disc</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn"><a href="#">Read More</a></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img src="asset/images/img-1.png"/></figure>
                              </div>
                              <h3 className="materials_text">Materials</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img src="asset/images/img-2.png"/></figure>
                              </div>
                              <h3 className="materials_text">Industrials</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn active"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img src="asset/images/img-3.png"/></figure>
                              </div>
                              <h3 className="materials_text">Consumer Disc</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn"><a href="#">Read More</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                  </a>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- categroy section end -->
      <!-- market section start --> */}
      <div className="market_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="market_taital">Market Research Reports</h1>
               </div>
            </div>
            <div className="market_section_2">
               <h4 className="market_text active">01 <span className="padding10">words which don't look even slightly believable. If you are going </span></h4>
               <p className="dummy_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generator</p>
               <h4 className="market_text">02 <span className="padding10">words which don't look even slightly believable. If you are going </span></h4>
               <p className="dummy_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum g</p>
               <h4 className="market_text">03 <span className="padding10">words which don't look even slightly believable. If you are going </span></h4>
               <p className="dummy_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generato</p>
               <h4 className="market_text">04 <span className="padding10">words which don't look even slightly believable. If you are going </span></h4>
               <p className="dummy_text">aanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet t</p>
            </div>
            <div className="seemore_bt"><a href="#">Read More</a></div>
         </div>
      </div>
      {/* <!-- market section end -->
      <!-- blog section start --> */}
      <div className="blog_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="blog_taital">Latest Blogs</h1>
               </div>
            </div>
            <div className="blog_section_2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="blog_img"><img src="asset/images/blog-img1.png"/></div>
                     <div className="btn_main">
                        <div className="date_text"><a href="#">06<br/>April</a></div>
                     </div>
                     <div className="blog_box">
                        <h3 className="blog_text">Undoubtable source</h3>
                        <p className="lorem_text"> looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, contenish</p>
                     </div>
                     <div className="read_bt"><a href="#">Read More</a></div>
                  </div>
                  <div className="col-md-4">
                     <div className="blog_img"><img src="asset/images/blog-img2.png"/></div>
                     <div className="btn_main">
                        <div className="date_text active"><a href="#">06<br/>April</a></div>
                     </div>
                     <div className="blog_box">
                        <h3 className="blog_text">Undoubtable source</h3>
                        <p className="lorem_text"> looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, contenish</p>
                     </div>
                     <div className="read_bt active"><a href="#">Read More</a></div>
                  </div>
                  <div className="col-md-4">
                     <div className="blog_img"><img src="asset/images/blog-img3.png"/></div>
                     <div className="btn_main">
                        <div className="date_text"><a href="#">06<br/>April</a></div>
                     </div>
                     <div className="blog_box">
                        <h3 className="blog_text">Undoubtable source</h3>
                        <p className="lorem_text"> looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, contenish</p>
                     </div>
                     <div className="read_bt"><a href="#">Read More</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- blog section end -->
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
                                 <div className="customer_img"><img src="asset/images/client-img.png"/></div>
                              </div>
                              <div className="customer_right">
                                 <h3 className="customer_name">Doen Amrk</h3>
                                 <p className="enim_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted </p>
                              </div>
                           </div>
                           <div className="customer_main_1">
                              <div className="customer_left_1">
                                 <div className="client_img1"><img src="asset/images/client-img1.png"/></div>
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
                                 <div className="customer_img"><img src="asset/images/client-img.png"/></div>
                              </div>
                              <div className="customer_right">
                                 <h3 className="customer_name">Doen Amrk</h3>
                                 <p className="enim_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted </p>
                              </div>
                           </div>
                           <div className="customer_main_1">
                              <div className="customer_left_1">
                                 <div className="client_img1"><img src="asset/images/client-img1.png"/></div>
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
                                 <div className="customer_img"><img src="asset/images/client-img.png"/></div>
                              </div>
                              <div className="customer_right">
                                 <h3 className="customer_name">Doen Amrk</h3>
                                 <p className="enim_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted </p>
                              </div>
                           </div>
                           <div className="customer_main_1">
                              <div className="customer_left_1">
                                 <div className="client_img1"><img src="asset/images/client-img1.png"/></div>
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
      <!-- contact section start --> */}
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="contact_taital">Contact Us</h1>
                  <p className="contact_text"> content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as</p>
               </div>
            </div>
            <div className="contact_section_2">
               <div className="row">
                  <div className="col-md-12 padding15">
                     <form action=""/>
                        <div className="mail_section_1 ">
                           <input type="text" className="mail_text" placeholder="Name" name="Name"/>
                           <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number"/> 
                           <input type="text" className="mail_text" placeholder="Email" name="Email"/>
                           <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                           <div className="send_bt"><a href="#">SEND</a></div>
                        </div>
                     
                  </div>
               </div>
            </div>
         </div>
         <div className="map_main">
            <div className="map-responsive">
               {/* <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="300"  style={{"border:0; width: 100%;"}} ></iframe> */}
            </div>
         </div>
      </div>
      {/* <!-- contact section end -->
      <!-- footer section start --> */}
      <Footer />
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

export default Index
