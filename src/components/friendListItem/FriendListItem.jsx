import styles from "./FriendListItem.module.css";

export default function FriendListItem({ friends }) {
  return (
    <>
      <ul className={styles.list}>
        {friends.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <img src={item.avatar} alt="Avatar" width="48" />
            <p className={styles.friendName}>{item.name}</p>
            <p className={item.isOnline ? styles.online : styles.offline}>
              {item.isOnline ? "Online" : "Offline"}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
