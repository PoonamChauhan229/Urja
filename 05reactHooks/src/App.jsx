import './App.css'
import Hook_useState from './components/useState/Hook_useState'
import JSVariables_Test from './components/useState/JSVariables_Test'

function App() {
  const styleState={
    display:"flex",
    gap:"30%",
  
    // flexDirection:"column"
  }

  return (
  <>
    <h1>React Hooks</h1>
   <div style={styleState}>
     
     <JSVariables_Test/>

     <Hook_useState/>
   </div>

  </>
  )
}

export default App



