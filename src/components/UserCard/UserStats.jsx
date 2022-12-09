import PropTypes from 'prop-types'

export const UserStats = () => {
    return (
            <UserStats>
                <Followers>{ }</Followers>
                <Views>{ }</Views>
                <Likes>{ }</Likes>
            </UserStats>
    )
}

UserCard.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}