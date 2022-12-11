// Components imports
import { UserCard } from './UserCard/UserCard'
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory';


import { Container } from './App.styled';

// Data imports
import user from '../data/user'
import data from '../data/data'
import friends from '../data/friends'
import transactions from '../data/transactions'

export const App = () => {
  return (
    <Container>
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
      <FriendList
        friends={friends}
      />
      <div>Task 4</div>
      <TransactionHistory items={transactions} />
    </Container>
  )
};
