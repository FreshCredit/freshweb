import { BrowserRouter, Routes, Route } from "react-router-dom"
import useTheme from "../hooks/useTheme"
import Home from "../pages/home"
import LoginPage from '../pages/login'
import VerifyPage from '../pages/verify'
import ConfirmCountry from "../pages/verify/section/confirmCountry"
import BankVerify from "../pages/verify/section/bankVerify"
import VerifyConnect from "../pages/verify/section/connect"
import Block from "../pages/block"

const RouterControl = () => {
  const [theme, switchTheme] = useTheme()
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home switchTheme={switchTheme} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/verify/confirming" element={<ConfirmCountry />} />
          <Route path="/verify/bank" element={<BankVerify />} />
          <Route path="/verify/connect" element={<VerifyConnect />} />
          <Route path="/block" element={<Block />} />

          {/* tom design */}
          {/* <Route path="/" element={< />} */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterControl