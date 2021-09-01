import React, { useEffect, useState } from 'react';
import logo from '../../images/ASROON.svg'

import styles from './UserForm.module.css'

const UserForm = (props) => {

    const [data, setData] = useState({
        name: "",
        mobile: "",
        age: "",
        email: "",
    })

    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const submitHandler = event => {
        event.preventDefault()
        props.submit(data)
        props.history.push("/")
    }

    return (
        <div className={styles.container}>
            <img src={logo} />
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h3 className={styles.titr}>فرم زیر را پر کنید</h3>    
                <div className={styles.formGroup}>
                   <label>نام و نام خانوادگی</label>
                   <input type="text" name="name" value={data.name} onChange={changeHandler} placeholder="نام و نام خانوادگی شما" />
                </div>   
                <div className={styles.formGroup}>
                   <label>شماره موبایل</label>
                   <input type="text" name="mobile" value={data.mobile} onChange={changeHandler} placeholder="شماره موبایل" />
                </div>   
                <div className={styles.formGroup}>
                   <label>سن</label>
                   <input type="text" name="age" value={data.age} onChange={changeHandler} placeholder="سن شما" />
                </div>   
                <div className={styles.formGroup}>
                   <label>ایمیل</label>
                   <input type="email" name="email" value={data.email} onChange={changeHandler} placeholder="ایمیل شما" />
                </div>  
                <button type="submit" className={styles.btn}>ساخت اکانت</button> 
            </form>   
        </div>
    );
};

export default UserForm;