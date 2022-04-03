import { useState } from 'react';
import cn from 'classnames';
import Success from '../Success';
import './index.sass';

const GenerationForm = ({ inviteCode }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [created, setCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState({});

  const handleChange = ({ target }) => {
    setPassword(target.value);
  }

  const disableButton = password.length < 4 || loading;

  const handleSubmit = async () => {
    if (disableButton) return;

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

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      handleSubmit()
    }
  }

  const renderError = () => <div className="error">Failed to create .ovpn file: {error}</div>;

  const buttonCN = cn('generate-button', { disabled: disableButton });

  return (
    created
      ? <Success config={config} />
      : (
        <div>
          <p>
            Create a password for your upcoming config file.
          </p>
          <input
            className="password-input"
            type="password"
            placeholder="Type password for your upcoming config file (4+ characters)"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <span className="hint" >
            Password must be at least 4 characters long.
          </span>
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
