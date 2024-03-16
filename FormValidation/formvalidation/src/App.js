import logo from './logo.svg';
import './App.css';
import Login from './Login';
import PassFunction from './PassFunction';
function App() {

 function  sayHello(){
    alert('Hello');
  }

  return (
    <div className="App">
    
<Login/>

<hr>

</hr>
<PassFunction data={sayHello}/>
    </div>
  );
}

export default App;
