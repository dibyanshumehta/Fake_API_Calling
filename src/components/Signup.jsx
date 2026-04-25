import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [userErr, setUserErr] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };


  const handleSubmit = (e) =>{
    e.preventDefault();
    if (username === ""){
      setUserErr("Please Enter Username");
    }
    if(phone === ""){
      setPhoneErr("Please Enter Phone Number");
    }
    if(email === ""){
      setEmailErr("Please Enter Email");
    }
    if(password === ""){
      setPasswordErr("Please Enter Password");
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-6 bg-dark text-white text-center">
            <h1>Registration Form</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Username
                  </label>
                  <input
                    value={username}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Username"
                    onChange={handleUsername}
                  />
                  <p className="text-danger">{userErr}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea2" className="form-label">
                    Phone Number
                  </label>
                  <input
                    value={phone}
                    type="text"
                    className="form-control"
                    id="exampleFormControlTextarea2"
                    placeholder="Enter phone number"
                    onChange={handlePhone}
                  />
                  <p className="text-danger">{phoneErr}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea3" className="form-label">
                    Email
                  </label>
                  <input
                    value={email}
                    type="email"
                    className="form-control"
                    id="exampleFormControlTextarea3"
                    placeholder="Enter email"
                    onChange={handleEmail}
                  />
                  <p className="text-danger">{emailErr}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea4" className="form-label">
                    Password
                  </label>
                  <input
                    value={password}
                    type="password"
                    className="form-control"
                    id="exampleFormControlTextarea4"
                    placeholder="Enter password"
                    onChange={handlePassword}
                  />
                  <p className="text-danger">{passwordErr}</p>
                </div>
                <button className="btn btn-success w-100" type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
