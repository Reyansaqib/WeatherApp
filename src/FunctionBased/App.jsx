import React from 'react'
import Navbar from './Navbar'
import Weather from './weather'
import Aboutus from './Aboutus'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactUs from './ContactUs'



export default function App() {



    return (
        <>
           
            
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Weather/>}></Route>
                <Route path='/aboutus' element={<Aboutus/>}></Route>
                <Route path='/contactus' element={<ContactUs/>}></Route>
            </Routes>
            </BrowserRouter>
        </>
    )
}


