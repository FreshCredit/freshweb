import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../../components/button";
import { useState } from "react";

const connectStyles = {
  background: "#6269F1",
  borderRadius: '30px',
  padding: "15px 30px",
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '16px',
  color: "var(--text-white)",
  border: "2px solid var(--text-blue)",
  width: '100%',
}

const skipStyles = {
  background: "transparent",
  borderRadius: '30px',
  padding: "15px 30px",
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '16px',
  color: "var(--text-gray)",
  width: '100%',
  border: 'none',
  marginTop: '10px'
}

const Connect = ({ children }) => {
  return (
    <>
      <div className="financial-list">
        {children}
      </div>
    </>
  );
}

const VerifyConnect = () => {
  const navigator = useNavigate()
  const [selectList, setSelectList] = useState([])
  const [connectTitle, setConnectTitle] = useState("Financal")
  const [stepState, setStepState] = useState(1)
  const handleConnect = (e) => {
    let temp = selectList;
    temp.push(e.target.getAttribute('src'))
    setSelectList([...temp])
    if (temp.length === 1) {
      setStepState(2)
      setConnectTitle('Social')
    }
    else if (temp.length === 2) {
      setStepState(3)
      setConnectTitle('Digital')
    }
    else if (temp.length === 3) {
      setStepState(4)
      setConnectTitle("Personal")
    }

  }
  return (
    <>
      <div className="connect-container">
        <div className="connect-title">Connect</div>
        <div className="connect-content-box">
          <div className="connect-type-title">{connectTitle}</div>
          {
            selectList.map((item, index) => (
              <img className="selected-icon" src={item} alt={index} />
            ))
          }
          {
            stepState === 1 &&
            <Connect
              handleConnect={handleConnect}>
              <img className="irs-img" src='/img/irs.png' alt="irs-img" onClick={handleConnect} />
              <img className="experian-img" src='/img/experian.png' alt='experian-img' onClick={handleConnect} />
              <img className="master-card-img" src='/img/master-card.png' alt='master-card-img' onClick={handleConnect} />
              <img className="chime-app-img" src='/img/chime-app.png' alt='chime-app-img' onClick={handleConnect} />
              <img className="chase-bank-img" src='/img/chase-bank.png' alt='chase-bank-img' onClick={handleConnect} />
              <img className="wellsfargo-img" src='/img/wellsfargo.png' alt='wellsfargo-img' onClick={handleConnect} />
            </Connect>
          }
          {
            stepState === 2 &&
            <Connect
              handleConnect={handleConnect}>
              <img className="github-img" src='/img/gitub.png' alt='github-img' onClick={handleConnect} />
              <img className="meta-img" src='/img/meta.png' alt='meta-img' onClick={handleConnect} />
              <img className="linkedin-img" src='/img/linkedin.png' alt='linkedin-img' onClick={handleConnect} />
              <img className="twitter-img" src='/img/twitter.png' alt='twitter-img' onClick={handleConnect} />
            </Connect>
          }
          {
            stepState === 3 &&
            <Connect
              handleConnect={handleConnect}>
              <img className="ledger-img" src='/img/ledger.png' alt='ledger-img' onClick={handleConnect} />
              <img className="dot-img" src='/img/unname.png' alt='dot-img' onClick={handleConnect} />
              <img className="robin-img" src='/img/robinhood.png' alt='robinhood-img' onClick={handleConnect} />
              <img className="gusd-img" src='/img/GUSD.png' alt='gusd-img' onClick={handleConnect} />
              <img className="binance" src='/img/binance.png' alt='binance-img' onClick={handleConnect} />
              <img className="metamask-img" src='/img/MetaMask_Fox.png' alt='metamask-fox-img' onClick={handleConnect} />
            </Connect>
          }
          {
            stepState === 4 &&
            <Connect
              handleConnect={handleConnect}>
              <img className="apple-img" src='/img/apple.png' alt='apple-img' onClick={handleConnect} />
              <img className="microsoft-img" src='/img/microsoft.png' alt='microsoft-img' onClick={handleConnect} />
              <img className="googleL-img" src='/img/googleL.png' alt='googleL-img' onClick={handleConnect} />
              <img className="android-img" src='/img/android.png' alt='android-img' onClick={handleConnect} />
            </Connect>
          }
        </div>
        <CustomButton
          title="Connect"
          style={connectStyles}
        />
        <CustomButton
          title="Skip for now"
          style={skipStyles}
        />
      </div>
    </>
  );
}

export default VerifyConnect
