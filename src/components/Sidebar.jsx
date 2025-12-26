import profileImg from "../assets/profile.jpeg";
import resume from "../assets/resume.pdf";
function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={profileImg} alt="Profile" className="sidebar-img floating" />

      <h3 className="mt-3">Swathi</h3>
      <p className="text-muted">React & Full Stack Developer</p>

      <div className="sidebar-links">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="sidebar-link"
        >
          🔗 LinkedIn
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="sidebar-link"
        >
          💻 GitHub
        </a>

        <a
          href="mailto:yourmail@example.com"
          className="sidebar-link"
        >
          ✉️ Email
        </a>

        <a
          href={resume}
          download
         className="resume-section text-center btn btn-dark btn-sm mt-2 ">
          Download Resume
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
