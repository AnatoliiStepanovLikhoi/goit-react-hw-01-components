import PropTypes from 'prop-types'
import { UserStats } from './UserStats'

export const UserCard = ({ }) =>
{
    return (
        <Profile>
            <UserDesc>
                <Avatar src={ } alt='User avatar' />
                <Username>{ }</Username>
                <Tag>{ }</Tag>
                <Location>{ }</Location>
            </UserDesc>
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