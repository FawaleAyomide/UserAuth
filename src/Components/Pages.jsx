import React from 'react'
import PageNotFound from '../ErrorPage/PageNotFound'
import Layout from './Layout'
// import RequireAuth from './RequireAuth'
import { Routes, Route } from 'react-router-dom'
const LazyHome = React.lazy(() => import('./Home'))
const LazyLogin = React.lazy(() => import('./Login'))


const Pages = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* private routes */}
        {/* <Route element={<RequireAuth/>}> */}
      <Route path='/' element={<React.Suspense fallback='Loading'><LazyHome /></React.Suspense>} exact/>
        {/* </Route> */}

      <Route path='/login' element={<React.Suspense fallback='Loading'><LazyLogin /></React.Suspense>} />
      <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default Pages



        
        