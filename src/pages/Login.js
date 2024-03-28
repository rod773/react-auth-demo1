import { useAuth } from "provider/authProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setToken("this is a test token");
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogin();
  }, 3 * 1000);

  return <h1>Login Page</h1>;
};

export default Login;
