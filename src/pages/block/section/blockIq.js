import Payment from "../components/payment";
import BlockIQSwiper from "../components/swiper";
import StepBar from "../components/stepBar";
import VisaImg from '../../../assets/img/visa.png'
import CirImg from '../../../assets/img/cir.png'

const visaData = {
  checked: false,
  img: VisaImg,
  number: "**** **** **** 3947",
  counter: 3000,
  apply: 'Apply',
  name: "Jane Doe",
  date: "Expires 05/22"
}

const cirData = {
  checked: true,
  img: CirImg,
  number: "**** **** **** 8162",
  counter: 5000,
  apply: 'Accept',
  name: "Jane Doe",
  date: "Expires 05/22"
}

const BlockIQ = () => {
  return (
    <>
      <div className='block-container'>
        <div className='block-container-header'>
          <div className='left'>
            <div className='block-page-name'>
              <div>BlockIQ®</div>
            </div>
            <div className='block-report-title'>Market place</div>
          </div>
          <div className='right'>
            <StepBar />
          </div>
        </div>
        <BlockIQSwiper />
        <div className="flex row justify-space-between">
          <Payment
            checked={visaData.checked}
            img={visaData.img}
            number={visaData.number}
            counter={visaData.counter}
            apply={visaData.apply}
            name={visaData.name}
            date={visaData.date}
          />
          <Payment
            checked={cirData.checked}
            img={cirData.img}
            number={cirData.number}
            counter={cirData.counter}
            apply={cirData.apply}
            name={cirData.name}
            date={cirData.date}
          />
        </div>
      </div>
    </>
  );
}

export default BlockIQ