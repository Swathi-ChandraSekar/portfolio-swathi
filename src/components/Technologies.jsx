function Technologies() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Flutter",
    "Bootstrap",
    "FastAPI",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub"
  ];

  return (
    <section id="technologies" className="py-5 right">
      <div className="container">
        <h2 className="mb-4">Skills</h2>

        <div className="row justify-content-center g-3">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="border rounded py-2 shadow-sm bg-white skilllist text-center">
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