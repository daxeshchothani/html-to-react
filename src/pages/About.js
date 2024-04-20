import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      {/* <!-- header section end -->
      <!-- market section start --> */}
      <div className="market_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="market_taital">Market Research Reports</h1>
            </div>
          </div>
          <div className="market_section_2">
            <h4 className="market_text active">
              01{" "}
              <span className="padding10">
                words which don't look even slightly believable. If you are
                going{" "}
              </span>
            </h4>
            <p className="dummy_text">
              anything embarrassing hidden in the middle of text. All the Lorem
              Ipsum generator
            </p>
            <h4 className="market_text">
              02{" "}
              <span className="padding10">
                words which don't look even slightly believable. If you are
                going{" "}
              </span>
            </h4>
            <p className="dummy_text">
              anything embarrassing hidden in the middle of text. All the Lorem
              Ipsum g
            </p>
            <h4 className="market_text">
              03{" "}
              <span className="padding10">
                words which don't look even slightly believable. If you are
                going{" "}
              </span>
            </h4>
            <p className="dummy_text">
              anything embarrassing hidden in the middle of text. All the Lorem
              Ipsum generato
            </p>
            <h4 className="market_text">
              04{" "}
              <span className="padding10">
                words which don't look even slightly believable. If you are
                going{" "}
              </span>
            </h4>
            <p className="dummy_text">
              aanything embarrassing hidden in the middle of text. All the Lorem
              Ipsum generators on the Internet t
            </p>
          </div>
          <div className="seemore_bt">
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      {/* <!-- market section end -->
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

export default About;
