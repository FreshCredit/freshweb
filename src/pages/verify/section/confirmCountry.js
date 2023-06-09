import { useRef, useState } from 'react';
import useElementSize from '../../../hooks/useElementSize'
import Confiriming from '../../../assets/img/confirming.png'
import Confirmed from '../../../assets/img/confirmed.png'
import Confirming from '../../../assets/img/confirming.png'
import ConfirmIcon from '../../../assets/icon/confirm.png'
import { CustomButton } from '../../../components/button'
import { useNavigate } from 'react-router-dom';

const ButtonStyles = {
  width: "100%",
  // maxWidth: "320px",
  margin: 'auto 0',
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

const ConfirmCountry = () => {
  const navigator = useNavigate()
  const ref = useRef(null)
  const { width, height } = useElementSize(ref)
  const [isConfirm, setConfirm] = useState(false)

  const handleConfirm = () => {
    setConfirm(true)
  }

  const handleNext = () => {
    navigator('/verify/bank')
  }
  return (
    <>
      <div className="verify_container">
        <div style={{ height: "calc(100vh - 100px)" }}>
          {
            isConfirm &&
            <div className='flex justify-center items-center gap-16 pt-30 pb-30'>
              <img src={ConfirmIcon} alt='confirm-icon' />
              <div className='confirmed-title'>Confirm your Country</div>
            </div>
          }
          <img ref={ref} className='confirm-img' src={isConfirm ? Confirmed : Confirming} alt="confirming" />
          {
            !isConfirm &&
            <div className='confirm-title'>Confirm your Country</div>
          }
        </div>
        {
          !isConfirm ?
            <CustomButton
              title="United States"
              style={ButtonStyles}
              onClick={handleConfirm}
            />
            :
            <CustomButton
              title="Next"
              style={ButtonStyles}
              onClick={handleNext}
            />
        }
      </div >
    </>
  );
}

export default ConfirmCountry