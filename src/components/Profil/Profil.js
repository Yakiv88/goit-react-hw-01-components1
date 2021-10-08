import social from "./user.json";
import defaultImg from "../Frends/icon.png";
const { name, tag, location, avatar = defaultImg, stats } = social;




const Profillist = (
  <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="Аватар пользователя"
        className="avatar"
        width="200"
      />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li className="item">
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li className="item">
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li className="item">
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profillist;
