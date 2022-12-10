import PropTypes from 'prop-types'
import styles from './Statistics.module.css'


export const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
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
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}