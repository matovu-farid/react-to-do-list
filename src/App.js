import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
import TodoContainer from "./components/TodoContainer"
import {About, AboutItem} from "./pages/About";
import NotMatch from "./pages/NotMatch";
import './App.css'

const App = () => {
  return <>
  <Navbar />
  <Routes>
    <Route path ='/' element = {<TodoContainer/>}></Route>
    <Route path = '/about' element = { <About /> }>
      <Route path=':slug' element = {<AboutItem />}></Route>
    </Route>
    <Route path = '/*' element = { <NotMatch /> }></Route>
  </Routes>
  </>
}
export default App;