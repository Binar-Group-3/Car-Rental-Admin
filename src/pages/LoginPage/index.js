import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Login from "../../components/Login";
import { handleLogin } from "../../redux/actions/authAction";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const user = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    dispatch(handleLogin(payload, setErrMsg, navigate));
  };

  const props = {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    errMsg,
  };

  return <div>{<Login {...props} />}</div>;
};

export default LoginPage;
