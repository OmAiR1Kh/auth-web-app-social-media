import "./avatar.css";
import happyPeople from "../../img/happy-people.png";

const Avatar = () => {
  return (
    <div className="avatar">
      <img src={happyPeople} alt="avatar" />
    </div>
  );
};

export default Avatar;
