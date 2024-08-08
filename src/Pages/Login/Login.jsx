import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const {singIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in tha login page', location)
    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        singIn(email, password)
        .then(result =>{
          console.log(result.user);
          navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
          console.error(error)
        })
    }

    return (
        <div className="mt-5">
            <Helmet>
                <title>
                    Login
                </title>
            </Helmet>
      <Navbar></Navbar>
     <div>
     <h2 className="text-3xl text-center">Please login </h2>
      <form onSubmit={handleLogin} className="md:3/4 lg:1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="Email"
            name="email"
            required
            placeholder="Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="input input-bordered"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mt-3">Do not have an account <Link className="text-blue-500" to="/register">Register</Link></p>
     </div>
    </div>
    );
};

export default Login;