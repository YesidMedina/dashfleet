import { Link } from "react-router-dom";

export const CloseHome = () => {
  return (
    <>
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Gracias por su visita
        </h5>

        <p className="mb-6 font-normal text-gray-700 dark:text-gray-400">
          Si desea volver a filtrar informaciòn puede darle clic al botòn
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
           text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
           focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Volver a la bùsqueda
        </Link>
      </div>
    </>
  );
};
