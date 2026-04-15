
function Hero() {
  return (
    <section className="container-fluid py-5 right">
      <div className="container">
        <div className="row align-items-center">


          {/* RIGHT: CONTENT */}
          <div className="col-lg-7">
            <br></br>
            <h1 className="fw-bold">
  Hi, I’m <span style={{ color: "#3b82f6" }}>Swathi</span>
</h1>

<p className="fs-5">
  Frontend Developer | React • Flutter • Next.js
</p>

<p>
  I design and build modern, scalable, and user-friendly web and mobile applications.
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
