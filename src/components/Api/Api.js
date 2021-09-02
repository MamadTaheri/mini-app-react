import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ASROON.svg";
import Stocks from "../Stocks/Stocks";

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
            ) : 
             <Stocks data={data} />
           }
          </div>
        </div>
      </div>
    </>
  );
};

export default Api;
