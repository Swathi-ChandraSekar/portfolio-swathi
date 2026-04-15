import "../App.css";
function Experience() {
  return (
    <section className="container py-5">
      <h2 className="mb-5 fw-bold text-white">Experience</h2>

      <div className="timeline">

        {/* Viscominx */}
        <div className="timeline-item">
          <div className="card p-4">
            <h5>Frontend Developer Intern</h5>
            <p className="text-muted">Viscominx | Mar 2026 – Present</p>
            <p>
              Developing cross-platform applications using Flutter, integrating APIs,
              and enhancing UI/UX performance.
            </p>
          </div>
        </div>

        {/* Elevance */}
        <div className="timeline-item">
          <div className="card p-4">
            <h5>Software Development Intern</h5>
            <p className="text-muted">Elevance Skills | Jan 2026 – Mar 2026</p>
            <p>
              Worked on Next.js e-commerce app (DripTheory), focusing on UI and API integration.
            </p>

            <a
  href="https://github.com/Swathi-ChandraSekar/my-certificates"
  target="_blank"
  className="btn btn-outline-primary btn-sm mt-2"
>
  View Certificate
</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;