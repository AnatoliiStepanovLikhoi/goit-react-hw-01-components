import PropTypes from 'prop-types'
import css from './Statistics.module.css'


export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className="title">UPLOAD STATS</h2>}
            

            <ul className="stat-list">
                {stats.map(stat => (
                    <li className="item"
                        key={stat.id}
                        style={{ backgroundColor: `${getRandomHexColor()}` }}>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                ))}

            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    // tag: PropTypes.string.isRequired,
    // location: PropTypes.string.isRequired,
    // avatar: PropTypes.string.isRequired,
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}