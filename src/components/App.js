import '../App.css';

import Profile from './partLeft/Profile';
import Personalinfo from './partRight/Personalinfo';

function App() {
  return (
    <div className="container mt-3 mb-3">
      <div className='row'>
        <Profile/>
        <Personalinfo />
      </div>
    </div>
  );
}

export default App;
