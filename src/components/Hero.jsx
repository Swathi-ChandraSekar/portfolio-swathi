function Hero() {
  return (
    <section className="container py-5">
      <div className="row align-items-center text-center text-md-start">

        {/* LEFT CONTENT */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="fw-bold">Hi, I’m Swathi</h1>
          <p className="text-muted fs-5">
            React & Full Stack Developer
          </p>

          <p>
            I build clean, responsive web applications using modern
            technologies with focus on usability and performance.
          </p>

          <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
            <a
              href="/resume.pdf"
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

        {/* RIGHT IMAGE */}
        <div className="col-md-6 text-center">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="profile-img floating"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
