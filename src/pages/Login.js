import { useAuth } from "provider/authProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const url = "https://infodemencias.com/wp-json/trabajadores/v1/login";

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const getToken = async () => {
    const config = {
      url: url,
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify(formData),
    };

    await axios(config)
      .then((response) => {
        //console.log(response.data);
        setToken(response.data.token);
      })
      .catch((error) => console.log(error));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    getToken();

    navigate("/", { replace: true });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="relative py-3 sm:max-w-xl mx-auto text-center">
          <span className="text-2xl font-light">Login to your account</span>
          <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
            <div className="h-2 bg-indigo-400 rounded-t-md"></div>
            <div className="py-6 px-8">
              <label className="block font-semibold">
                Username or Email
                <label>
                  <input
                    type="text"
                    placeholder="Email"
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <label className="block mt-3 font-semibold">
                    Password
                    <label>
                      <input
                        type="password"
                        placeholder="Password"
                        className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                      />
                      <div className="flex justify-between items-baseline">
                        <button
                          type="submit"
                          className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg"
                        >
                          Login
                        </button>
                        <a href="#" className="text-sm hover:underline">
                          Forgot password?
                        </a>
                      </div>
                    </label>
                  </label>
                </label>
              </label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
