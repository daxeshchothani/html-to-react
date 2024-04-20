import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer'

const Blog = () => {
  return (
    <>
    <Navbar />
      {/* <!-- header section end -->
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
                <div className="blog_img">
                  <img scr="asset/images/blog-img1.png" />
                </div>
                <div className="btn_main">
                  <div className="date_text">
                    <a href="#">
                      06
                      <br />
                      April
                    </a>
                  </div>
                </div>
                <div className="blog_box">
                  <h3 className="blog_text">Undoubtable source</h3>
                  <p className="lorem_text">
                    {" "}
                    looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, contenish
                  </p>
                </div>
                <div className="read_bt">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog_img">
                  <img scr="asset/images/blog-img2.png" />
                </div>
                <div className="btn_main">
                  <div className="date_text active">
                    <a href="#">
                      06
                      <br />
                      April
                    </a>
                  </div>
                </div>
                <div className="blog_box">
                  <h3 className="blog_text">Undoubtable source</h3>
                  <p className="lorem_text">
                    {" "}
                    looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, contenish
                  </p>
                </div>
                <div className="read_bt active">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog_img">
                  <img scr="asset/images/blog-img3.png" />
                </div>
                <div className="btn_main">
                  <div className="date_text">
                    <a href="#">
                      06
                      <br />
                      April
                    </a>
                  </div>
                </div>
                <div className="blog_box">
                  <h3 className="blog_text">Undoubtable source</h3>
                  <p className="lorem_text">
                    {" "}
                    looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, contenish
                  </p>
                </div>
                <div className="read_bt">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- blog section end -->
      <!-- footer section start --> */}
     <Footer />
      {/* <!-- copyright section end -->
      <!-- Javascript files--> */}
      <script scr="asset/js/jquery.min.js"></script>
      <script scr="asset/js/popper.min.js"></script>
      <script scr="asset/js/bootstrap.bundle.min.js"></script>
      <script scr="asset/js/jquery-3.0.0.min.js"></script>
      <script scr="asset/js/plugin.js"></script>
      {/* <!-- sidebar --> */}
      <script scr="asset/js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script scr="asset/js/custom.js"></script>
    </>
  );
};

export default Blog;
