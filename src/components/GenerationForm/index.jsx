import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import Success from '../Success';
import './index.sass';

const GenerationForm = ({ inviteCode }) => {
  const { t } = useTranslation();
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

  const renderError = () => <div className="error">{t('errors.generationFailed', { error })}</div>;

  const buttonCN = cn('generate-button', { disabled: disableButton });

  return (
    created
      ? <Success config={config} />
      : (
        <div>
          <p>
            {t('generate.title')}
          </p>
          <input
            className="password-input"
            type="password"
            placeholder={t('generate.placeholder')}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <span className="hint" >
            {t('generate.passwordHint')}
          </span>
          <div
            className={buttonCN}
            onClick={handleSubmit}
          >
            {t('generate.submit')}
          </div>
          {error && renderError()}
        </div>
      )
  );
}

export default GenerationForm;
