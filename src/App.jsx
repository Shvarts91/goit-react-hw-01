import "./App.css";
import userData from "./userData.json";
import Profile from "./components/profile/Profile";
import FriendListItem from "./components/friendListItem/FriendListItem";
import friends from "./friends.json";
import transactions from "./transactions.json";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendListItem friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
