import { useState, useRef, useEffect} from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import FuncBar from './components/FuncBar';
import { useMediaQuery } from 'react-responsive';
import Footer from './components/Footer';

function App() {
  const [isHamburgerOpen,setIsHamburgerOpen] = useState(false);
  const [functionMode,setFunctionMode] = useState('resize');    //resize; rotate; format; filter; background; crop
  const isMobile = useMediaQuery({query: '(max-width:400px)'});
  const [processStage,setProcessStage] = useState('initialize');  //initialize, getData, result
  const [newSize,setNewSize] = useState([0,0]);
  const refTarget = useRef(null);

  useEffect( () => {
    document.getElementById('hamburger').addEventListener('click', hamburgerClickHandler)
    window.addEventListener('mousedown',handleOutMenuClick);
    return () => {
      document.getElementById('hamburger').removeEventListener('close',hamburgerClickHandler)
      window.removeEventListener('mousedown',handleOutMenuClick);
    }
  },[])

  const hamburgerClickHandler = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  }

  const handleOutMenuClick = (event) => {
    if (!refTarget.current?.contains(event.target)) 
    {
      setIsHamburgerOpen(false);
    }
  }

  return (
    <div className="App">
      <Header isMobile = {isMobile} isHamburgerOpen = {isHamburgerOpen} functionMode = {functionMode} />
      <NavBar isMobile = {isMobile} isHamburgerOpen = {isHamburgerOpen} functionMode = {functionMode} refTarget={refTarget} />
      <FuncBar isMobile = {isMobile} functionMode = {functionMode} processStage={processStage} newSize={newSize}/>
      <Footer isMobile = {isMobile} />
    </div>
  );
}

export default App;
