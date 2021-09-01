import React from 'react';
import logo from '../../images/ASROON.svg'

import styles from './UserForm.module.css'

const UserForm = () => {
    return (
        <div className={styles.container}>
            <img src={logo} />
            <form className={styles.formContainer}>
                <h3 className={styles.titr}>فرم زیر را پر کنید</h3>    
                <div className={styles.formGroup}>
                   <label>نام و نام خانوادگی</label>
                   <input type="text" placeholder="نام و نام خانوادگی شما"/>
                </div>   
                <div className={styles.formGroup}>
                   <label>شماره موبایل</label>
                   <input type="text" placeholder="شماره موبایل"/>
                </div>   
                <div className={styles.formGroup}>
                   <label>سن</label>
                   <input type="text" placeholder="سن شما"/>
                </div>   
                <div className={styles.formGroup}>
                   <label>ایمیل</label>
                   <input type="text" placeholder="ایمیل شما"/>
                </div>  
                <button className={styles.btn}>ساخت اکانت</button> 
            </form>   
        </div>
    );
};

export default UserForm;