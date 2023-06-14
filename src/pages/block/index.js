import { useState, useCallback } from "react";
import { ProgressBar } from "react-step-progress-bar";
import { useDispatch, useSelector } from 'react-redux'
import BasicModal from '../../components/modal'
import Input from '../../components/input'
import { CustomButton } from "../../components/button";
import Header from './components/header'
import BlockID from './section/blockId'
import BlockScore from './section/blockScore'
import BlockIQ from './section/blockIq'
import NavBar from './components/navBar'
import { setPage } from '../../store/action/blockAction'
import SearchIcon from '../../assets/icon/search.png'
import CoinIcon from '../../assets/img/unname.png'
import RobinHoodIcon from '../../assets/img/robinhood.png'
import BinanceIcon from '../../assets/img/binance.png'
import GusdIcon from '../../assets/img/GUSD.png'
import '../../styles/blockId.css'

const modalStyles = {
  position: 'fixed',
  top: '90px',
  width: '100%',
  boxShadow: '24',
  padding: '10px',
}

const wrapperStyles = {
  backgroundColor: 'white',
  marginTop: '39px',
  border: '1px solid #E3E5E5',
  borderRadius: '8px',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
}

const inputStyles = {
  border: 'none',
  outline: 'none',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '16px',
}

const ButtonStyles = {
  width: "100%",
  borderRadius: '30px',
  padding: "11px 30px",
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '24px',
  color: "var(--text-white)",
  border: "none",
  backgroundColor: 'var(--second)'
}

const Block = () => {
  const dispatch = useDispatch()
  const pageNum = useSelector(state => state.blockState.page)
  const [isModal, setModal] = useState(false)
  const [progressBar, setProgressBar] = useState(30)
  const [step, setStep] = useState(1)

  const handleStep = (val) => {
    setStep(step + 1)
    setProgressBar(progressBar + val)
  }

  const handleModal = () => {
    setModal(true)
  }

  const handleModalClose = useCallback(
    () => {
      setModal(false)

    }, []
  )

  const previousPage = () => {
    if (pageNum > 1) {

      dispatch(
        setPage(pageNum - 1)
      )
    } else if (pageNum <= 1) {
      dispatch(
        setPage(1)
      )
    }
  }
  const nextPage = () => {
    if (pageNum < 3) {

      dispatch(
        setPage(pageNum + 1)
      )
    } else if (pageNum >= 3) {
      dispatch(
        setPage(3)
      )
    }
  }
  return (
    <>
      <div className='block-wrapper'>
        <Header />
        <div className='block-body'>
          {
            pageNum === 1 && < BlockID />
          }
          {
            pageNum === 2 && < BlockScore />
          }
          {
            pageNum === 3 && <BlockIQ />
          }
        </div>
        <BasicModal
          isModal={isModal}
          style={modalStyles}
          handleClose={handleModalClose}
        >
          <div className='account-add-container'>
            <div className="step-title">Step 1</div>
            <div className="progress-bar">
              <ProgressBar
                percent={progressBar}
                filledBackground="var(--second)"
              />
            </div>
            {
              step === 1 &&
              <>
                <Input
                  placeholder={'Search'}
                  wrapperStyle={wrapperStyles}
                  inputStyle={inputStyles}
                >
                  <img src={SearchIcon} alt='search-icon' />
                </Input>
                <div className="coin-list">
                  <img className="robinhood-icon" src={RobinHoodIcon} alt='robinhood-icon' />
                  <img className="coin-icon" src={CoinIcon} alt="coin-icon" />
                  <img className="gusd-icon" src={GusdIcon} alt='gusd-icon' />
                  <img className="binance-icon" src={BinanceIcon} alt='binance-icon' />
                </div>
                <CustomButton
                  title={"Next"}
                  style={ButtonStyles}
                  onClick={() => handleStep(40)}
                />
              </>
            }
            {
              step === 2 &&
              <>
                <div className="account-credentials-title">Please confirm your account credentials</div>
                <div className="user-info-input-box">
                  <div className="label login">Login</div>
                  <Input
                    type='email'
                    value={""}
                    placeholder={"email@gmail.com"}
                    wrapperStyle={{ ...wrapperStyles, marginTop: "15px" }}
                    inputStyle={inputStyles}
                  />
                  <div className="label pt-30">Password</div>
                  <Input
                    type='password'
                    value={""}
                    placeholder={"password"}
                    wrapperStyle={{ ...wrapperStyles, marginTop: "15px" }}
                    inputStyle={inputStyles}
                  />
                </div>
                <CustomButton
                  title={"Connect"}
                  style={ButtonStyles}
                  onClick={() => handleStep(20)}
                />
              </>
            }
            {
              step === 3 &&
              <>
                <div className="account-connected">Account connected</div>
                <CustomButton
                  title={"Close"}
                  style={ButtonStyles}
                  onClick={() => { setModal(false) }}
                />
              </>
            }
          </div>
        </BasicModal >
        <NavBar
          previousPage={previousPage}
          nextPage={nextPage}
          handleModal={handleModal}
        />
      </div>
    </>
  );
}

export default Block