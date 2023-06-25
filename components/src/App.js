import Route from './components/Route'
import ModalPage from './pages/ModalPage'
import TablePage from './pages/TablePage'
import Sidebar from './components/Sidebar'
import ButtonPage from './pages/ButtonPage'
import DropdownPage from './pages/DropdownPage'
import AccordionPage from './pages/AccordionPage'

function App() {
  return (
    <div className='mx-auto grid grid-cols-4 container gap-6 mt-4 w-3/4'>
      <Sidebar />
      <div className='col-span-2'>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
        <Route path='/table'>
          <TablePage />
        </Route>
        <Route path='/buttons'>
          <ButtonPage />
        </Route>
      </div>
    </div>
  )
}

export default App
