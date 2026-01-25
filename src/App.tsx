import './App.css'
import { ListBooks } from './components/listBooks'
import { CreateBook } from './pages/CreateBook'
import Dashboard from './pages/Dashboard'
import { Partners } from './pages/partners'
import { CreatePartner } from './components/createPartner'


export function App() {
  return (
    <div className="">
      <Dashboard />
      <CreateBook />  
      <ListBooks />
      <Partners />
      <CreatePartner />
    </div>
)
}
