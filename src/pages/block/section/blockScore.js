import AreaChart from '../components/areaChart';
import Finance from '../components/finance'
import StepBar from '../components/stepBar';

const BlockScore = () => {
  return (
    <>
      <div className='block-container'>
        <div className='block-container-header'>
          <div className='left'>
            <div className='block-page-name'>
              <div>BlockScore®</div>
            </div>
            <div className='block-insights-title'>insights</div>
          </div>
          <div className='right'>
            <StepBar />
          </div>
        </div>
        <div className="flex row justify-space-between pt-30">
          <Finance
            title={"Incoming"}
            amount={"$1210987"}
            state={true}
          />
          <Finance
            title={"Outgoing"}
            amount={"$510987"}
            state={false}
          />
        </div>
        <AreaChart />
      </div>
    </>
  );
}

export default BlockScore