import logo from './logo.svg';
import Posts from "./Components/Posts/Posts";
import {useState} from "react";
import FullPostInfo from "./Components/FullPostInfo/FullPostInfo";
import './App.css';



function App() {

    let[chosenPost, GetChosenPost] = useState({});

    let lift = (obj) =>{
        GetChosenPost({...obj});
    }


  return (
     <div>
         <div>
             <Posts lift={lift}/>
         </div>
         <div className='FullPostInfo'>
             <FullPostInfo value={chosenPost}/>
         </div>
     </div>

  );
}

export default App;
