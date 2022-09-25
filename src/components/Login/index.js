import { Link } from "react-router-dom";
import cover from "../../assets/cover-login.png";

import FormLogin from "./FormLogin";
import ErrorLoginCard from "./ErrorLoginCard";

const Login = (props) => {
  const { errMsg } = props;

  return (
    <>
      <div>
        <div>
          <img src={cover} alt="cover-login" />
        </div>
        <div>
          <div>
            <div>
              <Link to="/">
                <h3>BCR LOGO</h3>
              </Link>
            </div>
            <h2>Welcome Admin BCR!</h2>
            {errMsg && <ErrorLoginCard />}
            <FormLogin {...props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
