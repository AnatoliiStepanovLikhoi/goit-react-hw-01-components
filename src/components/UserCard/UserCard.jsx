import PropTypes from 'prop-types'
// import css from './UserCard.module.css'
import { Profile, Description, Avatar, UserName, UserTag, UserLocation } from './UserCard.styled'

import { UserStats } from './UserStats'


// export const UserCard = ({avatar, username, tag, location stats}) =>
// {       return(
//     <div className="profile">
//   <div className="description">
//     <img
//       src={avatar}
//       alt={username}
//       className="avatar"
//     />
//     <p className="name">{username}</p>
//     <p className="tag">{tag}</p>
//     <p className="location">{location}</p>
//         </div>
//         </div>)
    
// }

export const UserCard = ({avatar, username, tag, location, stats}) =>
{       return (
    <Profile>
  <Description>
    <Avatar
      src={avatar}
      alt={username}
    />
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <UserLocation>{location}</UserLocation>
  </Description>

        <UserStats
            followers={stats.followers}
            views={stats.views}
            likes={stats.likes}
        />
    </Profile>
)
}

UserCard.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}