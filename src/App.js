import './App.css';
import AppNavbar from './components/Navbar'
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/ItemModal'
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from './redux/store'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </ Provider >
  );
}

export default App;
