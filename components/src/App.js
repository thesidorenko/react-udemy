import Route from './components/Route'
import ModalPage from './pages/ModalPage'
import TablePage from './pages/TablePage'
import Sidebar from './components/Sidebar'
import ButtonPage from './pages/ButtonPage'
import DropdownPage from './pages/DropdownPage'
import AccordionPage from './pages/AccordionPage'
import CounterPage from './pages/CounterPage'

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
        <Route path='/counter'>
          <CounterPage initialState={1} />
        </Route>
        <Route path='/buttons'>
          <ButtonPage />
        </Route>
      </div>
    </div>
  )
}

export default App
