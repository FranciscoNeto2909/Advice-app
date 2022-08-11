import React from "react";
import { Routes, Route} from "react-router-dom"
import SearchBar from "./components/SearchBar";
import AdvicesContainer from "./pages/AdvicesContainer";
import PostAdvice from "./pages/PostAdvice"
import SuggestAdvice from "./pages/SuggestAdvice"
import Admin from "./pages/Admin";
import SuggestedAdvice from "./pages/SuggestedAdvices";
import Alert from "./components/Alert"
export default function App() {
  return (
    <div className="App">
      <SearchBar />
      <Alert/>
      <Routes>
        <Route path="/" element={<AdvicesContainer/>}/>
        <Route path="/suggestAdvice" element={<SuggestAdvice/>}/>
        <Route path="/createAdvice" element={<PostAdvice />}/>
        <Route path="/postAdvice" element={<SuggestedAdvice/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  )
}