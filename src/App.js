

import Navbar from './Navbar';
/*
  import function_name  from 'pass the path of that file'
*/
import Home from './Home'
function App() {
  
  const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        {/* <h1>App Component</h1> */}
        <Home/>
      </div>
    </div>
  );
}

export default App;
