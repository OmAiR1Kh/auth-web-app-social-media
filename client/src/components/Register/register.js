import Input from "../input/input";
import { useState } from "react";
import { MdVisibilityOff } from "react-icons/md";
import { MdVisibility } from "react-icons/md";

const Register = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <form>
      <Input type="text" text="Name" />
      <Input type="text" text="Email" />
      <Input
        type={visible ? "text" : "password"}
        icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
        text="Password"
        handleClick={handleClick}
      />
      <Input
        type={visible ? "text" : "password"}
        icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
        text="Confirm Password"
        handleClick={handleClick}
      />
      <div className="login_btn">
        <button>Register</button>
      </div>
    </form>
  );
};

export default Register;
