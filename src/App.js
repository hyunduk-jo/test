import { Routes, Route } from 'react-router-dom';
import CreateUser from './Pages/CreateUser';
import UserDetail from './Pages/UserDetail';
import UserList from './Pages/UserList';
import UserEdit from './Pages/UserEdit';

function App() {    
    return (
      <Routes>
        <Route path='/' element={<CreateUser/>} />
        <Route path='/users' element={<UserList/>}/>
        <Route path='/users/:id' element={<UserDetail/>} />
        <Route path='/users/:id/edit' element={<UserEdit/>} />
      </Routes>
    );
}

export default App;