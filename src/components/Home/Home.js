import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ASROON.svg";


import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <div className={styles.box}>
        <div className={styles.firstRow}>
          <h3>داده ها</h3>
          <div>
            <button className={styles.btnOutline}>
              دریافت اطلاعات از سرور
            </button>
            <Link to="/signup" className={styles.btnOrdinary}>
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
              ساخت اکانت جدید
            </Link>
          </div>
        </div>

        <div className={styles.secondRow}>
          <table>
            <thead className={styles.header}>
              <tr>
                <th style={{ width: "15%" }}>نام و نام خانوادگی</th>
                <th style={{ width: "15%" }}>شماره موبایل</th>
                <th style={{ width: "10%" }}>سن</th>
                <th style={{ width: "30%" }}>ایمیل</th>
                <th style={{ width: "14%" }}>تاریخ ایجاد</th>
                <th style={{ width: "8%" }}></th>
                <th style={{ width: "8%" }}></th>
              </tr>
            </thead>
            <tbody>
              {props.users.map((user) => {
                return (
                  <tr key={user.id} className={styles.tableRow}>
                    <td>{user.name}</td>
                    <td>{user.mobile}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.created_at}</td>
                    <td><i className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                    <td className={styles.redContent}><i className="fa fa-trash" aria-hidden="true"></i></td>
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
