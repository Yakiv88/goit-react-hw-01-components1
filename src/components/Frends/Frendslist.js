import FrendsComponent from "./FrendComponent";
import PropTypes from "prop-types";

function Frendslist({ items }) {
  return (
    <div className="contaner-frends">
      <ul className="list-frends">
        {items.map((item) => (
          <li key={item.id} className="item-frens">
            <FrendsComponent
              isOnline={item.isOnline}
              avatar={item.avatar}
              name={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

Frendslist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
export default Frendslist;
