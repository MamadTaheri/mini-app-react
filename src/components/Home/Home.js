import React from "react";
import logo from "../../images/ASROON.svg";

import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <img src={logo} />
      <div className={styles.box}>
        <div className={styles.firstRow}>
          <h3>داده ها</h3>
          <div>
            <button className={styles.btnOutline}>
              دریافت اطلاعات از سرور
            </button>
            <button className={styles.btnOrdinary}>ساخت اکانت جدید</button>
          </div>
        </div>

        <div className={styles.secondRow}>
          <table>
            <thead>
              <tr>
                <th style={{width:"15%"}}>نام و نام خانوادگی</th>
                <th style={{width:"15%"}}>شماره موبایل</th>
                <th style={{width:"10%"}}>سن</th>
                <th style={{width:"30%"}}>ایمیل</th>
                <th style={{width:"15%"}}>تاریخ ایجاد</th>
                <th style={{width:"15%"}} >عملیات</th>
              </tr>
            </thead>
            <tbody>
              {props.users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.mobile}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.date}</td>
                    <td>*</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
