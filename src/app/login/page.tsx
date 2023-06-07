function Login() {
  return (
    <form
      action=""
      className="bg-slate-900 p-2 flex flex-col gap-2 max-w-sm mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md drop-shadow-xl shadow-slate-950"
    >
      <div className="">
        <label className="text-xl font-bold block" htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="block w-full text-black p-1 bg-slate-200/80 hover:bg-slate-50 focus:bg-slate-50 duration-200"
        />
      </div>
      <div className="">
        <label className="text-xl font-bold block" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="block w-full text-black p-1 bg-slate-200/80 hover:bg-slate-50 focus:bg-slate-50 duration-200"
        />
      </div>
      <button className="bg-green-800 hover:bg-green-950 duration-150 mt-2 p-1 text-lg m-1 rounded-lg">
        Log in
      </button>
    </form>
  );
}

export default Login;
