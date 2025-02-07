import React from "react";
import Header from "./Header.jsx";
import Input from "./Input.jsx";
import Display from "./Display.jsx";
import "./App.css";

const App = () => {
  const [url, setUrl] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [id, setId] = React.useState("");

  function handleUrl(a) {
    setUrl(a);
  }

  function handleAnalyse(a, b, c) {
    setUrl(a);
    setCount(b);
    setId(c);
  }

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Input getUrl={handleUrl} getAnalyse={handleAnalyse}/>
        <Display url={url} count={count} id={id}/>
      </main>
    </React.Fragment>
  );
};

export default App;
