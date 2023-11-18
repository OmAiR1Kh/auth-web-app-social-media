import Input from "../input/input";

const Forgot = () => {
  return (
    <form>
      <Input type="text" text="Email" />
      <div className="login_btn">
        <button>Send Email</button>
      </div>
    </form>
  );
};

export default Forgot;
