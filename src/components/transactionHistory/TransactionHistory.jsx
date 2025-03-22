import styles from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerTable}>
          <th className={styles.tableItem}>Type</th>
          <th className={styles.tableItem}>Amount</th>
          <th className={styles.tableItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((item) => (
          <tr className={styles.stringTable} key={item.id}>
            <td className={styles.tableItem}>{item.type}</td>
            <td className={styles.tableItem}>{item.amount}</td>
            <td className={styles.tableItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
