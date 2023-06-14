import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../../components/input'
import { setBankInfo, setBankType } from '../../../store/action/bankAction'
import { IconButton, CustomButton } from '../../../components/button'
import ArrowRightIcon from '../../../assets/icon/arrow-right.png'
import ChipImg from '../../../assets/img/Chip.png'
import LockIcon from '../../../assets/icon/lock.png'

const ButtonStyles = {
  width: "160px",
  borderRadius: '30px',
  padding: "15px 30px",
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '16px',
  color: "var(--text-primary)",
  border: "none",
  background: "#E7E7FF"
}

const IconButtonStyles = {
  width: "160px",
  background: "#6269F1",
  borderRadius: '30px',
  padding: "15px 30px",
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '16px',
  color: "var(--text-white)",
  border: "2px solid var(--text-blue)"
}

const cardInputStyles = {
  border: 'none',
  outline: 'none',
  fontFamily: 'Poppins',
  fontStyle: 'Medium',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '16px',
  background: 'transparent',
  color: 'var(--text-white)'
}

const bankInputStyles = {
  border: '1px solid #E3E5E5',
  outline: 'none',
  borderRadius: '10px',
  fontFamily: 'Poppins',
  fontStyle: 'Medium',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '16px',
  background: 'transparent',
  color: 'var(--text-primary)',
  padding: '12px',
  width: '100%'
}

const cardWrapperStyles = {
  width: "50%",
}
const bankWrapperStyles = {
}

const encryptionStyles = {
  background: 'transparent',
  border: 'none',
  fontFamily: 'Poppins',
  color: 'var(--text-gray)',
  fontSize: '14px',
  fontFamily: 'Medium',
  lineHeight: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  paddingTop: '55px',
  width: '320px',
  justifyContent: 'center',
  margin: 'auto 0'
}

const BankVerify = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const personInfo = useSelector(state => state.bankState)
  const [cardName, setCardName] = useState("JANE DOE")
  const [birthday, setBirthday] = useState("05/24")
  const [cardNumber, setCardNumber] = useState("")
  const [bankNumber, setBankNumber] = useState("")
  const [routing, setRouting] = useState("")
  const handleBankInfo = (e) => {
    const { value, name } = e
    let payload = {
      keyName: name,
      value: value
    }
    console.log("payload", payload)
    switch (name) {
      case "name":
        setCardName(value)
        break
      case "birthday":
        setBirthday(value)
        break
      case "cardNumber":
        setCardNumber(value)
        break
      case "bankNumber":
        setBankNumber(value)
        break
      case "routing":
        setRouting(value)
        break
    }
    dispatch(
      setBankInfo(payload)
    )
  }

  const handleBankType = () => {
    dispatch(
      setBankType(!personInfo.bankType)
    )
  }

  const handleNext = () => {
    navigator("/verify/connect")
  }
  return (
    <>
      <div className="verify_container">
        <div className='verify-text'>Verify with your bank or debit card</div>
        {
          personInfo.bankType ?
            <div className='verify-card w-full'>
              <div className='flex items-center'>
                <Input
                  type="text"
                  name="name"
                  value={cardName}
                  wrapperStyle={cardWrapperStyles}
                  inputStyle={cardInputStyles}
                  handleChange={handleBankInfo}
                />
                <Input
                  type="text"
                  name="birthday"
                  value={birthday}
                  inputStyle={cardInputStyles}
                  wrapperStyle={cardWrapperStyles}
                  handleChange={handleBankInfo}
                />
              </div>
              <Input
                type="text"
                name="cardNumber"
                value={cardNumber}
                inputStyle={cardInputStyles}
                wrapperStyle={{ ...cardWrapperStyles, borderBottom: "2px solid var(--bg-color)", marginTop: "37px" }}
                handleChange={handleBankInfo}
              />
              <img className='chip-style' src={ChipImg} alt="chip-img" />
            </div>
            :
            <div className='pt-30'>
              <div className='title'>Checking</div>
              <Input
                type="text"
                name="bankNumber"
                value={bankNumber}
                wrapperStyle={bankWrapperStyles}
                inputStyle={bankInputStyles}
                handleChange={handleBankInfo}
              />
              <div className='title'>Routing</div>
              <Input
                type="text"
                name="routing"
                value={routing}
                wrapperStyle={bankWrapperStyles}
                inputStyle={bankInputStyles}
                handleChange={handleBankInfo}
              />
            </div>
        }
        <IconButton
          title='Secured with 256-bt encryption'
          style={encryptionStyles}
          direction="left"
        >
          <img src={LockIcon} alt='lock' />
        </IconButton>
        <div className='flex absolute bottom gap-30'>
          {
            personInfo.bankType ? <CustomButton title={"Use Bank"} style={ButtonStyles} onClick={handleBankType} />
              : <CustomButton title={"Use Card"} style={ButtonStyles} onClick={handleBankType} />
          }
          <IconButton
            title={"Next"}
            style={IconButtonStyles}
            onClick={handleNext}

          >
            <img src={ArrowRightIcon} alt="arrow-right" />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default BankVerify