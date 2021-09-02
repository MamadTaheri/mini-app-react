import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ASROON.svg";

import styles from "./Api.module.css";

const Api = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const url = "https://www.shahrakemam.ir/api/companies";

  useEffect(() => {
    setLoader(true);
    axios.get(url).then((response) => {
      setData(response.data);
      setLoader(false);
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <img src={logo} alt="logo" />
        <div className={styles.box}>
          <div className={styles.row}>
            {loader ? (
              <h3 className={styles.loaderText}>
                داده ها در حال دریافت هستند لطفا منتظر بمانید...
              </h3>
            ) : (
              <table>
                <thead className={styles.header}>
                  <tr>
                    <th style={{ width: "15%" }}>ردیف</th>
                    <th style={{ width: "15%" }}>نماد</th>
                    <th style={{ width: "15%" }}>نوع بازار</th>
                    <th style={{ width: "40%" }}>گروه نماد</th>
                    <th style={{ width: "15%" }}>مشاهده تابلوی معاملات</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user) => (
                    <tr key={user.id} className={styles.tableRow}>
                      <td>{user.id}</td>
                      <td>{user.CoTSESymbol}</td>
                      <td>{user.MarketName}</td>
                      <td>{user.GroupName}</td>
                      <td>
                        <a
                          target="_blank"
                          className={styles.btnStock}
                          href={`http://www.tsetmc.com/Loader.aspx?ParTree=151311&i=${user.InstCode}`}
                        >
                          مشاهده
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Api;
