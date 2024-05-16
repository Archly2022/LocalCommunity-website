import { useMemo } from "react";
import "./Footer.css";

const Footer = ({ supportMargin, hostingMargin, localhostMargin }) => {
  const supportStyle = useMemo(() => {
    return {
      margin: supportMargin,
    };
  }, [supportMargin]);

  const hostingStyle = useMemo(() => {
    return {
      margin: hostingMargin,
    };
  }, [hostingMargin]);

  const localhostStyle = useMemo(() => {
    return {
      margin: localhostMargin,
    };
  }, [localhostMargin]);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="frame-parent">
          <div className="support-parent">
            <h3 className="support" style={supportStyle}>
              Support
            </h3>
            <div className="help-centre">Help Centre</div>
            <div className="aircover">AirCover</div>
            <div className="combating-discrimination">
              Combating discrimination
            </div>
            <div className="supporting-people-with">
              Supporting people with disabilities
            </div>
            <div className="cencellation-options">Cencellation options</div>
            <div className="report-neighbourhood-concern">
              Report neighbourhood concern
            </div>
          </div>
          <div className="hosting-parent">
            <h3 className="hosting" style={hostingStyle}>
              Hosting
            </h3>
            <div className="local-home">Local home</div>
            <div className="cover-for-hosts">Cover for hosts</div>
            <div className="hosting-resources">Hosting resources</div>
            <div className="community-forum">Community forum</div>
            <div className="hosting-responsibly">Hosting responsibly</div>
          </div>
          <div className="localhost-parent">
            <h3 className="localhost" style={localhostStyle}>
              Localhost
            </h3>
            <div className="newsroom">Newsroom</div>
            <div className="new-features">New Features</div>
            <div className="careers">Careers</div>
            <div className="investres">Investres</div>
            <div className="gift-cards">Gift cards</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
