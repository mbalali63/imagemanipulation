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
  const [rotationAngle,setRotationAngle] = useState(0);
  const [newFormat,setNewFormat] = useState('jpg');
  const [newFilter,setNewFilter] = useState(null);
  const [selectedFile,setSelectedFile] = useState(null);
  const [resultLink, setResultLink] = useState(null);
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

  const goToNextProcessStage = () => {
    if (processStage === 'initialize') {
      setProcessStage('getData');
    } else if (processStage === 'getData') {
      setProcessStage('result')
    }
  }
  const processStageDefine = (p) => {
    setProcessStage(p);
  }

  const handleSelectedFile = (newFile) => {
    setSelectedFile(newFile)
  }

  const handleNewSize = (x,y) => {
    setNewSize([x,y]);
  }

  const handleNewRotationANgle = (angle) => {
    setRotationAngle(angle);
  }
  const updateResultLink = (downloadLink) => {
    setResultLink(downloadLink);
  }

  const handleFunctionMode = (mode) => {
    setFunctionMode(mode);
  }

  const handleNewFormat = (format) => {
    setNewFormat(format);
  }

  const handleNewFilter = (filter) => {
    setNewFilter(filter);
  }
  return (
    <div className="App">
      <Header
              isMobile = {isMobile}
              isHamburgerOpen = {isHamburgerOpen}
              functionMode = {functionMode}
      />
      <NavBar
              isMobile = {isMobile}
              isHamburgerOpen = {isHamburgerOpen} 
              hamburgerClickHandler = {hamburgerClickHandler}
              functionMode = {functionMode} 
              handleFunctionMode = {handleFunctionMode}
              refTarget={refTarget} 
      />
      <FuncBar 
              isMobile = {isMobile} 
              functionMode = {functionMode} 
              selectedFile = {selectedFile} 
              handleSelectedFile = {handleSelectedFile} 
              processStage={processStage} 
              processHandler = {goToNextProcessStage} 
              processStageDefine = {processStageDefine}
              newSize={newSize} 
              handleNewSize = {handleNewSize}
              rotationAngle={rotationAngle} 
              handleNewRotationANgle = {handleNewRotationANgle}
              newFormat = {newFormat}
              handleNewFormat = {handleNewFormat}
              newFilter = {newFilter}
              handleNewFilter = {handleNewFilter}
              resultLink = {resultLink}
              updateResultLink = {updateResultLink}
      />
      <Footer isMobile = {isMobile} />
    </div>
  );
}

export default App;
