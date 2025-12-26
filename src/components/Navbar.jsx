function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">My Portfolio</a>

      <div className="ms-auto">
        <a className="nav-link d-inline text-white" href="#projects">Projects</a>
        <a className="nav-link d-inline text-white" href="/resume.pdf" download>
          Resume
        </a>
        <a
          className="nav-link d-inline text-white"
          href="https://github.com/USERNAME"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
