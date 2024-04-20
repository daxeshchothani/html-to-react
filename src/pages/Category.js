import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Category = () => {
  return (
   <>
   <Navbar />
      {/* <!-- header section end -->
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
                                 <figure><img  scr="asset/images/img-1.png"/></figure>
                              </div>
                              <h3 className="materials_text">Materials</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img  scr="asset/images/img-2.png"/></figure>
                              </div>
                              <h3 className="materials_text">Industrials</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn active"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img  scr="asset/images/img-3.png"/></figure>
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
                                 <figure><img  scr="asset/images/img-1.png"/></figure>
                              </div>
                              <h3 className="materials_text">Materials</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img  scr="asset/images/img-2.png"/></figure>
                              </div>
                              <h3 className="materials_text">Industrials</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn active"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img  scr="asset/images/img-3.png"/></figure>
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
                                 <figure><img  scr="asset/images/img-1.png"/></figure>
                              </div>
                              <h3 className="materials_text">Materials</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img  scr="asset/images/img-2.png"/></figure>
                              </div>
                              <h3 className="materials_text">Industrials</h3>
                              <p className="categroy_text">words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</p>
                              <div className="readmore_btn active"><a href="#">Read More</a></div>
                           </div>
                           <div className="col-md-4">
                              <div className="hover01 column">
                                 <figure><img  scr="asset/images/img-3.png"/></figure>
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

export default Category
