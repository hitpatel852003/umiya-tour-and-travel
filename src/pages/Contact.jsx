import React from 'react'

function Contact() {
  return (
    <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            Contact Us
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/" style={{color:"#0B1A39"}}>Home</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
      {/* Contact Start */}
      <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center px-3" style={{ color: "brown" }}>
            Contact Us
          </h6>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <h5>Get In Touch</h5>
            <div className="d-flex align-items-center mb-4">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0"  
                style={{ width: 50, height: 50, backgroundColor:"#0B1A39" }}
              >
                <i className="fa fa-map-marker-alt text-white"/>
              </div>
              <div className="ms-3">
                <h5 style={{color:"#0B1A39"}}>Office</h5>
                <p className="mb-0">12, Parmanand Plaza 2nd floor, near fire station, thol rod,  kadi, Gujarat</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0 "
                style={{ width: 50, height: 50, backgroundColor:"#0B1A39" }}
              >
                <i className="fa fa-phone-alt text-white" />
              </div>
              <div className="ms-3">
                <h5 style={{color:"#0B1A39"}}>Mobile</h5>
                <p className="mb-0">+919998223672</p>
                <p className="mb-0">+919998425829</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: 50, height: 50, backgroundColor:"#0B1A39" }}
              >
                <i className="fa fa-envelope-open text-white" />
              </div>
              <div className="ms-3">
                <h5 style={{color:"#0B1A39"}}>Email</h5>
                <p className="mb-0">Sales@umiyatourandtravels.in</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            {/* <iframe
              className="position-relative rounded w-100 h-100"
              src="https://maps.app.goo.gl/peeKMs63asWR5kUF6"
              frameBorder={0}
              style={{ minHeight: 300, border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4040.620740181481!2d72.33322763219286!3d23.292849367000677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2308fb6a0e23%3A0x2ea0902bc775a929!2sUMIYA%20TOUR%20AND%20TRAVELS!5e0!3m2!1sen!2sin!4v1746178513378!5m2!1sen!2sin" frameBorder={0}
              style={{ minHeight: 300, border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}></iframe>
          </div>
          <div
            className="col-lg-4 col-md-12 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 100 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className=" w-100 py-3" type="submit" style={{backgroundColor:"#0B1A39", color:"white"}}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Contact End */}
    </div>
  )
}

export default Contact
