import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import './index.sass'

const LoginForm = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [inviteCode, setInviteCode] = useState('');

  const handleChange = ({ target }) => {
    setInviteCode(target.value);
  }

  const handleSubmit = () => {
    if (inviteCode.length > 0) {
      onSubmit(inviteCode);
    }
  }

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      handleSubmit()
    }
  }

  const buttonCN = cn('proceed-button', {
    disabled: !inviteCode
  })

  return (
    <div>
      <p>
        {t('login.title')}
      </p>
      <input
        className="text-input"
        type="text"
        placeholder={t('login.placeholder')}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div
        className={buttonCN}
        onClick={handleSubmit}>
        {t('login.proceed')}
      </div>
    </div>
  );
}


export default LoginForm;
