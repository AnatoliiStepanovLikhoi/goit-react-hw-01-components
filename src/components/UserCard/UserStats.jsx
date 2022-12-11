import PropTypes from 'prop-types'
// import css from './UserStats.module.css'

export const UserStats = ({followers, views, likes}) => {
    return (
    <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>


            // <UserStats>
            //     <Followers>{ }</Followers>
            //     <Views>{ }</Views>
            //     <Likes>{ }</Likes>
            // </UserStats>
    )
}

UserStats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}