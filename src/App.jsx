import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="w-screen h-full min-h-screen p-3 flex flex-col items-center justify-center bg-home bg-left-top bg-cover">
      <Outlet />
    </div>
  )
}

export default App
