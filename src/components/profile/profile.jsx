import css from './profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.wrapper}>
        <img className={css.picture} src={image} alt="User avatar" />
        <p className={css.username}>{name}</p>
        <p className={css.nickname}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.itemTitle}>Followers</span>
          <span className={css.number}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemTitle}>Views</span>
          <span className={css.number}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemTitle}>Likes</span>
          <span className={css.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
