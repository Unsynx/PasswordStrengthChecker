import { useState } from "react"

function App() {
  const [newPassword, setNewPassword] = useState("")

  return (
    <>
    <h1 className="text-3xl font-bold underline">Hello, World</h1>
    <form onSubmit={e => e.preventDefault()}>
      <input className="accent-black rounded" 
        type="text" 
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
      />
    </form>
    </>
  )
}

export default App
