

const Phone = () => {
  return (
    <>
      <div className="phonenumber-input-container">
        <div>What's your email address?</div>
        <Input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          handleChange={handleLoginInfo}
          wrapperStyle={wrappeerStyles}
          inputStyle={inputStyles}
        >
          <img src={PhoneIcon} alt="phone-icon" />
        </Input>
      </div>
    </>
  );
}