import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Index() {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginSubmit = () => {
    if (
      loginData?.email === "admin@123westsocial.com" &&
      loginData?.password === "123456"
    ) {
      toast.success("Successfully logged in!");
      push("/admin/dashboard");
      setLoginData({
        email: "",
        password: "",
      });
    } else {
      toast.error("Pleasae enter correct email and password");
    }
  };

  return (
    <>
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed">
          <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
              <form className="form w-100">
                <div className="text-center mb-10">
                  <h1 className="text-dark mb-3">
                    Sign In to 123 West Social Admin
                  </h1>
                </div>
                <div className="fv-row mb-10">
                  <label className="form-label fs-6 fw-bolder text-dark">
                    Email
                  </label>

                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                  />
                </div>
                <div className="fv-row mb-10">
                  <div className="d-flex flex-stack mb-2">
                    <label className="form-label fw-bolder text-dark fs-6 mb-0">
                      Password
                    </label>
                  </div>
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                  />
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-lg btn-primary w-100 mb-5"
                    onClick={loginSubmit}
                  >
                    {!isLoading ? (
                      <span className="indicator-label">Continue</span>
                    ) : (
                      <span className="indicator-label">Please wait...</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
