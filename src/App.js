import {BrowserRouter,Routes,Route} from "react-router-dom"
import Daalgavar from'./components/daalgavar'

function App() {
  return (
    <>
    <Daalgavar/>
    <BrowserRouter>
      <Routes>
        <Route path="/"/>
        <Route path="/admin/side"/>
      </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
