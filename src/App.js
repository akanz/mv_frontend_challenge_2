import "@material-tailwind/react/tailwind.css";
import './css/App.css';
import Todolist from './Components/Todolist';
import Todolistredux from "./Components/Todolistredux";
import { Provider } from 'react-redux'
import store from './redux/store'
import Todoformredux from "./Components/Todoformredux";

function App() {
  return (
    <Provider store={store}>
    <div className='py-20'>
      <h1 className='text-gray-700 text-3xl tracking-wider text-center'>Makersvalley challenge two</h1>
      <h3 className='text-sm text-center text-gray-500 my-2'>A todo app with drag and drop feature</h3>
      <Todolistredux />
    </div>
    </Provider>
  );
}

export default App;
