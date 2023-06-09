import '../../styles/login.css'
import { CustomButton } from '../../components/button'
import { useNavigate } from 'react-router-dom'


const ButtonStyles = {
  width: "160px",
  borderRadius: '30px',
  padding: "15px 30px",
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '18px',
  lineHeight: '18px',
  color: "var(--text-white)",
  border: "2px solid var(--second)",
  background: 'var(--second)',
}

const Home = () => {
  const navigator = useNavigate()
  const handleLoginIn = () => {
    navigator("/verify")
  }

  return (
    <>
      <div className="login_container">
        <div style={{ height: "calc(100vh - 250px)" }}>
          <div className="title">FreshCredit</div>
          <div className='text'>
            This code is for you and only you to use to log in to FreshCredit To prevent fraud on your account, never share it anywhere or for any reason with anyone, including people posing as FreshCredit.
          </div>
        </div>
        <div className="">
          <div className='flex column justify-center items-center gap-30'>
            <CustomButton
              title={"Login"}
              style={ButtonStyles}
              onClick={handleLoginIn}
            />
            <div className='description'>
              <div>By logging into Fresh Credit you agree to the</div>
              <a className='font-bold' href="">Terms of Service, E-Sign Consent, </a>
              <div>and</div>
              <a className='font-bold' href="">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home