import "./App.css";
import CreativeDashboard from "./containers/CreativeDashboard";
import CreativeProvider from "./context/CreativeProvider";
import { Helmet } from "react-helmet";

function App() {
  return (
    <CreativeProvider>
      <div className="App">
        <Helmet>
          <title>Thinkify React Assignment</title>
          <meta name="description" content="This is a react assignment for the role of UI Developer in Thinkify" />
          <meta name="keywords" content="React, assignment, Context Api" />
        </Helmet>
        <CreativeDashboard />
      </div>
    </CreativeProvider>
  );
}

export default App;
