import { Outlet, useLocation } from "react-router-dom";
import Principal from "./Sections/Principal";

const Home = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";
  return (
    <div className="absolute w-screen h-auto lg:h-screen ">
      <video
        className="fixed top-0 left-0 w-screen h-screen lg:h-auto object-cover "
        autoPlay
        loop
        muted
      >
        <source src="/new-video-home.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 space-y-10 flex flex-col lg:h-auto justify-center items-center p-10">
        <div className="flex flex-col justify-center items-center text-center space-y-10">
          <h1 className="font-normal text-4xl text-white">Desafio</h1>
          <img
            src="/modal-logo.png"
            alt="Logo ModalGR"
            className="h-auto w-1/2 center"
          />
        </div>

        {isRootPath && <Principal />}
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
