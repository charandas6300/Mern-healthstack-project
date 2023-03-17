import "./Adminlogin.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { hostURL } from "../../URL";      

function Adminlogin() {
  const history = useHistory();
  const [admin, setAdmin] = useState({
    password: "",
  });


  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.get(`${hostURL}/admin`);
    if (admin.password !== res.data[0].password) {
      console.log("Unmatched")
      alert("Please enter valid key");
    } else {
      localStorage.setItem("admin", JSON.stringify({ admin: admin.password }));
      if (localStorage.getItem("admin") !== null) {
        history.push("/home");
      }
    }
  };

  return (
    <div className="loginhead">
      <div className="hgh">
        <div className="typingdemo">
          <p className="title">HELLO ADMIN</p>
        </div>
        <form className="Adlog" onSubmit={submitHandler}>
          <input
            type="password"
            placeholder="Enter your encrypted key"
            value={admin.password}
            onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
            style={{ height: "20px" }}
          />
          <input type={"submit"} style={{ backgroundColor: "white" }} />
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;
