import PieChart from '../components/pieChart';
import Report from '../components/report';
import StepBar from '../components/stepBar'

const reportData = [
  {
    title: "Recently Verified",
    content: "Telecom.",
    pts: "+ 8pts",
    date: " 1 May, 2023 2:45 PM",
    state: "increase"
  },
  {
    title: "Recently Verified",
    content: "Telecom.",
    pts: "+ 8pts",
    date: " 1 May, 2023 2:45 PM",
    state: "increase"
  },
  {
    title: "Recently Verified",
    content: "Telecom.",
    pts: "- 8pts",
    date: " 1 May, 2023 2:45 PM",
    state: "decrease"
  },
  {
    title: "Recently Verified",
    content: "Telecom.",
    pts: "- 8pts",
    date: " 1 May, 2023 2:45 PM",
    state: "decrease"
  },
  {
    title: "Recently Verified",
    content: "Telecom.",
    pts: "+ 8pts",
    date: " 1 May, 2023 2:45 PM",
    state: "increase"
  }
]

const BlockID = () => {
  return (
    <>
      <div className='block-container'>
        <div className='block-container-header'>
          <div className='left'>
            <div className='block-page-name'>
              <div>BlockID®</div>
            </div>
            <div className='block-report-title'>Report</div>
          </div>
          <div className='right'>
            <StepBar />
          </div>
        </div>
        <div className='pie-chat'>
          <PieChart />
        </div>
        <div className='report-list'>
          <div className='row pb-30'>
            <div className='recently-verified-title'>Recently Verified</div>
            <div className='see-title'>See all</div>
          </div>
          <div className='list'>
            {
              reportData.map((item, index) => (
                <Report
                  key={index}
                  title={item.title}
                  content={item.content}
                  pts={item.pts}
                  date={item.date}
                  state={item.state}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
export default BlockID