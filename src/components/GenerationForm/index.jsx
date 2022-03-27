import { useState } from 'react';
import cn from 'classnames';
import Success from '../Success';
import './index.css';

const GenerationForm = ({ inviteCode }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [created, setCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState({});

  const handleChange = ({ target }) => {
    setPassword(target.value);
  }

  const handleSubmit = async () => {
     if (loading) return;

    setLoading(true);

    const response = await fetch(`${process.env.REACT_APP_LAMBDA_URL}/invite/${inviteCode}/openvpn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password })
    })

    if (response.ok) {
      const openvpn = await response.json();

      setConfig(openvpn);
      setCreated(true);
    } else {
      setError(response.status);
    }

    setLoading(false);
  }

  const renderError = () => <div className="error">Failed to create .ovpn file: {error}</div>;

  const buttonCN = cn('proceed-button', { disabled: loading });

  return (
    created
      ? <Success config={config} />
      : (
          <div>
            <p>
              Create a password for your upcoming config file.
            </p>
            <input
              className="text-input"
              type="password"
              placeholder="Type password for your upcoming config file"
              onChange={handleChange}
            />
            <div
              className={buttonCN}
              onClick={handleSubmit}>
                Generate config
            </div>
            {error && renderError()}
          </div>
        )
  );
}

export default GenerationForm;
