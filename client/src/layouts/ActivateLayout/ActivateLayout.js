import "./activatelayout.css";
import { useNavigate } from "react-router-dom";

const ActivateLayout = () => {
  const history = useNavigate()
  const handleClick = () => {
    history("/");
  };

  return (
    <div className="activate">
      <p>
        Ready to login? 👉 <span onClick={handleClick}>Here</span>
      </p>
    </div>
  );
};

export default ActivateLayout;
