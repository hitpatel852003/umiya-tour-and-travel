import React from 'react'

export default function Footer() {
  return (
    <div>
           {/* Footer Start */}
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Company</h4>
            <a className="btn btn-link" href="/">
              About Us
            </a>
            <a className="btn btn-link" href="/">
              Contact Us
            </a>
            <a className="btn btn-link" href="/">
              Privacy Policy
            </a>
            <a className="btn btn-link" href="/">
              Terms &amp; Condition
            </a>
            <a className="btn btn-link" href="/">
              FAQs &amp; Help
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3" />
              +012 345 67890
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              info@example.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="/">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-outline-light btn-social" href="/">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h1 style={{color:"white"}}>Umiya Tour&Travels</h1>
            <p></p>
          </div>
          
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
              Designed By{" "}
              <a className="border-bottom" href="https://github.com/ParasSalunke">
                Paras Salunke
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="/">Home</a>
                <a href="/">Cookies</a>
                <a href="/">Help</a>
                <a href="/">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
    </div>
  )
}
