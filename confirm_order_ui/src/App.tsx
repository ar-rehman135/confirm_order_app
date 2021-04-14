import './App.css';
import { useState,useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Question from './MainComponents/Question';
import { handleApi } from './Api/handleApi';
import { FlaskDataContext,MyContext,ReactDataContext } from './components/User';


function App() {
  let [flaskData,setFlaskData] = useState({state: "", type: "", text: "", options:[]});
  let [reactData,setReactData] = useState({state :"", response:null});
  const [openAlert,setOpenAlert] = useState(false);


  const init = async ()=>{
      let res = await handleApi("","GET");
      setFlaskData(res);
  };

  useEffect(()=>{init()},[]);

  const handleSubmit = async (e:any,state:string) => {
    e.preventDefault();  
    if(flaskData.state === "B1") {
        setOpenAlert(true);
    }
    else if(flaskData.state === "B2") {
      setOpenAlert(true);
    }
    else {
      let res = await handleApi(reactData,"POST");
      setFlaskData(res);
    }
  }

  const setData = (data:any, cButton:string="", setFData:boolean=false)=>{
    if(cButton === "back" || setFData){
        setFlaskData(data);
        setReactData({state:"",response:null});
    }else{
        setReactData(data);
    }
  }

  return (
    <div className="App">
      <Router>
        <FlaskDataContext.Provider value={{data:flaskData,setData}}>
          <ReactDataContext.Provider value={reactData}>
            <MyContext.Provider value={{openAlert,setOpenAlert}}>
                <form method="post" onSubmit={(e:any)=>{handleSubmit(e,flaskData.state)}} autoComplete="off">
                    <Switch>
                        <Route exact path="/">
                          <Question />
                      </Route>
                  </Switch>
                </form>
            </MyContext.Provider>
          </ReactDataContext.Provider>
        </FlaskDataContext.Provider>
      </Router>
    </div>
  );
}

export default App;
