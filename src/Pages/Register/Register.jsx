import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);


    const handleRegister = (e) =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photo, email, password);
        createUser(email, password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error =>{
          console.error(error);
        })
    }

    return (
        <div>
            <Helmet>
                <title>
                Register
                </title>
            </Helmet>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl text-center">Please Register </h2>
        <form onSubmit={handleRegister} className="md:3/4 lg:1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              required
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mt-3">
          Already have an account
          <Link className="text-blue-500 ml-3" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Register;