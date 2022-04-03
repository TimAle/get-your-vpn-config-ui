import logo from './openvpn.svg';
import './index.sass';

const Layout = ({ resetAppState, children }) => (
  <div className="app">
    <header className="app-header">
      <img
        src={logo}
        className="app-logo"
        alt="logo"
        onClick={resetAppState}
      />
      <h2>OpenVPN Config Generator</h2>
      <p className="description">
        Get Your Personal OpenVPN Config File
      </p>
      {children}
    </header>
  </div>
)


export default Layout;
