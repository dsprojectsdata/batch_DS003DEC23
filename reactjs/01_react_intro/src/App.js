import LearnReact from "./LearnReact";

function App() {

  const name = "Nikhilesh Sharma";
  const idName = "main-heading-id"

  const customStyle = { color: "red", backgroundColor: "green" }

  return (
    <>
      <h1 style={customStyle} id={idName} className="main-heading-class">Debugger Solutions!!</h1>
      <span>React JS {2+4} course</span>
    </>
  );
}

export default App;

// <></> -> React Fragment
// {} -> evaluate expression