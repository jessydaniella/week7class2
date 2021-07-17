import logo from './logo.svg';
import './App.css';
import UserCard from './UserCard'

function App() {
  const user = {
    name: 'Ohen Jessica',
    age: 30,
    height: 6
  };
return (
    <div className="App">
      <UserCard myInfo ={user} />
    </div>
     
  );
}

export default App;
