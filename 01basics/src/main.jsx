import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

function MyApp() {
  return (
    <div><h1>custom App</h1></div>
  )
}

const anotherElement=(
  <a href="https://google.com" target="_blank">Visit google</a>
)

const anotherUser='chai aur react'

const reactElement=React.createElement(
  'a',{href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).
  render(
   
      // <App />,
   
    anotherElement
    // reactElement/
  )
