import Head from "next/head";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminHeader from "@/components/AdminHeader";
import Sidebar from "@/components/Sidebar";
import { getAPI } from "@/lib/utils/fetchAPI";
import { toast } from "react-toastify";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      let d = await getAPI("get_book_hour", null);
      if (d?.status) {
        setData(d?.data);
        setIsLoading(false);
      } else {
        toast.error(
          "Something went wrong! Please check your network connection."
        );
      }
    })();
  }, []);

  return (
    <>
      <Head>
        <title>123 West Social</title>
        <meta name="description" content="123 West Social | Admin Panel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="d-flex flex-column flex-root">
          <div className="page d-flex flex-row flex-column-fluid">
            <Sidebar />
            <div
              className="wrapper d-flex flex-column flex-row-fluid"
              style={{ backgroundColor: "#fff" }}
            >
              <AdminHeader pageName="HOURLY BOOKINGS" />
              <div
                className="content d-flex flex-column flex-column-fluid"
                id="kt_content"
              >
                <div className="post d-flex flex-column-fluid">
                  <div id="kt_content_container" className="container-xxl">
                    <div className="card card-flush">
                      <div className="card-body pt-0">
                        <table className="table align-middle table-row-dashed fs-6 gy-5">
                          <thead>
                            <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                              <th className="min-w-100px">Booking Date</th>
                              <th className="min-w-100px">Booked For</th>
                              <th className="min-w-100px">Name</th>
                              <th className="min-w-100px">Phone</th>
                              <th className="min-w-100px">Email</th>
                              <th className="min-w-100px">Address</th>
                              <th className="min-w-100px">Number Of Guests</th>
                              {/* <th className="text-center min-w-70px">
                                Actions
                              </th> */}
                            </tr>
                          </thead>
                          {!isLoading ? (
                            <tbody className="fw-bold text-gray-600">
                              {data &&
                                data.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                      <td className="pe-0">
                                        <span className="fw-bolder">
                                          {item?.date}
                                        </span>
                                      </td>
                                      <td className="pe-0">
                                        <span className="fw-bolder">
                                          {item?.hours} hours
                                        </span>
                                      </td>
                                      <td className="pe-0">
                                        <span className="fw-bolder">
                                          {item?.name}
                                        </span>
                                      </td>
                                      <td className="pe-0">
                                        <span className="fw-bolder">
                                          {item?.phone}
                                        </span>
                                      </td>
                                      <td className="pe-0">
                                        <span className="fw-bolder">
                                          {item?.email}
                                        </span>
                                      </td>
                                      <td className="pe-0">
                                        <span className="fw-bolder">
                                          {item?.address}
                                        </span>
                                      </td>
                                      <td className="pe-0">
                                        <span className="fw-bolder">
                                          {item?.numOfGuests}
                                        </span>
                                      </td>
                                      {/* <td className="text-center">
                                        <a
                                          href="#"
                                          className="btn btn-icon btn-light btn-active-color-primary btn-sm me-1"
                                          onClick={() => editBankModel(item)}
                                        >
                                          <FontAwesomeIcon icon={faPen} />
                                        </a>
                                      </td> */}
                                    </tr>
                                  );
                                })}
                            </tbody>
                          ) : (
                            <tbody className="fw-bold text-gray-600">
                              <tr>
                                <td></td>
                                <td>Loading...</td>
                                <td></td>
                              </tr>
                            </tbody>
                          )}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
