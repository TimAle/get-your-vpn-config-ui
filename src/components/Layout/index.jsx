import logo from './openvpn.svg';
import './index.css';

const Layout = (WrappedComponent) => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h2>OpenVPN Config Generator</h2>
        <p className="description">
          Get Your Personal OpenVPN Config File
        </p>
        <WrappedComponent />
      </header>
    </div>
  )
}

export default Layout;
