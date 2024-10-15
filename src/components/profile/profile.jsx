import css from './profile.module.css';

const Profile = () => {
  return (
      <div className={css.card}>
 <div className={css.wrapper}>
 <img className={css.picture}
 src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
 alt="User avatar"
 />
 <p className={css.username}>Petra Marica</p>
 <p className={css.nickname}>@pmarica</p>
 <p className={css.location}>Salvador, Brasil</p>
 </div>

 <ul className={css.list}>
 <li className={css.item}>
 <span className={css.itemTitle}>Followers</span>
 <span className={css.number}>1000</span>
 </li>
 <li className={css.item}>
 <span className={css.itemTitle} >Views</span>
 <span className={css.number}>2000</span>
 </li>
 <li className={css.item}>
 <span className={css.itemTitle}>Likes</span>
 <span className={css.number}>3000</span>
 </li>
 </ul>
</div>

    )
}

export default Profile
