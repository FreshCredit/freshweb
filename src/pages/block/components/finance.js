import ArrowUpIcon from '../../../assets/icon/arrow-up.png'
import ArrowDownIcon from '../../../assets/icon/arrow-down.png'


const Finance = (props) => {
  const { title, amount, state } = props
  return (
    <>
      <div className={state ? "incoming-finance-container" : "outgoing-finance-container"}>
        <img className='state-icon' src={state ? ArrowDownIcon : ArrowUpIcon} alt='arrow' />
        <div className='finance-title'>{title}</div>
        <div className='finance-amount-title'>{amount}</div>
      </div>
    </>
  );
}

export default Finance