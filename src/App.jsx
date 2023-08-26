import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="w-screen h-screen p-3 flex flex-col items-center bg-home bg-left-top bg-cover">
      <Outlet />
    </div>
  )
}

export default App
