import './App.css';
import Like from './components/Like';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <Like name={'Post'}/>
        <Like name={'Image'}/>
      </div>
    </div>
  );
}

export default App;
