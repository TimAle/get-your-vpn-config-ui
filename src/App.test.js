import { render, screen } from '@testing-library/react';
import i18n from './i18n/config';
import { I18nextProvider } from 'react-i18next'
import App from './App';

test('renders app title', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );

  const titleElement = screen.getByText(/OpenVPN Config Generator/i);
  expect(titleElement).toBeInTheDocument();
});
