import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./../provider/authProvider";

function Signup() {
  const navigate = useNavigate();

  const { setToken } = useAuth();

  const [error, setError] = useState("");

  const url = "https://infodemencias.com/wp-json/trabajadores/v1/signup";

  const [formData, setFormData] = useState({
    dni: "",
    nombre: "",
    apellido: "",
    usuario: "",
    email: "",
    password: "",
  });

  const register = async () => {
    console.log(formData);

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
        console.log(response.data);
        if (response.data.inserted) {
          setToken(response.data.token);
          navigate("/", { replace: true });
        } else {
          setError("error en la insercion");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    register();
  };

  return (
    <>
      <form onSubmit={handleSignup}>
        <div className="relative py-3 sm:max-w-xl mx-auto text-center">
          <span className="text-2xl font-light">Registro</span>
          <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
            <div className="h-2 bg-indigo-400 rounded-t-md"></div>
            <div className="py-6 px-8">
              <label className="block font-semibold">Dni</label>
              <input
                type="text"
                placeholder="Dni"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                value={formData.dni}
                onChange={(e) =>
                  setFormData({ ...formData, dni: e.target.value })
                }
                required
              />
              <label className="block font-semibold">Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                required
              />
              <label className="block font-semibold">Apellido</label>
              <input
                type="text"
                placeholder="Apellido"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                value={formData.apellido}
                onChange={(e) =>
                  setFormData({ ...formData, apellido: e.target.value })
                }
                required
              />
              <label className="block font-semibold">Usuario</label>
              <input
                type="text"
                placeholder="Usuario"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                value={formData.usuario}
                onChange={(e) =>
                  setFormData({ ...formData, usuario: e.target.value })
                }
                required
              />
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                placeholder="Email"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <label className="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              <div className="flex justify-between items-baseline">
                <button
                  type="submit"
                  className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg"
                >
                  Register
                </button>
                <span className="text-red-700">{error}</span>
                <button
                  onClick={() => {
                    navigate("/", { replace: true });
                  }}
                  type="button"
                  className="text-sm  cursor-pointer"
                >
                  volver?
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
