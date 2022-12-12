import PropTypes from 'prop-types'
// import css from './UserStats.module.css'
import {Stats, StatsLabel, StatsDesc, StatsQuantity} from './UserStats.styled'

export const UserStats = ({followers, views, likes}) => {
    return (
    <Stats>
    <StatsLabel>
      <StatsDesc>Followers</StatsDesc>
      <StatsQuantity>{followers}</StatsQuantity>
    </StatsLabel>
    <StatsLabel>
      <StatsDesc>Views</StatsDesc>
      <StatsQuantity>{views}</StatsQuantity>
    </StatsLabel>
    <StatsLabel>
      <StatsDesc>Likes</StatsDesc>
      <StatsQuantity>{likes}</StatsQuantity>
    </StatsLabel>
  </Stats>
    )
}

UserStats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}