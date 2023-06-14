import { CustomButton } from "../../../components/button";

const connectStyles = {
  background: "#6269F1",
  borderRadius: '30px',
  padding: "15px 30px",
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '16px',
  color: "var(--text-white)",
  border: "2px solid var(--text-blue)",
  width: '100%',
  position: 'static',
  bottom: '100px'
}

const VerifyConnect = () => {
  return (
    <>
      <div className="connect-container">
        <div className="connect-title">Connect</div>
        <div className="connect-type-title">Financial</div>
        <div style={{ height: "calc(100vh - 180px)" }}>
        </div>
        <CustomButton
          title="Connect"
          style={connectStyles}
        />
      </div>
    </>
  );
}

export default VerifyConnect