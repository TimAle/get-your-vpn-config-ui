import React, { useState } from "react";
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";

import Content from "./components/MainContainer";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import Guide from "./components/Guide";


function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const App = () => {
  const [inviteCode, setInviteCode] = useState(useQuery().get("invite_code"));

  return (
    <Layout resetAppState={() => setInviteCode(null)}>
      <AppBody inviteCode={inviteCode} setInviteCode={setInviteCode} />
    </Layout>
  );
}

const AppBody = ({ inviteCode, setInviteCode }) => (
  <>
    {inviteCode
      ? <Content inviteCode={inviteCode} />
      : <LoginForm onSubmit={setInviteCode} />}
    <Guide />
  </>

)

const RoutedApp = () => (
  <Router>
    <App />
  </Router>
);

export default RoutedApp;
