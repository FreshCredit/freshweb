import { BrowserRouter, Routes, Route } from "react-router-dom"
import useTheme from "../hooks/useTheme"
import Home from "../pages/home"
import LoginPage from '../pages/login'
import VerifyPage from '../pages/verify'
import ConfirmCountry from "../pages/verify/section/confirmCountry"
import BankVerify from "../pages/verify/section/bankVerify"

const RouterControl = () => {
  const [theme, switchTheme] = useTheme()
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home switchTheme={switchTheme} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/verify/confirming" element={<ConfirmCountry />} />
          <Route path="/verify/bank" element={<BankVerify />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterControl