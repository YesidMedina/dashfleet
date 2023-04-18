import { Link } from "react-router-dom";

export const NotFoundHome = () => {
  return (
    <>
      <div className="px-4 py-2 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Parece que estas un poco perdido, pero tranquilo, te
                  ayudaremos a encontrar el camino.
                </h1>
                <p className="my-2 text-gray-800"></p>
                <Link
                  to="/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
                    text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
                    focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Volver a la bùsqueda
                </Link>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </>
  );
};
