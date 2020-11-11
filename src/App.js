import './App.css';
import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function App() {

    const [{user},dispatch] = useStateValue();

    useEffect(()=>{
       const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser){
                dispatch({
                    type:'SET_USER',
                    user:authUser
                })
            } else {
                dispatch({
                    type:'SET_USER',
                    user:null
                })
            }
            return () => {
                unsubscribe()
            }
        })
    },[])
    console.log(user)
    return (
        <Router>
            <div className="App">

                <Switch>
                    <Route path='/checkout'>
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/'>
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
