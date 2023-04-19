import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const SearchHome = () => {
  const navigate = useNavigate();

  const getOrderDetail = async (orderCode: any, numberDocument: any) => {
    const clients = await axios.get("dashfleet-production.up.railway.app/api/clients");

    const user = clients.data.map((client: any) => {
      const userExist = client.document === numberDocument;
      const orderExist = client.orders.find(
        (order: any) => order.ordercode === orderCode
      );
      if (userExist && orderExist) {
        navigate(`/detail/${client.id}/${orderExist.id}`);
        toast.success("Bienvenido");
      } 
    });     
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((values) => {
    getOrderDetail( values.ordercode, values.document );
  });

  return (
    <>
      <div className=" mt-12 h-screen w-full">
        <div className="bg-white flex flex-col justify-center">
          <form
            onSubmit={ onSubmit }
            className="max-w-[500px] w-full mx-auto bg-gray-300 p-8 px-8
            rounded-3xl shadow-xl shadow-blue-500/50"
          >
            <h2 className="text-2xl text-gray-600 text-center">Buscar</h2>
            <div className="flex flex-col text-grey-800 py-2">
              <label> Còdigo pedido </label>
              <input
                className="rounded-md mt-2 p-2 focus:bg-gray-300
                focus:outline.none text-black"
                type="text"
                {...register("ordercode", { required: true })}
              />
            </div>
            <div className="flex flex-col text-grey-800  py-2">
              <label> Tipo documento </label>

              <select
                className="rounded-md mt-2 p-2 focus:bg-gray-300
              focus:outline.none text-black placeholder-gray-800 border"
                {...register("typedocument", { required: true })}
              >
                <option className=""> </option>
                <option>Cedula</option>
                <option>Pasaporte</option>
                <option>Cedula extranjeria</option>
                <option>PPT</option>
              </select>
            </div>
            <div className="flex flex-col text-grey-800  py-2">
              <label> Documento </label>

              <input
                className="rounded-md mt-2 p-2 focus:bg-gray-300 
              focus:outline.none text-black"
                {...register("document", { required: true } ) } 
              />
            </div>
            <div className="text-center p-2">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600
                dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {" "}
                Consultar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
