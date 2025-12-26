import profileImg from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="container-fluid py-5 right">
      <div className="container">
        <div className="row align-items-center">


          {/* RIGHT: CONTENT */}
          <div className="col-lg-7">
            <br></br>
            <h1 className="fw-bold">Hi, I’m Swathi</h1>

            <p className="fs-5 hig">
              React & Full Stack Developer
            </p>

            <p>
              I build clean, responsive web applications using modern
              technologies with a strong focus on usability and performance.
            </p>

            <div className="d-flex gap-3 flex-wrap mt-3">
              

              <a
                href="https://www.linkedin.com/in/swathi-chandra-sekar-472487378/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Swathi-ChandraSekar"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light"
              >
                Github
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
