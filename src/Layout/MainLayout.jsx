import Navbar from "../Components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">

      {/* Base */}
      <div className="absolute inset-0 bg-[#0B0F19] z-0" />

      {/* Glow orbs — scattered to blend across entire page */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[5%]   left-[20%]  w-[600px] h-[600px] bg-blue-600/30   rounded-full blur-[80px]" />
        <div className="absolute top-[10%]  right-[15%] w-[500px] h-[500px] bg-purple-600/25  rounded-full blur-[80px]" />
        <div className="absolute top-[30%] left-[-5%]  w-[400px] h-[400px] bg-purple-500/20  rounded-full blur-[70px]" />
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-blue-500/20    rounded-full blur-[80px]" />
        <div className="absolute top-[60%] left-[25%]  w-[600px] h-[600px] bg-blue-600/20    rounded-full blur-[90px]" />
        <div className="absolute top-[70%] right-[-5%] w-[450px] h-[450px] bg-purple-600/25  rounded-full blur-[80px]" />
        <div className="absolute top-[85%] left-[5%]   w-[400px] h-[400px] bg-blue-500/20    rounded-full blur-[70px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          {children}
        </main>
      </div>

    </div>
  );
};

export default MainLayout;