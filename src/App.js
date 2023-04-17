import logo from './logo.svg';
import Posts from "./Components/Posts/Posts";
import {useState} from "react";
import './App.css';
import Launches from "./Components/Launches/Launches";



function App() {

    /*let[chosenPost, GetChosenPost] = useState({});

    let lift = (obj) =>{
        GetChosenPost({...obj});
    }*/


  return (
     <div>
         <div>
             {/*<Posts />*/}
             <Launches/>

         </div>

     </div>

  );
}

export default App;
