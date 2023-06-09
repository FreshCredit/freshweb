import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../components/input'
import PhoneIcon from '../../assets/icon/phone.png'
import EmailIcon from '../../assets/icon/email.png'
import ArrowRightIcon from '../../assets/icon/arrow-right.png'
import { IconButton, CustomButton } from '../../components/button'
import { setInputType, setLoginInfo } from '../../store/action/loginAction'
import '../../styles/home.css'
import { useState } from 'react'

const ButtonStyles = {
  width: "160px",
  borderRadius: '30px',
  padding: "15px 30px",
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '16px',
  color: "var(--text-blue)",
  border: "2px solid var(--text-blue)"
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

const wrapperStyles = {
  marginTop: '12px',
  border: '1px solid #E3E5E5',
  borderRadius: '8px',
  padding: '14px',
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

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const inputType = useSelector(state => state.loginState.inputType)
  const loginInfo = useSelector(state => state.loginState)
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLoginInfo = (e) => {
    const { value, name } = e
    console.log("value", value)
    console.log("name", name)
    let payload = {
      keyName: name,
      value: value
    }
    dispatch(
      setLoginInfo(payload)
    )
    if (name === "phoneNumber") setPhoneNumber(value)
    else setEmail(value)
  }

  const handleInputType = () => {
    dispatch(
      setInputType(!inputType)
    )
  }

  const handleNext = () => {
    navigator("/login")
  }

  return (
    <>
      <div className="home_container">
        <div className="title">FreshCredit</div>
        <div className='text'>Get started by entering your phone number</div>
        {
          inputType ?
            <Input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              handleChange={handleLoginInfo}
              wrapperStyle={wrapperStyles}
              inputStyle={inputStyles}
            >
              <img src={PhoneIcon} alt="phone-icon" />
            </Input>
            :
            <Input
              type="email"
              value={email}
              name="email"
              handleChange={handleLoginInfo}
              wrapperStyle={wrapperStyles}
              inputStyle={inputStyles}
            >
              <img src={EmailIcon} alt="email-icon" />
            </Input>
        }
        <div className='flex absolute bottom gap-30'>
          <CustomButton
            title={!inputType ? "Use Phone" : "Use Email"}
            style={ButtonStyles}
            onClick={handleInputType}
          />
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

export default Home