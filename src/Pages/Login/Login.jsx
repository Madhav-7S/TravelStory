import LoginPhoto from "../../assets/Login Photo.png";
import Google from "../../assets/Google Icon.png";
import "./Login.css";

function Login() {
  return (
    <div className="box">
      <div className="photo">
        <img src={LoginPhoto} alt="" />

        <p className="para-1">Welcome To Travel Story</p>
      </div>
      <div className="login">
        <div className="login-heading">Login</div>
        <form className="form">
          <div className="email">
            <input type="email" placeholder="Email" />
          </div>
          <div className="password">
            <input type="password" placeholder="Password" />
          </div>
          <div className="buttton">
            <button>Login</button>
          </div>
        </form>
        <div className="forget">Forget Password?</div>
        <div className="google">
          <img src={Google} alt="" />
          <div>Continue With Google</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
