import { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import "./style.css";

const Password = (props) => {
  const [seePassword, setSeePassword] = useState(true);

  const onClickSeePassword = (nextSeePassword) => () => setSeePassword(nextSeePassword)

  return (
    <div className="mini-container">
      <span>{props?.label}</span>{" "}
      <div>
        <input
          type={seePassword ? "password": "text"}
          onChange={props.onChange}
          value={props?.value}
          className="btn-register"
        />
        {seePassword ? 
          <button onClick={onClickSeePassword} className="eyes-read-password">
            <BsEyeFill />
          </button>: (
            <button onClick={onClickSeePassword} className="eyes-read-password">
            <BsEyeSlash />
          </button>
        )}
      </div>
    </div>
  )
}

export default Password