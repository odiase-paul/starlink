import "bootstrap/js/src/collapse.js";
import "bootstrap/js/src/dropdown.js";
import logo from "./image/logo_white.png";
export const LandingPage = () => {
  return (
    <div className="bg ">
      <div className="pt-4">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <div className="logo">
              <a className="navbar-brand" href="#0">
                <img style={{ width: "160px" }} src={logo} alt="" />
              </a>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="residential" aria-current="page" href="#0">
                    RESIDENTIAL
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="#0">
                    BUSINESS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="#0">
                    ROAM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="#0">
                    MOBILITY
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="#0">
                    MARITIME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="#0">
                    AVIATION
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="#0">
                    IOT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="#0">
                    TECHNOLOGY
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="#0">
                    SUPPORT
                  </a>
                </li>
                <li className="nav-item dropdown move">
                  <a
                    className="margin"
                    href="#0"
                    id="navbarDropdownMenuLink "
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="navbar-toggler-icon icon-white"></span>
                  </a>
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#0">
                        MAP
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a className="dropdown-item" href="#0">
                        RESOURCES
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a className="dropdown-item" href="#0">
                        SPECIFICATIONS
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a className="dropdown-item" href="#0">
                        US
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a className="dropdown-item" href="#0">
                        SIGN IN
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="order align-items-center ">
        <div className="starlink mt-5">
          <h1>ORDER STARLINK</h1>
          <p className="">
            High-speed, low-latency broadband internet in remote and rural
            locations across the globe. NGN38,000/mo with a one-time hardware
            cost of NGN378,000.
          </p>
        </div>
        <div className="label">
          <div className="label-input">
            <label htmlFor="order-starlink"></label>
            <input
              className="order-star"
              type="search"
              id="order-starlink"
              placeholder="Search Address"
            />
            <button>ORDER NOW</button>
          </div>
          <div className="landing-footer pb-1">
            <p>
              VIEW AVAILABILITY MAP{" "}
              <span>
                <i
                  style={{ opacity: ".7" }}
                  className="bi bi-chevron-right"
                ></i>
              </span>
            </p>
            <footer>
              By clicking order now, you agree to our &nbsp;
              <a
                style={{ opacity: ".7" }}
                href="https://www.starlink.com/legal"
              >
                Privacy Policy
              </a>
              <h2>
                <span>
                  <i className="bi bi-chevron-down floating"></i>
                </span>
              </h2>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
