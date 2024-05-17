import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-10 w-screen h-screen">
      <h1 className="text-center">Desafio ModalGR </h1>

      <Outlet />
    </div>
  );
};

export default Home;
