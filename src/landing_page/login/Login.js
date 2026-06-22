import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      setAlert({
        show: true,
        type: "warning",
        message: "Please fill in all fields.",
      });
      return;
    }

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        // "http://localhost:3002/login",
        formData, 
        {
          withCredentials: true,
        }
      );

      if (data.success) {
        setAlert({
          show: true,
          type: "success",
          message: data.message,
        });

        setTimeout(() => {
          window.location.href =  process.env.REACT_APP_DASHBOARD_URL;
        }, 1500);
      } else {
        setAlert({
          show: true,
          type: "danger",
          message: data.message,
        });
      }
    } catch (error) {
      console.error(error);

      setAlert({
        show: true,
        type: "danger",
        message:
          error.response?.data?.message || "Unable to connect to the server.",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow mx-auto" style={{ maxWidth: "450px" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Login</h2>

          {alert.show && (
            <div
              className={`alert alert-${alert.type} alert-dismissible fade show`}
              role="alert"
            >
              {alert.message}

              <button
                type="button"
                className="btn-close"
                onClick={() =>
                  setAlert({
                    show: false,
                    type: "",
                    message: "",
                  })
                }
              ></button>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>

              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>

              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-3 mb-0">
            Don't have an account?{" "}
            <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;