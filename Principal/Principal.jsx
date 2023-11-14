import React from 'react'
import{  BrowserRouter , Route, Routes }  from "react-router-dom"
import PruebaSemisenor from '../PruebaSemisenor'

const Principal = () => {
  return (
        
        <BrowserRouter>
                    <Routes>

            <Route  path='/'  element  ={ <PruebaSemisenor></PruebaSemisenor>} ></Route>


                    </Routes>
        
        
        
        
        
        </BrowserRouter>


  )
}

export default Principal