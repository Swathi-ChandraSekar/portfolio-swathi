import profileImg from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT: PHOTO */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src={profileImg}
              alt="Profile"
              className="profile-img floating"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="col-lg-7">
            <h1 className="fw-bold">Hi, I’m Swathi</h1>

            <p className="fs-5 text-muted">
              React & Full Stack Developer
            </p>

            <p>
              I build clean, responsive web applications using modern
              technologies with a strong focus on usability and performance.
            </p>

            <div className="d-flex gap-3 flex-wrap mt-3">
              

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
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
