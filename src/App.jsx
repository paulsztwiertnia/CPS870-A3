import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Jacob from './pages/Jacob'
import Paul from './pages/Paul'



// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
    <Route index element={<Dashboard />} />
    <Route path="/Jacob" element={<Jacob />} />
    <Route path="/Paul" element={<Paul />} />
    
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
    
  )
}

export default App

