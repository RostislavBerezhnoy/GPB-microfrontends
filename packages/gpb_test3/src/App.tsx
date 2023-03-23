import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from 'store'
import Test3 from './views/Test3'

const App = () => (
  <Provider store={store}>
    <Toaster position='bottom-right' />
    <Routes>
      <Route path='/' element={<Test3 />} />
      <Route path='/create' element={<></>} />
      <Route path='/:id' element={<></>} />
    </Routes>
  </Provider>
)

export default App
