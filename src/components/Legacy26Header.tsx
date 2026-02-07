import Link from "next/link";

const NAV_ITEMS = [
  { href: "/26", label: "ICHEC 2025" },
  { href: "/26/callforpapers", label: "Call for Papers" },
  { href: "/26/attend", label: "Attend" },
  { href: "/26/program", label: "Program" },
  { href: "/26/workshops", label: "Workshops" },
  { href: "/26/amalunch", label: "AMA Lunch" },
  { href: "/26/committee", label: "Committee" },
  { href: "/26/sponsorship", label: "Sponsorship" },
];

export function Legacy26Header() {
  return (
    <header
      id="header"
      className="header header-box-shadow-on-scroll header-abs-top header-white-nav-links-lg header-bg-transparent header-show-hide"
      data-hs-header-options='{"fixMoment": 1000, "fixEffect": "slide"}'
    >
      {/* TODO(2026): 更新导航标题中的年份与栏目名称（如有变动）。 */}
      <div className="header-section">
        <div id="logoAndNav" className="container">
          <nav className="js-mega-menu navbar navbar-expand-lg">
            <Link className="navbar-brand navbar-brand-default" href="/26" aria-label="ICHEC 2025">
              <img
                src="https://ichec.icachi.org/assets/img/logo/icachi-logo-dark.svg"
                alt="ICACHI"
              />
            </Link>
            <Link className="navbar-brand navbar-brand-on-scroll" href="/26" aria-label="ICHEC 2025">
              <img
                src="https://ichec.icachi.org/assets/img/logo/icachi-logo.svg"
                alt="ICACHI"
              />
            </Link>
            <Link className="navbar-brand navbar-brand-collapsed" href="/26" aria-label="ICHEC 2025">
              <img
                src="https://ichec.icachi.org/assets/img/logo/icachi-logo.svg"
                alt="ICACHI"
              />
            </Link>

            <button
              type="button"
              className="navbar-toggler btn btn-icon btn-sm rounded-circle"
              aria-label="Toggle navigation"
              aria-expanded="false"
              aria-controls="navBar"
              data-toggle="collapse"
              data-target="#navBar"
            >
              <span className="navbar-toggler-default">
                <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"
                  />
                </svg>
              </span>
              <span className="navbar-toggler-toggled">
                <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"
                  />
                </svg>
              </span>
            </button>

            <div id="navBar" className="collapse navbar-collapse">
              <div className="navbar-body header-abs-top-inner">
                <ul className="navbar-nav text-dark">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href} className="navbar-nav-item">
                      <Link className="nav-link text-dark" href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
