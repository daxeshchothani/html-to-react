import React from 'react'
import Navbar from "./Navbar";
import Footer from './Footer'

const Contact = () => {
  return (
    
<>
<Navbar />
      {/* <!-- header section end -->
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
                     <form action="">
                        <div className="mail_section_1 "/>
                           <input type="text" className="mail_text" placeholder="Name" name="Name"/>
                           <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number"/> 
                           <input type="text" className="mail_text" placeholder="Email" name="Email"/>
                           <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                           <div className="send_bt"><a href="#">SEND</a></div>
                        
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <div className="map_main">
            <div className="map-responsive">
               <iframe  src="asset/https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="300" frameborder="0" style={{ border: '0', width: '100%' }}allowfullscreen=""></iframe>
            </div>
         </div>
      </div>
      {/* <!-- contact section end -->
      <!-- footer section start --> */}
      <Footer />
      {/* <!-- copyright section end -->
      <!-- Javascript files--> */}
      <script  src="asset/js/jquery.min.js"></script>
      <script  src="asset/js/popper.min.js"></script>
      <script  src="asset/js/bootstrap.bundle.min.js"></script>
      <script  src="asset/js/jquery-3.0.0.min.js"></script>
      <script  src="asset/js/plugin.js"></script>
      {/* <!-- sidebar --> */}
      <script  src="asset/js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script  src="asset/js/custom.js"></script>
</>
  )
}

export default Contact
