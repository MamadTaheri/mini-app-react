import React from 'react';
import styles from './Stocks.module.css'
import Stock from './Stock';

const Stocks = (props) => {
    return (
        <>
            <table>
                <thead className={styles.header}>
                  <tr>
                    <th>ردیف</th>
                    <th>نماد</th>
                    <th>نوع بازار</th>
                    <th>گروه نماد</th>
                    <th>مشاهده تابلوی معاملات</th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.map((user) => (
                   <Stock user={user} key={user.id}/>
                  ))}
                </tbody>
              </table> 
        </>
    );
};

export default Stocks;