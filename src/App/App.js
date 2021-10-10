import './App.css'

import Profile from '../Components/Profile/Profile'
import Statistics from '../Components/Statistics/Statistics'
import FriendList from '../Components/FriendList/FriendList'
import TransactionHistory from '../Components/TransactionHistory/TransactionHistory'

import statisticalData from '../data/statisticalData.json'
import friends from '../data/friends.json'
import user from '../data/user.json'
import transactions from '../data/transactions.json'

function App() {
  return (
    <div className="s.App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  )
}

export default App
