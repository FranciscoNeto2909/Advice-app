import React, { useState } from "react";
import { Routes, Route} from "react-router-dom"
import SearchBar from "./components/SearchBar";
import PostAdvice from "./pages/PostAdvice"
import SuggestAdvice from "./pages/SuggestAdvice"
import Admin from "./pages/Admin";
import SuggestedAdvice from "./pages/SuggestedAdvices";
import Alert from "./components/Alert"
import Home from "./pages/Home";
export default function App() {

  const [filteredAdvices, setFilteredAdvices] = useState(null)

  return (
    <div className="App">
      <SearchBar setFilteredAdvices={setFilteredAdvices} />
      <Alert/>
      <Routes>
        <Route path="/" element={<Home filteredAdvices={filteredAdvices}/>}/>
        <Route path="/suggestAdvice" element={<SuggestAdvice/>}/>
        <Route path="/createAdvice" element={<PostAdvice />}/>
        <Route path="/postAdvice" element={<SuggestedAdvice/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  )
}