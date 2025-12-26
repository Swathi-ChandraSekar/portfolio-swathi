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
          href="https://www.linkedin.com/in/swathi-chandra-sekar-472487378/"
          target="_blank"
          rel="noreferrer"
          className="sidebar-link"
        >
          🔗 Swathi Chandra Sekar | LinkedIn
        </a>
        
        <a
          href="https://github.com/Swathi-ChandraSekar"
          target="_blank"
          rel="noreferrer"
          className="sidebar-link"
        >
          💻Github: Swathi-ChandraSekar (Swathi)
        </a>

        <a
          href="mailto:swathichandrasekar226@gmail.com"
          className="sidebar-link"
        >
          ✉️ swathichandrasekar226@gmail.com
        </a>

  
         <a href={resume} download className="resume-section text-center btn btn-sm btn-dark">
           Download Resume
         </a>
       
      </div>
    </aside>
  );
}

export default Sidebar;
