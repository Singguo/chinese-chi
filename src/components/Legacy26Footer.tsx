export function Legacy26Footer() {
  return (
    <>
      <hr />
      <footer className="container space-2 space-top-lg-2">
        {/* TODO(2026): 更新版权年份、联系邮箱与联系方式。 */}
        <div className="row align-items-sm-center">
          <div className="col-sm-6 mb-4 mb-sm-0">
            <p className="small mb-0">
              <a href="http://icachi.org">&copy; ICHEC 2025</a>.
            </p>
          </div>

          <div className="col-sm-6 text-sm-right">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mb-2 mb-sm-0">
                <a
                  className="btn btn-xs btn-icon btn-soft-indigo rounded-circle"
                  href="mailto:ichec@icachi.org"
                >
                  <i className="fas fa-envelope" />
                </a>
                <a href="mailto:ichec@icachi.org" className="ml-2 small mb-0">
                  ichec@icachi.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
