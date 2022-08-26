import Search from './components/search/search';
import './App.css';

function App() {

  function handleOnSearchChange(searchData) {
      console.log(searchData)
  }

  return (
    <div className="container">
      <Search 
      onSearchChange={handleOnSearchChange}
      />
    </div>
  );
}

export default App;
