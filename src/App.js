import statistics from "./components/Statistic/statistical-data.json";
import frends from "./components/Frends/Frendsaray.json";
import Statisticlist from "./components/Statistic/Statisticlistjs.js";
import Profillist from "./components/Profil/Profil";
import Frendslist from "./components/Frends/Frendslist";
import Transactions from "./components/Transactions/Transactions.json";
import Transactionslist from "./components/Transactions/Transactionslist";

function App() {
  return (
    <div>
      {Profillist}
      <Statisticlist items={statistics} />
      <Frendslist items={frends} />
      <Transactionslist items={Transactions} />
    </div>
  );
}

export default App;
