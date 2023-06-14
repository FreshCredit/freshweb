import './styles/report.css'

const Report = (props) => {
  const { title, content, pts, state, date } = props
  return (
    <>
      <div className="report">
        <div className="row">
          <div className="title">{title}</div>
          <div
            className={state === "increase" ? "increase-pts" : "decrease-pts"}
          >{pts}</div>
        </div>
        <div className="row">
          <div className="content">{content}</div>
          <div className="date">{date}</div>
        </div>
      </div>
    </>
  );
}

export default Report