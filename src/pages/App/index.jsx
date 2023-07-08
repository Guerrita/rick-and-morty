import { useRoutes, BrowserRouter } from "react-router-dom"

import Home from "../Home"
import Characters from "../Characters"
import Episodes from "../Episodes"
import Locations from "../Locations"
import NotFound from "../NotFound"

import Navbar from "@/components/Navbar"
import PageProvider from "@/Context"

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/character/',
      element: <Characters />,
    },
    {
      path: 'episode/',
      element: <Episodes />,
    },
    {
      path: 'location/',
      element: <Locations />,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
  ])
  return routes
}

const App = () => {
  return (
    <PageProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </PageProvider>
  )
}

export default App