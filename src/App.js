import React, { useState } from "react";
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";

import Content from "./components/MainContainer";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";


function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  const [inviteCode, setInviteCode] = useState(useQuery().get("invite_code"));

  return inviteCode
    ? <Content inviteCode={inviteCode} />
    : <LoginForm onSubmit={setInviteCode} />;
}

const AppWithLayout = () => Layout(App);

export default function QueryParamsExample() {
  return (
    <Router>
      <AppWithLayout />
    </Router>
  );
}
