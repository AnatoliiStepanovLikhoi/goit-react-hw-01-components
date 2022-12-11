import PropTypes from 'prop-types'
import styles from './Statistics.module.css'


export const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>UPLOAD STATS</h2>}
            

            <ul className={styles.statList}>
                {stats.map(stat => (
                    <li className={styles.item}
                        key={stat.id}
                        style={{ backgroundColor: `${getRandomHexColor()}` }}>
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.percentage}>{stat.percentage}%</span>
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