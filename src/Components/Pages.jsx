import React from 'react'
import PageNotFound from '../ErrorPage/PageNotFound'
import Layout from './Layout'
import { Routes, Route } from 'react-router-dom'
const LazyHome = React.lazy(() => import('./Home'))
const LazyLogin = React.lazy(() => import('./Login'))


const Pages = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<React.Suspense fallback='Loading'><LazyHome /></React.Suspense>} exact/>

      <Route path='/login' element={<React.Suspense fallback='Loading'><LazyLogin /></React.Suspense>} />
      <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default Pages



        
        