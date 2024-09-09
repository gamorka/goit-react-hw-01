import Profile from "./components/profile/profile";
import userData from "./components/profile/userData.json";
import FriendList from './components/friend-list/friendList';
import friends from './components/friend-list/friendList.json';
import transactions from './components/transaction-history/transactions.json';
import TransactionHistory from './components/transaction-history/TransactionHistory';

const App = () => {
  return (
    <>
       <h1>Profile</h1>
      
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <div>
       <h1>Friend List</h1>
       <FriendList friends={friends} />
      </div>

      <div>
      <h1>Transaction History</h1>
      <TransactionHistory items={transactions} />
      </div>

       
    </>
  );
}
export default App;