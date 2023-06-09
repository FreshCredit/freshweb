import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../../components/input'
import { setBankInfo } from '../../../store/action/bankAction'
import { IconButton, CustomButton } from '../../../components/button'
import ArrowRightIcon from '../../../assets/icon/arrow-right.png'
import ChipImg from '../../../assets/img/Chip.png'

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

const inputStyles = {
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

const wrapperStyles = {
  width: "50%",
}

const BankVerify = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const personInfo = useSelector(state => state.bankState)
  const [cardName, setCardName] = useState("JANE DOE")
  const [birthday, setBirthday] = useState("05/24")
  const [cardNumber, setCardNumber] = useState("")
  const handleBankInfo = (e) => {
    const { value, name } = e
    let payload = {
      keyName: name,
      value: value
    }
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
    }
    dispatch(
      setBankInfo(payload)
    )
  }
  return (
    <>
      <div className="verify_container">
        <div className='verify-text'>Verify with your bank or debit card</div>
        <div className='verify-card w-full'>
          <div className='flex items-center'>
            <Input
              type="text"
              name="name"
              value={cardName}
              wrapperStyle={wrapperStyles}
              inputStyle={inputStyles}
              handleChange={handleBankInfo}
            />
            <Input
              type="text"
              name="birthday"
              value={birthday}
              inputStyle={inputStyles}
              wrapperStyle={wrapperStyles}
              handleChange={handleBankInfo}
            />
          </div>
          <Input
            type="text"
            name="cardNumber"
            value={cardNumber}
            inputStyle={inputStyles}
            wrapperStyle={{ ...wrapperStyles, borderBottom: "2px solid var(--bg-color)", marginTop: "37px" }}
            handleChange={handleBankInfo}
          />
          <img className='chip-style' src={ChipImg} alt="chip-img" />
        </div>
        <div className='flex absolute bottom gap-30'>
          <CustomButton
            title={"Use Bank"}
            style={ButtonStyles}
          />
          <IconButton
            title={"Next"}
            style={IconButtonStyles}
          >
            <img src={ArrowRightIcon} alt="arrow-right" />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default BankVerify