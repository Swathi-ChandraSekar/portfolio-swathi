function Hero() {
  return (
    <section className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="/portfolio-swathi/profile.jpg"
              alt="Profile"
              className="profile-img floating"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-7">
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
                href="/portfolio-swathi/resume.pdf"
                download
                className="btn btn-dark"
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/YOUR-LINKEDIN"
                target="_blank"
                className="btn btn-outline-primary"
              >
                <i className="bi bi-linkedin me-1"></i>
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
