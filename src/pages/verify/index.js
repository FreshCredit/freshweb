import VerificationInput from "react-verification-input";
import { useSelector } from "react-redux";
import { CustomButton, IconButton } from "../../components/button"
import ArrowLeft from '../../assets/icon/arrow-left.png'
import "../../styles/verify.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IconButtonStyles = {
  background: 'transparent',
  border: 'none'
}

const continueBtnStyles = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "18px",
  background: "#C6C4FF",
  borderRadius: "48px",
  color: "#5538EE",
  width: "320px",
  border: 'none',
  paddingTop: "16px",
  paddingBottom: "16px"
}

const resendBtnStyels = {
  background: "transparent",
  marginTop: "46px",
  border: 'none',
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "18px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#6269F1",

}

const VerifyPage = () => {
  const navigator = useNavigate()
  const inputType = useSelector(state => state.loginState.inputType)
  const loginInfo = useSelector(state => inputType ? state.loginState.phoneNumber : state.loginState.email)
  const [verifyCode, setVerifyCode] = useState("")
  const handleVerifyChange = (value) => {
    setVerifyCode(value)
  }
  const handleContinue = () => {
    navigator('/verify/confirming')
    console.log("continue")
  }
  const handleResendCode = () => {
    console.log("Resend code")
  }
  return (
    <>
      <div className="verify_container">
        <div style={{ height: "calc(100vh - 200px)" }}>
          <div className="flex justify-space-between items-center w-full">
            <IconButton
              style={IconButtonStyles}
            >
              <img src={ArrowLeft} alt="arrow-left" />
            </IconButton>
            {
              inputType ?
                <div className="change-number">Change number</div>
                :
                <div className="change-number">Change email</div>
            }
          </div>
          <div className="title">Enter authentication code</div>
          <div className="text-center">
            <span className="text">Enter the 4-digit that we have sent via the phone number</span>
            <span className="text" style={{ color: "var(--second)" }}> {loginInfo}</span>
          </div>
          <div>
            <VerificationInput
              placeholder=""
              value={verifyCode}
              onChange={handleVerifyChange}
              length={4}
            />
          </div>
        </div>
        <div className="verify_section">
          <CustomButton
            visiableState={verifyCode.length === 4 ? false : true}
            title="Continue"
            style={continueBtnStyles}
            onClick={handleContinue}
          />
          <CustomButton
            visiableState={verifyCode.length !== 4 ? false : true}
            title="Resend code"
            style={resendBtnStyels}
            onClick={handleResendCode}
          />
        </div>
      </div>
    </>
  );
}

export default VerifyPage