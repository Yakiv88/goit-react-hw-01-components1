import Statistic from "./StatisticComponent";
import PropTypes from "prop-types";

const createRandomBg = () => {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
};

function Statisticlist({ items }) {
  return (
    <section className="sectstatis">
      <div className="contaner-static">
        <h2 className="title2">Upload stats</h2>
        <ul className="stat-list l1">
          {items.map((item) => (
            <li
              key={item.id}
              style={{ backgroundColor: createRandomBg() }}
              className="item2"
            >
              <Statistic label={item.label} percentage={item.percentage} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Statisticlist.propsType = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default Statisticlist;
