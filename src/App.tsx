import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Agents from "./pages/Agents";
import Transactions from "./pages/Transactions";
import Transactions1 from "./pages/Transactions1";
import Transactions2 from "./pages/Transactions2";
import Agents1 from "./pages/Agents1";
import Transactions3 from "./pages/Transactions3";
import Transactions4 from "./pages/Transactions4";
import Transactions5 from "./pages/Transactions5";
import Deposit from "./pages/Deposit";
import Deposit1 from "./pages/Deposit1";
import DashExpansion from "./pages/DashExpansion";
import DashExpansion1 from "./pages/DashExpansion1";
import DashExpansion2 from "./pages/DashExpansion2";
import Transactions6 from "./pages/Transactions6";
import AgentsPreview from "./pages/AgentsPreview";
import AgentsPreview1 from "./pages/AgentsPreview1";
import Withdraw from "./pages/Withdraw";
import Withdraw1 from "./pages/Withdraw1";
import Withdraw2 from "./pages/Withdraw2";
import Withdraw3 from "./pages/Withdraw3";
import Deposit2 from "./pages/Deposit2";
import Deposit3 from "./pages/Deposit3";
import DashExpansion3 from "./pages/DashExpansion3";
import Transactions7 from "./pages/Transactions7";
import Savers from "./pages/Savers";
import Agents2 from "./pages/Agents2";
import Transactions8 from "./pages/Transactions8";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPassword1 from "./pages/ForgotPassword1";
import Login from "./pages/Login";
import Dash from "./pages/Dash";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/transactions1":
        title = "";
        metaDescription = "";
        break;
      case "/transactions2":
        title = "";
        metaDescription = "";
        break;
      case "/transactions3":
        title = "";
        metaDescription = "";
        break;
      case "/agents1":
        title = "";
        metaDescription = "";
        break;
      case "/transactions4":
        title = "";
        metaDescription = "";
        break;
      case "/transactions5":
        title = "";
        metaDescription = "";
        break;
      case "/transactions6":
        title = "";
        metaDescription = "";
        break;
      case "/deposit1":
        title = "";
        metaDescription = "";
        break;
      case "/deposit3":
        title = "";
        metaDescription = "";
        break;
      case "/dash-expansion1":
        title = "";
        metaDescription = "";
        break;
      case "/dash-expansion2":
        title = "";
        metaDescription = "";
        break;
      case "/dash-expansion3":
        title = "";
        metaDescription = "";
        break;
      case "/transactions7":
        title = "";
        metaDescription = "";
        break;
      case "/agents-preview":
        title = "";
        metaDescription = "";
        break;
      case "/agents-preview1":
        title = "";
        metaDescription = "";
        break;
      case "/withdraw1":
        title = "";
        metaDescription = "";
        break;
      case "/withdraw2":
        title = "";
        metaDescription = "";
        break;
      case "/withdraw3":
        title = "";
        metaDescription = "";
        break;
      case "/withdraw":
        title = "";
        metaDescription = "";
        break;
      case "/deposit2":
        title = "";
        metaDescription = "";
        break;
      case "/deposit":
        title = "";
        metaDescription = "";
        break;
      case "/dash-expansion":
        title = "";
        metaDescription = "";
        break;
      case "/transactions8":
        title = "";
        metaDescription = "";
        break;
      case "/savers":
        title = "";
        metaDescription = "";
        break;
      case "/agents":
        title = "";
        metaDescription = "";
        break;
      case "/transactions":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password1":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/dash":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Agents />} />

      <Route path="/transactions1" element={<Transactions />} />

      <Route path="/transactions2" element={<Transactions1 />} />

      <Route path="/transactions3" element={<Transactions2 />} />

      <Route path="/agents1" element={<Agents1 />} />

      <Route path="/transactions4" element={<Transactions3 />} />

      <Route path="/transactions5" element={<Transactions4 />} />

      <Route path="/transactions6" element={<Transactions5 />} />

      <Route path="/deposit1" element={<Deposit />} />

      <Route path="/deposit3" element={<Deposit1 />} />

      <Route path="/dash-expansion1" element={<DashExpansion />} />

      <Route path="/dash-expansion2" element={<DashExpansion1 />} />

      <Route path="/dash-expansion3" element={<DashExpansion2 />} />

      <Route path="/transactions7" element={<Transactions6 />} />

      <Route path="/agents-preview" element={<AgentsPreview />} />

      <Route path="/agents-preview1" element={<AgentsPreview1 />} />

      <Route path="/withdraw1" element={<Withdraw />} />

      <Route path="/withdraw2" element={<Withdraw1 />} />

      <Route path="/withdraw3" element={<Withdraw2 />} />

      <Route path="/withdraw" element={<Withdraw3 />} />

      <Route path="/deposit2" element={<Deposit2 />} />

      <Route path="/deposit" element={<Deposit3 />} />

      <Route path="/dash-expansion" element={<DashExpansion3 />} />

      <Route path="/transactions8" element={<Transactions7 />} />

      <Route path="/savers" element={<Savers />} />

      <Route path="/agents" element={<Agents2 />} />

      <Route path="/transactions" element={<Transactions8 />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/forgot-password1" element={<ForgotPassword1 />} />

      <Route path="/login" element={<Login />} />

      <Route path="/dash" element={<Dash />} />
    </Routes>
  );
}
export default App;
