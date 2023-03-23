import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from 'store'
import { Test2Page } from 'views/Test2Page'
import { CardPage } from 'views/CardPage'

const App = () => (
  <Provider store={store}>
    <Toaster position='bottom-right' />
    <Routes>
      <Route path='/' element={<Test2Page />} />
      <Route path='/:id' element={<CardPage />} />
    </Routes>
  </Provider>
)

export default App
