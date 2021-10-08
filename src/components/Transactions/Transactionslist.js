import t from "./Transaction.module.css";
import PropTypes from "prop-types";

function Transactionslist({ items }) {
  return (
    <table className={t.transactionfunction}>
      <thead>
        <tr>
          <th className={t.title}> Type </th>
          <th className={t.title}> Amount </th>
          <th className={t.title}> Currency </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={t.table}>{item.type}</td>
            <td className={t.table}>{item.amount}</td>
            <td className={t.table}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactionslist.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default Transactionslist;
