import { Home, Sale, Apple, Samsung, Google } from '../Pages/AllPages'
import { Routes, Route } from 'react-router'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sale" element={<Sale />}/>
      <Route path="/apple" element={<Apple />}/>
      <Route path="/samsung" element={<Samsung />}/>
      <Route path="/google" element={<Google />}/>
    </Routes>
  )}
