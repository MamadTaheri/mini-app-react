import classes from './Stock.module.css'

const Stock = ({ user }) => {
  const { id, CoTSESymbol, MarketName, GroupName, InstCode } = user;
  return (
    <tr className={classes.tableRow}>
      <td>{id}</td>
      <td>{CoTSESymbol}</td>
      <td>{MarketName}</td>
      <td>{GroupName}</td>
      <td>
        <a
          target="_blank"
          className={classes.btnStock} rel="noreferrer"
          href={`http://www.tsetmc.com/Loader.aspx?ParTree=151311&i=${InstCode}`
          
        }
        >
          مشاهده
        </a>
      </td>
    </tr>
  );
};

export default Stock;
