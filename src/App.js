import logo from './logo.svg';
import './App.css';
import LeftSide from './components/HomePage/HomeLeft/LeftSide';
import Middle from './components/HomePage/HomeMiddle/Middle';
import RightSide from './components/HomePage/HomeRight/RightSide';

function App() {
  const Container = {
    display: "flex",
    flexDirection: "row",
  }
  return (
    <div style={Container}>
      <LeftSide />
      <Middle/>
      <RightSide />
    </div>
  );
}

export default App;
