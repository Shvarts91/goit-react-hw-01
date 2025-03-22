import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileBlock}>
      <div className={css.profileInfo}>
        <img className={css.profileAvatar} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>
      <ul className={css.profileStats}>
        {Object.entries(stats).map(([key, value]) => (
          <li className={css.profileStatsItem} key={key}>
            <span className={css.profileKey}>{key}</span>
            <span className={css.profileValue}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
