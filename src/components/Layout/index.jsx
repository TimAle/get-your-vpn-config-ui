import { useTranslation } from 'react-i18next';
import logo from './openvpn.svg';
import './index.sass';

const Layout = ({ resetAppState, children }) => {
  const { t, i18n } = useTranslation();
  const setLang = l => i18n.changeLanguage(l);

  return (
    <div className="app">
      <header className="app-header">
        <img
          src={logo}
          className="app-logo"
          alt="logo"
          onClick={resetAppState}
        />
        <div className='lang-switcher'>
          <span onClick={() => setLang('en')} className='lang'>ENG</span>
          <span onClick={() => setLang('ru')} className='lang'>RUS</span>
        </div>
        <h2>{t('common.title')}</h2>
        <p className="description">
          {t('common.description')}
        </p>
        {children}
      </header>
    </div>
  )
}


export default Layout;
