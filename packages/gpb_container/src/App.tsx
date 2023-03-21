import { lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from 'components/Layouts'
import { NotFound } from 'components/NotFound'
import { withSuspense } from 'utils/withSuspense'

const Test1 = lazy(() => import('gpb_test1/Test1'))
const Test2 = lazy(() => import('gpb_test2/Test2'))
const Test3 = lazy(() => import('gpb_test3/Test3'))

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Navigate to='/test1' />} />
        <Route path='/test1/*' element={withSuspense(Test1)} />
        <Route path='/test2/*' element={withSuspense(Test2)} />
        <Route path='/test3/*' element={withSuspense(Test3)} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
