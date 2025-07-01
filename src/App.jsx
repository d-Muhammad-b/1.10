import './App.css'

function App() {
  const body=document.getElementById("body")
function q(){
  body.style.background="red"
}
function y(){
  body.style.background="green"
}
function k(){
  body.style.background="blue"
}
function s(){
  body.style.background="yellow"
}
  return (
    <div>
      <button onClick={q}>qizil</button>
      <button onClick={y}>yahsil</button>
      <button onClick={k}>ko'k</button>
      <button onClick={s}>sariq</button>
    </div>
  )
}

export default App
