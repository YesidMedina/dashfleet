import Logo from "../../assets/logo.png";

export const Navbar = () => {
 

  return (
    <>
      <nav className="bg-yellow-100 bg-gradient-to-r from-gray-300 p-2 w-full">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <img
              src={ Logo }
              className="h-6 mr-3 sm:h-10"
              alt="Flowbite Logo"
            />
            <span className="self-center text-x font-semibold whitespace-nowrap text-gray-500">
              EXPERIENCIA Y SEGURIDAD
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
