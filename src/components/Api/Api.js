import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import Stocks from "../Stocks/Stocks";
import spinner from "../../images/spinner.gif"

import styles from "./Api.module.css";

const Api = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const url = "https://www.irdevprogs.ir/api/tsetmc/companies";

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
              <>
                <h3 className={styles.loaderText}>
                  داده ها در حال دریافت هستند لطفا منتظر بمانید...
                </h3>
                <div className={styles.spinner}>
                  <img src={spinner} alt="spinner" title="spinner" />
                </div>
              </>
            ) : (
              <Stocks data={data} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Api;
