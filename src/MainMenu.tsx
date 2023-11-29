import React from 'react'
import viteLogo from '/vite.svg'

function MainMenu() {
  return (
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        Home
        </a> | 
        <a href="https://react.dev" target="_blank">
        About
        </a>
        | 
        <a href="https://react.dev" target="_blank">
        Contact
        </a>
    </div>
  )
}

export default MainMenu