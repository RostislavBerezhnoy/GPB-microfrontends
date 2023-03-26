import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from 'store'
import { Test3Page } from 'views/Test3Page'
import { CreateEventPage } from 'views/CreateEventPage'
import { ModifyEventPage } from 'views/ModifyEventPage'

const App = () => (
  <Provider store={store}>
    <Toaster position='bottom-right' />
    <Routes>
      <Route path='/' element={<Test3Page />} />
      <Route path='/create' element={<CreateEventPage />} />
      <Route path='/:id' element={<ModifyEventPage />} />
    </Routes>
  </Provider>
)

export default App
