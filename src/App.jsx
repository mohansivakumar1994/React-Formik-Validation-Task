import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Books from './Components/Books'
import AddBooks from './Components/AddBooks'
import BookDetails from './Components/BookDetails'
import EditBooks from './Components/EditBooks'
import Footer from './Components/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {
  const [id, setId] = useState(0);
 return (
   <div>
     <BrowserRouter>
       <div>
         <Navbar />
       </div>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/books" element={<Books />} />
         <Route path="/addBooks" element={<AddBooks />} />
         <Route path="/bookDetails" element={<BookDetails setId={setId} />} />
         <Route path="/edit/:id" element={<EditBooks id={id} />} />
       </Routes>
       <Footer />
     </BrowserRouter>
    
   </div>
 );
};

export default App;