
import ChevronLeftIcon from '../../../assets/icon/chevron-left.png'
import ChevronRightIcon from '../../../assets/icon/chevron-right.png'
import PlusIcon from '../../../assets/icon/plus.png'
import "react-step-progress-bar/styles.css";
import './styles/navBar.css'


const NavBar = (props) => {
  const { previousPage, nextPage, handleModal } = props

  return (
    <>
      <div className="nav-bar-container">
        <div className="flex row items-center gap-30">
          <img className='chevron-icon' src={ChevronLeftIcon} alt="arrow-left-icon" onClick={previousPage} />
          <img className='chevron-icon' src={ChevronRightIcon} alt="arrow-right-icon" onClick={nextPage} />
        </div>
        <img src={PlusIcon} alt='plus-icon' onClick={handleModal} />
      </div >
    </>
  );
}

export default NavBar