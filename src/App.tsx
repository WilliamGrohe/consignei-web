// import './App.css'
// import { ListBooks } from './components/listBooks'
// import { CreateBook } from './pages/CreateBook'
// import Dashboard from './pages/Dashboard'
// import { Partners } from './pages/partners'
// import { CreatePartner } from './components/createPartner'


// export function App() {
//   return (
//     <div className="">
//       <Dashboard />
//       <CreateBook />  
//       <ListBooks />
//       <Partners />
//       <CreatePartner />
//     </div>
// )
// }

import { createRouter, RouterProvider } from '@tanstack/react-router'
import './App.css'
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export function App() {
  return <RouterProvider router={router} />
}
