
import { fireEvent, render, screen } from '@testing-library/react';
import i18n from './config';
import { I18nextProvider } from 'react-i18next'
import Layout from '../components/Layout';

test('renders translated title', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <Layout resetAppState={() => { }} >
        <></>
      </Layout>
    </I18nextProvider>
  );

  const titleElement = screen.getByText('Get Your Personal OpenVPN Config File');
  expect(titleElement).toBeInTheDocument();
});

test('switches language on switcher click', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <Layout resetAppState={() => { }} >
        <></>
      </Layout>
    </I18nextProvider>
  );

  const switchEngElement = screen.getByText('ENG');
  const switchRusElement = screen.getByText('RUS');
  expect(switchEngElement).toBeInTheDocument();
  expect(switchRusElement).toBeInTheDocument();

  const titleElement = screen.getByText('Get Your Personal OpenVPN Config File');
  expect(titleElement).toBeInTheDocument();

  fireEvent.click(switchRusElement)
  expect(titleElement).toHaveTextContent('Сгенерируй персональный конфиг OpenVPN');
});
