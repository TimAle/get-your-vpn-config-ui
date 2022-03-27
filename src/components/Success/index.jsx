import './index.css'

const Success = ({ config }) => {
  const decoded = window.atob(config.ovpn_file)
  const byteCharacters = new Blob([decoded], { type: 'text/plain' })
  const url = URL.createObjectURL(byteCharacters);

  return (
    <div className="success">
      <h1>Success!</h1>
      <p>
        Your OpenVPN config file is ready.
      </p>
      <a className="download-button" href={url} download="openvpn.ovpn">Download</a>
    </div>
  );
}

export default Success;
