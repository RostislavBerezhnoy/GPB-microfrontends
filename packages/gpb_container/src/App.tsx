import { lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from 'components/layout'
import { withSuspense } from 'utils/withSuspense'

const Test1 = lazy(() => import('gpb_test1/Test1'))
const Test2 = lazy(() => import('gpb_test2/Test2'))
const Test3 = lazy(() => import('gpb_test3/Test3'))

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index path='/' element={<Navigate to='/test1' />} />
        <Route path='/test1/*' element={withSuspense(Test1)} />
        <Route path='/test2/*' element={withSuspense(Test2)} />
        {/* <Route path='/test2/:id' element={<Test2Card />} /> */}
        <Route path='/test3' element={withSuspense(Test3)} />
        {/* <Route path='/test3/create' element={<Test3CreateEvent />} />
            <Route path='/test3/:id' element={<Test3ModifyEvent />} /> */}
      </Route>
      <Route path='*' element={<h3>Not Found</h3>} />
    </Routes>
  </BrowserRouter>
)

export default App
