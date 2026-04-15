function Projects() {
  return (
    <section id="projects" className="container py-5 right">
      <h2 className="mb-4">Projects</h2>

      <div className="row g-4">

        {/* DripTheory */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">DripTheory (E-commerce Web App)</h5>
              <p className="text-muted small mb-2">
                Developed using Next.js with responsive UI, API integration,
                and modern frontend practices.
              </p>
              <a
                href="https://github.com/Swathi-ChandraSekar/drip-theory"
                target="_blank"
                className="btn btn-outline-primary btn-sm"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Civic App */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Civic Engagement App</h5>
              <p className="text-muted small mb-2">
                Built using Flutter and FastAPI for handling civic issues with
                authentication and backend integration.
              </p>
              <a
                href="https://github.com/Swathi-ChandraSekar/Tech_Therdhal"
                target="_blank"
                className="btn btn-outline-dark btn-sm"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Mindmap */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Mindmap UI</h5>
              <p className="text-muted small mb-2">
                Interactive UI built using React Flow with dynamic node rendering
                and smooth user interaction.
              </p>
              <a
                href="https://github.com/Swathi-ChandraSekar/mindmap"
                target="_blank"
                className="btn btn-outline-primary btn-sm"
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