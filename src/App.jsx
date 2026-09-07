
import './App.css'

function Title(){
  return <h1> I am the best Coder of the World</h1>;
}

function Description(){
  return <h2>This is the Description box</h2>
}
function App() {
  return (
    <div> This is my component
          <Title/>     {/* use to render  */}
          <Title/>     {/* dubara same h1 wali line ko print krne ke leye  */}
          <Description/>
         </div>
  );
}

export default App
