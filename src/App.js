import {useState } from 'react'
import './App.css';
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import {Routes,Route} from 'react-router-dom'
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';
import { getUser } from './utilities/users-service';

function App() {

  const [user,setUser] = useState(getUser())
  return (
    <main className="App">
     {user?<> 
      <NavBar user={user} setUser={setUser}/>
     <Routes>
      <Route path='/orders/new' element={<NewOrderPage/>}/>
      <Route path='/orders' element={<OrderHistoryPage/>}/>
     </Routes> 
     </>:<AuthPage setUser={setUser}/>}
    </main>
  );
}

export default App;
