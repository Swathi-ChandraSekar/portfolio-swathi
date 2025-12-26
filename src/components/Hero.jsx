import profileImg from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">

        <div className="col-lg-5 text-center">
          <img
            src={profileImg}
            alt="Profile"
            className="profile-img floating"
          />
        </div>

        <div className="col-lg-7">
          <h1>Hi, I’m Swathi</h1>
          <p className="text-muted">React & Full Stack Developer</p>

          <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-primary"
        ></a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
