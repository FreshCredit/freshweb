import CheckedIcon from '../../../assets/icon/check.png'
import UncheckedIcon from '../../../assets/icon/check-circle.png'
import './styles/pay.css'

const Payment = (props) => {
  const { checked, img, number, counter, apply, name, date } = props
  return (
    <>
      <div className="pay-container">
        <img
          className='check-icon'
          src={
            checked ? CheckedIcon : UncheckedIcon
          }
          alt='check-icon'
        />
        <img className='img' src={img} alt='pay-img' />
        <div className='number'>{number}</div>
        <div className='counter'>+{counter}</div>
        <div className='apply'>{apply}</div>
        <div className='name'>{name}</div>
        <div className='date'>{date}</div>
      </div>
    </>
  );
}

export default Payment