const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Reestablece tu password{' '}
        <span className="text-slate-700">y no pierdas tus proyectos</span>{' '}
      </h1>

      <form className="my-10 bg-white shadow-rounded-lg px-10 p-10">
        <div className="my-5">
          <label
            htmlFor="nuevo-password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Nuevo Password
          </label>
          <input
            type="password"
            name=""
            id="nuevo-password"
            placeholder="Escribe tu nuevo password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value="Guardar nuevo password"
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 trasition-colors mb-5"
        />
      </form>
    </>
  );
};

export default NuevoPassword;
