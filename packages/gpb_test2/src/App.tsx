import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from 'store'
import { Test2, Test2Card } from './views/Test2'

const App = () => (
  <Provider store={store}>
    <Toaster position='bottom-right' />
    <Routes>
      <Route path='/' element={<Test2 />} />
      <Route path='/:id' element={<Test2Card />} />
    </Routes>
  </Provider>
)

export default App
