import './App.css';
import Navbar from './Components/NavBar/Navbar';

function App() {

  const divStyle = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREh2LWVxWfHCCHiSBNd6pjGu0n3wKfIEVPF7Oc2A2E7xQH_AZP_L2upGyMzaXF8qFcnXw&usqp=CAU")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div className="App" style={divStyle}>
        <Navbar/>
    </div>
  );
}

export default App;
