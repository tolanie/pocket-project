import "./App.css"
import Home from "./Pages/Home/Home";
import{ BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Message from "./Pages/Message/Message";
import Setting from "./Pages/Setting/Setting";
import Layout from "./Common/layout";
import Logout from "./Pages/Logout/Logout";


function App() {
  return (
    <>
    <Router>
     <Routes>
      <Route path="/" element ={ <Layout/>}>
           <Route path="/" element ={ <Home/> } />
            <Route path="/message" element ={ <Message/> } />
            <Route path="/setting" element ={ <Setting/> } />
            <Route path="/logout" element ={ <Logout/> } />
      </Route>      
    </Routes>
    </Router> 
    
    </>
  );
}



export default App;
