import profileImg from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row align-items-center px-lg-5">

          {/* IMAGE */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src={profileImg}
              alt="Profile"
              className="profile-img floating"
            />
          </div>

          {/* CONTENT */}
          <div className="col-lg-7 text-light">
            <h1 className="fw-bold display-5">Hi, I’m Swathi</h1>

            <p className="fs-5 text-info">
              React & Full Stack Developer
            </p>

            <p className="hero-desc">
              I build clean, responsive web applications using modern
              technologies with a strong focus on usability and performance.
            </p>

            <div className="d-flex gap-3 flex-wrap mt-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
