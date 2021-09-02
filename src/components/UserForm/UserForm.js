import React, { useEffect, useState } from "react";
import logo from "../../images/ASROON.svg";
import moment from "jalali-moment";
import { v4 } from "uuid";

import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    age: "",
    email: "",
    id: "",
    created_at: "",
  });

  useEffect(() => {
    if (props.type === "create") {
      let currentTime = moment().locale("fa").format("YYYY/MM/DD");
      setData({
        name: "",
        mobile: "",
        age: "",
        email: "",
        id: v4(),
        created_at: currentTime,
      });
    } else if (props.type === "update" && props.users) {
      let currentUser = props.users.find((user) => {
        return user.id === props.match.params.id;
      });
      currentUser
        ? setData({
            name: currentUser.name,
            mobile: currentUser.mobile,
            age: currentUser.age,
            email: currentUser.email,
            id: currentUser.id,
            created_at: currentUser.created_at,
          })
        : props.history.push("/");
    }
  }, []);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const saveHandler = () => {
    props.submitUser(data);
    props.history.push("/");
  };

  const updateHandler = () => {
    props.updateUser(data);
    props.history.push("/");
  }

  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <h3 className={styles.titr}>
          {props.type === "create" ? "فرم زیر را پر کنید" : "ویرایش"}
        </h3>
        <div className={styles.formGroup}>
          <label>نام و نام خانوادگی</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            placeholder="نام و نام خانوادگی شما"
          />
        </div>
        <div className={styles.formGroup}>
          <label>شماره موبایل</label>
          <input
            type="text"
            name="mobile"
            value={data.mobile}
            onChange={changeHandler}
            placeholder="شماره موبایل"
          />
        </div>
        <div className={styles.formGroup}>
          <label>سن</label>
          <input
            type="text"
            name="age"
            value={data.age}
            onChange={changeHandler}
            placeholder="سن شما"
          />
        </div>
        <div className={styles.formGroup}>
          <label>ایمیل</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            placeholder="ایمیل شما"
          />
        </div>
        {props.type === "create" ? (
          <button type="submit" className={styles.btn} onClick={saveHandler}>
            ساخت اکانت
          </button>
        ) : (
          <button type="submit" className={styles.btn}  onClick={updateHandler}>
            ثبت اطلاعات
          </button>
        )}
      </form>
    </div>
  );
};

export default UserForm;
