import './App.css';
import NavBar from "./components/NavBar";
import Brands from "./components/Brands";
import Home from './components/Home/Index';
function App() {
    return (
        <
        div className ="text-center">

            <NavBar/>
            <Home/>

            <Brands/>


        </div>
    );
}

export default App;