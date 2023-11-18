import Input from "../../components/input/input";
import Avatar from "../Avatar/Avatar";
import { AiFillCamera } from "react-icons/ai";
import "./Profile.css";
import { useRef } from "react";
import { MdVisibilityOff } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { useState } from "react";

const Profile = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };
  const inputFile = useRef(null);
  const handleInput = () => {
    inputFile.current.click();
  };
  return (
    <div className="profile">
      {/* avatar */}
      <div className="profile_avatar">
        <div className="profile_avatar-wrapper" onClick={handleInput}>
          <Avatar />
          <AiFillCamera />
        </div>
        <input
          className="profile_avatar-input"
          type="file"
          name="avatar"
          ref={inputFile}
        />
      </div>
      {/* form */}
      <form className="profile_input">
        <div className="profile_input-form">
          <Input type="text" text="Name" />
          <Input type="text" text="Email" />
          <Input
            type={visible? 'text' : 'password'}
            text="Password"
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            handleClick={handleClick}
          />
          <Input
            type={visible? 'text' : 'password'}
            text="Confirm Password"
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            handleClick={handleClick}
          />
          <div className="login_btn">
            <button>update</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
