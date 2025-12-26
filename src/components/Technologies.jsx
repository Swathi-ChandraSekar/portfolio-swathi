function Technologies() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Node.js",
    "MySQL",
    "Git",
    "GitHub",
  ];

  return (
    <section id="technologies" className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-4">Technologies Known</h2>

        <div className="row justify-content-center g-3">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="border rounded py-3 shadow-sm bg-white">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
