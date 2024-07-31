import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import { Component1 } from "../componentsexample/Component1";
import { Component2 } from "../componentsexample/Component2";
import { Component3 } from "../componentsexample/Component3";
import { Menu } from "./Menu";
export const RouterR = () => {
  return (
    <Router>
        <Menu/>
        <Routes>
            <Route path="/component1" element={<Component1/>}/>
            <Route path="/component2" element={<Component2/>}/>
            <Route path="/component3" element={<Component3/>}/>
        </Routes>
    </Router>
  )
}
