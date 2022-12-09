import PropTypes from 'prop-types'
import { UserStats } from './UserStats'

// export const UserCard = ({avatar, username, tag, location}) =>
// {       return
//         // <Profile>
//         //     <UserDesc>
//         //         <Avatar src={ } alt='User avatar' />
//         //         <Username>{ }</Username>
//         //         <Tag>{ }</Tag>
//         //         <Location>{ }</Location>
//         //     </UserDesc>
//         //     <UserStats
//         //         followers={stats.followers}
//         //         views={stats.views}
//         //         likes={stats.likes}
//         //     />
//         // </Profile>

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
//         </div>
    
// }

export const UserCard = ({avatar, username, tag, location, stats}) =>
{       return (
    <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt={username}
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
        </div>

        <UserStats
            followers={stats.followers}
            views={stats.views}
            likes={stats.likes}
        />
    </div>
)
}

UserCard.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}