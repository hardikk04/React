import React from "react"

function App() {
  const a = 1
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1>Hello</h1>
      <h1>{import.meta.env.VITE_API_KEY}</h1>
    </div>
  )
}

export default App
