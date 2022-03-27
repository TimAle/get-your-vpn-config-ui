import { useState } from 'react';
import './index.css'

const LoginForm = ({ onSubmit }) => {
  const [inviteCode, setInviteCode] = useState('');

  const handleChange = ({ target }) => {
    setInviteCode(target.value);
  }

  const handleSubmit = () => {
    onSubmit(inviteCode)
  }

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      handleSubmit()
    }
  }

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
        className="proceed-button"
        onClick={handleSubmit}>
          Proceed
      </div>
    </div>
  );
}


export default LoginForm;
