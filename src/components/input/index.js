import './index.css'


const Input = (props) => {
  const { children, type, name, value, handleChange, wrapperStyle, inputStyle } = props
  return (
    <>
      <div style={wrapperStyle}>
        {children}
        <input
          style={inputStyle}
          type={type}
          name={name}
          placeholder=""
          value={value}
          onChange={(e) => handleChange(e.target)}
        />
      </div>
    </>
  );
}

export default Input;