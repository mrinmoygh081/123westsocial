import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="relative overflow-hidden w-100 vh-100">
          <img
            className="absolute img-fluid banner_image"
            data-speed="auto"
            src="./images/banner-image1.jpg"
          />
          <div className="section-center">
            <div className="search_container">
              <div className="row m-auto">
                <div className="booking-form">
                  <form>
                    <div className="row no-margin">
                      <div className="col-md-8 px-5">
                        <div className="row no-margin">
                          <div className="col-md-4">
                            <div className="form-group">
                              <span className="form-label">
                                What are you planning?
                              </span>
                              <input
                                className="form-control"
                                placeholder="Enter your activity"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <span className="form-label">Where?</span>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Enter a city or address"
                              />
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="form-group">
                              <span className="form-label">When?</span>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Anytime"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-btn">
                          <button className="submit-btn">
                            Check availability
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row my-50 border-dashed ">
            <div className="col-12 col-lg-4">
              <img src="./images/img (12).jpeg" alt="" />
            </div>
            <div className="col-12 col-lg-4">
              <img src="./images/img (11).jpeg" alt="" />
            </div>
            <div className="col-12 col-lg-4">
              <img src="./images/img (10).jpeg" alt="" />
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row my-50 border-dashed ">
            <div className="col-12 p-5">
              <h2 className="page_heading">
                Find a space,Fullfill your vision
              </h2>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row my-50 border-dashed ">
            <div className="col-12 col-lg-4">
              <img src="./images/img (12).jpeg" alt="" />
            </div>
            <div className="col-12 col-lg-4">
              <img src="./images/img (11).jpeg" alt="" />
            </div>
            <div className="col-12 col-lg-4">
              <img src="./images/img (10).jpeg" alt="" />
            </div>
          </div>
        </div>

        <div className="container other_information">
          <div className="row my-50">
            <div className="col-12">
              <div className="sec-title">
                <span className="title">Our Future Goal</span>
                <h2>We want to lead in innovation & Technology</h2>
              </div>
              <div className="text">
                We works on UI/UX and functionality as well so that a plugins
                comes with proper stucture & stunning looks which suits to your
                web app & website.
              </div>
              <div className="text">
                We take a small toolkit here and ride it well so that it is fit
                for your use. One who performs well and looks even better.
              </div>
              <div className="text">
                Here we are trying to give you all kinds of technical content,
                whether it is related to designing or functionality. We are
                creating content on a lot of languages and will continue to make
                it free of cost even if you use it without any problem. Which is
                a very important thing.
              </div>
              <div className="text">
                Here you can also share the content you create, if our technical
                team likes it, then we will also share it on our blog.
              </div>
              <div className="text">
                In the end, I would say keep visiting our website and enjoy the
                quality content.
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row my-50">
            <div className="col-12 col-lg-8 paralax_text d-flex align-items-center justify-content-center">
              <div className="container other_information">
                <div className="row ">
                  <div className="col-12 p-5">
                    <div className="sec-title">
                      <span className="title">Our Future Goal</span>
                      <h2 style={{ color: "#121212", fontSize: "60px" }}>
                        We want to lead in innovation & Technology
                      </h2>
                    </div>
                    <div className="text" style={{ color: "#121212" }}>
                      We works on UI/UX and functionality as well so that a
                      plugins comes with proper stucture & stunning looks which
                      suits to your web app & website.
                    </div>
                    <div className="text" style={{ color: "#121212" }}>
                      We take a small toolkit here and ride it well so that it
                      is fit for your use. One who performs well and looks even
                      better.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 paralax_image">
              <video width="100%" height="100%" autoPlay muted>
                <source src="./images/img-video-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row my-50 border-dashed ">
            <div className="col-12 p-5">
              <h2 className="page_heading">
                Find a space,Fullfill your vision
              </h2>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row my-50">
            <div className="col-12 col-lg-4 paralax_image">
              <video width="100%" height="100%" autoPlay muted>
                <source src="./images/img-video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col-12 col-lg-8 paralax_text d-flex align-items-center justify-content-center">
              <div className="container other_information">
                <div className="row ">
                  <div className="col-12 p-5">
                    <div className="sec-title">
                      <span className="title">Our Future Goal</span>
                      <h2 style={{ color: "#121212", fontSize: "60px" }}>
                        We want to lead in innovation & Technology
                      </h2>
                    </div>
                    <div className="text" style={{ color: "#121212" }}>
                      We works on UI/UX and functionality as well so that a
                      plugins comes with proper stucture & stunning looks which
                      suits to your web app & website.
                    </div>
                    <div className="text" style={{ color: "#121212" }}>
                      We take a small toolkit here and ride it well so that it
                      is fit for your use. One who performs well and looks even
                      better.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="horr-hover-slider">
          <a target="_blank" href="#" className="horr-hover-slider-link">
            <img decoding="async" src="./images/img (12).jpeg" alt="" />
            <span className="h2 horr-hover-slider-link-heading">Main Demo</span>
          </a>
          <a target="_blank" href="#" className="horr-hover-slider-link">
            <img decoding="async" src="./images/img (11).jpeg" alt="" />
            <span className="h2 horr-hover-slider-link-heading">
              Studio Demo
            </span>
          </a>
          <a target="_blank" href="#" className="horr-hover-slider-link">
            <img decoding="async" src="./images/img (10).jpeg" alt="" />
            <span className="h2 horr-hover-slider-link-heading">
              Gamer Demo
            </span>
          </a>
          <a target="_blank" href="#" className="horr-hover-slider-link">
            <img decoding="async" src="./images/img (9).jpeg" alt="" />
            <span className="h2 horr-hover-slider-link-heading">
              Blogger Demo
            </span>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
