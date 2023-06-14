import { useSelector } from 'react-redux';
import './styles/stepBar.css'

const StepBar = () => {
  const pageStep = useSelector(state => state.blockState.page)
  return (
    <>
      <div className="page-step-bar">
        <span className={pageStep === 1 ? "selected-step-page" : "step-icon"}></span>
        <span className={pageStep === 2 ? "selected-step-page" : "step-icon"}></span>
        <span className={pageStep === 3 ? "selected-step-page" : "step-icon"}></span>
      </div>
    </>
  );
}

export default StepBar