import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleEntrar = () => {
    navigate("/login");
  };

  const handleRegistro = () => {
    navigate("/signup");
  };

  return (
    <div>
      <nav className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out">
        <div className="flex justify-between p-4">
          <div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-black dark:text-white">
            Logo
          </div>
          <div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">
            <button
              onClick={handleEntrar}
              className="px-6 py-2 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              Entrar
            </button>
            <button
              onClick={handleRegistro}
              className="px-6 py-2 text-white transition duration-500 ease-out bg-indigo-500 rounded-lg hover:bg-blue-800 hover:ease-in hover:underline"
            >
              Registro
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
