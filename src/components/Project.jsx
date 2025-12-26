function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-4">Projects</h2>

      <div className="row g-4">

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Canteen Pre-Ordering App</h5>
              <p className="card-text">
                Web application built using React, Node.js and SQLite.
              </p>
              <a
                href="https://github.com/USERNAME/canteen-app"
                target="_blank"
                className="btn btn-outline-dark btn-sm"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text">
                Personal portfolio built using Vite + React + Bootstrap.
              </p>
              <a
                href="https://github.com/USERNAME/portfolio"
                target="_blank"
                className="btn btn-outline-dark btn-sm"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
