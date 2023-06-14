import './index.css'

const CustomButton = (props) => {
  const { title, style, onClick, visiableState } = props;
  return (
    <>
      {
        visiableState ?
          <button disabled style={style} onClick={onClick}>
            {title}
          </button>
          :
          <button style={style} onClick={onClick}>
            {title}
          </button>
      }
    </>
  );
}

const IconButton = (props) => {
  const { title, style, onClick, children, direction = "right" } = props;
  return (
    <button className='icon-button' style={style} onClick={onClick}>
      {
        direction === "left" && children
      }
      <span>
        {title}
      </span>
      {
        direction === "right" && children
      }
    </button>
  );
}

export { CustomButton, IconButton };