import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-3 pb-2">
      <div className="container-fluid">
        <p>Logo</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <p className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Images
              </Link>
            </p>
            <p className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/videos"
              >
                Videos
              </Link>
            </p>
            <p className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/sing-in"
              >
                SingIn
              </Link>
            </p>
            <p className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/sing-up"
              >
                SingUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
