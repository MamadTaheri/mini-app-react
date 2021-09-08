import React,  { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";


import styles from "./Home.module.css";  

const Home = (props) => { 

  const [deleteStatus, setDeleteStatus] = useState(false)
  const [deleteUserId, setDeleteUserId] = useState()

  const deleteIconHandler = (userId) => {
    setDeleteStatus(true)
    setDeleteUserId(userId)
  }

  const closeModalHandler = () => {
    setDeleteStatus(false)
    setDeleteUserId({})
  }

  const deleteUserHandler = (userId) => {
    // console.log(userId) 
    props.deleteUser(userId)
    closeModalHandler()
  }

  return (
    <>
    
    {deleteStatus === true ?
     <div className={styles.modal}>
          <div className={styles.modalBox}>
             <div className={styles.modalHeader}>
                <h2>حذف ردیف</h2>
                <h3 onClick={closeModalHandler}>X</h3>
             </div>
             <div className={styles.modalBody}>
                <h3>آیا از حذف این ردیف مطمئن هستید؟</h3>
                <button className={styles.btnDelete} onClick={() => {deleteUserHandler(deleteUserId)}}> حذف</button>
             </div>
              
          </div>
     </div>
    :
     ""}

    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <div className={styles.box}>
        <div className={styles.firstRow}>
          <h3>داده ها</h3>
          <div>
            <Link to="/api" className={styles.btnOutline}>
              دریافت اطلاعات از سرور
            </Link>
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
                    <td>
                      <Link to={`/users/${user.id}`}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                    </td>
                    <td className={styles.redContent} onClick={() => {deleteIconHandler(user.id)}}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
