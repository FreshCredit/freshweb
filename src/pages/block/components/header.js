import { useState, useCallback } from 'react'
import BasicModal from '../../../components/modal'
import Avatar from '../../../assets/icon/avatar.png'
import CheckIcon from '../../../assets/icon/check.png'
import RingIcon from '../../../assets/icon/ring.png'
import TMobileImg from '../../../assets/img/t-mobile.png'
import MoreHorizontalIcon from '../../../assets/icon/more-horizontal.png'
import QrCodeIcon from '../../../assets/icon/barcode-qr.png'
import SendIcon from '../../../assets/icon/send.png'
import './styles/notification.css'

const modalStyles = {
  position: 'fixed',
  top: '90px',
  width: '100%',
  boxShadow: '24',
  padding: '10px',
  left: '0px'
}

const Header = () => {
  const [isNotification, setNotification] = useState(false)
  const [isAuth, setAuth] = useState(false)

  const handleNotification = () => {
    setNotification(true)
  }
  const handleClose = useCallback(() => {
    setNotification(false)
  }, [])

  return (
    <>
      <div className="block-id-header">
        <div className="row">
          <div className="left">
            <img className="block-avatar" src={Avatar} alt='avatar' />
            <div className="person-info">
              <div className="name-row">
                <div className="name-title">Jane Doe</div>
                <img src={CheckIcon} alt="check-icon" />
              </div>
              <div className="block-id-title">BlockID.12341AX1</div>
            </div>
          </div>
          <div className="right">
            <div className='block-notification' onClick={handleNotification}>
              <div className='counter'>1</div>
              <img src={RingIcon} alt='ring-icon' />
            </div>
            <BasicModal
              isModal={isNotification}
              handleClose={handleClose}
              style={modalStyles}
            >
              <div className='notification-container'>
                <div className='notification-title'>Notification</div>
                <div className='t-mobile-wrapper'>
                  <div className='t-mobile-promo'>
                    <img src={TMobileImg} alt="t-mobile" />
                    <div className='t-mobile-section-2'>
                      <div className='t-mobile-title'>T-MOBILE PROMO</div>
                      <div className='t-mobile-qualify-title'>Qualify with 70+ Blockscore</div>
                      <div className='t-mobile-date-title'>Expires June 2024</div>
                    </div>
                    <img src={MoreHorizontalIcon} alt='more-horizontal' />
                  </div>
                </div>
                {
                  !isAuth ?
                    <div className='t-mobile-description'>
                      T-Mobile is requesting your
                      <span className='second-color'> Blockscore </span>
                      , to qualify you must authorize this request.
                    </div>
                    :
                    <div className='t-mobile-description'>
                      Your
                      <span className='second-color'>BlockScore</span>
                      has been sent. Pending approval
                    </div>
                }

                <div className='horizontal-line'></div>
                <div className='t-mobile-auth'>
                  <img src={QrCodeIcon} alt='qr-code-img' />
                  {
                    !isAuth ?
                      <div className='t-mobile-auth-title'>Share Blockscore</div>
                      :
                      <div className='t-mobile-auth-title'>Sent!</div>
                  }

                  <img src={SendIcon} alt='send-icon' onClick={() => setAuth(!isAuth)} />
                </div>
              </div>
            </BasicModal>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header