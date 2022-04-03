import { useState } from 'react';
import cn from 'classnames';
import './index.sass'

const LoginForm = ({ onSubmit }) => {
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
        Enter your invite code to get your personal OpenVPN config file.
      </p>
      <input
        className="text-input"
        type="text"
        placeholder="Enter your invite code here"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div
        className={buttonCN}
        onClick={handleSubmit}>
          Proceed
      </div>
    </div>
  );
}


export default LoginForm;
