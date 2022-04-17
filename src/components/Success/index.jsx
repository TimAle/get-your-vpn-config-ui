import { useTranslation } from 'react-i18next';
import './index.sass'

const Success = ({ config }) => {
  const { t } = useTranslation();
  const decoded = window.atob(config.ovpn_file)
  const byteCharacters = new Blob([decoded], { type: 'application/octet-stream' })
  const url = URL.createObjectURL(byteCharacters);

  return (
    <div className="success">
      <h1>{t('success.title')}</h1>
      <p>
        {t('success.description')}
      </p>
      <a
        className="download-button"
        href={url}
        download="openvpn.ovpn"
      >
        {t('success.download')}
      </a>
    </div>
  );
}

export default Success;
