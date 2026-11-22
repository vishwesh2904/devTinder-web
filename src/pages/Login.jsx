const Login = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="card bg-base-100 shadow-xl w-96">
        <div className="card-body">
          <h2 className="card-title">Login to devTinder</h2>

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
          />

          <button className="btn btn-primary mt-3">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;