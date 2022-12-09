// Components imports
import { UserCard } from './UserCard/UserCard'
import { Statistics } from './Statistics/Statistics';

// Data imports
import user from '../data/user'
import data from '../data/data'
// import friends from '../data/friends'
// import transactions from '../data/transactions'

export const App = () => {
  return (
    <div>
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      Task 1
      </div>
      <UserCard
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      ></UserCard>
      <div>Task 2</div>
      <Statistics
        title='UPLOAD DATA'
        stats={data}
      />
      {/* <Statistics stats={data} /> */}
      <div>Task 3</div>
      <div>Task 4</div>
    </div>
  )
};
