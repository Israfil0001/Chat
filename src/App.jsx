import CardList from "./components/CardList/CardList";
import Message from "./components/Message/Message";
import Search from "./components/Search/Search";
import TopBar from "./components/TopBar/TopBar";
import Home from "./components/home/Home";
function App() {
  return (
    <div>
      <TopBar />
      <Search />
      <CardList />
      <Message/>

    </div>
  );
}

export default App;
