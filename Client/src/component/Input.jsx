import React from "react";
import axios from "axios";
import "./Input.css";

const Input = (props) => {
  const [url, setUrl] = React.useState("");
  async function handleGenerate() {
    try {
      const URL = {
        url: url,
      };
      const response = await axios.post("http://localhost:3000/url", URL);
      if (response.status === 200) {
        props.getUrl(response.data.url);
        setUrl(response.data.url);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function handleAnalyse() {
    try {
      const shortId = url.split("/").pop();
      const response = await axios.get(`http://localhost:3000/url/${shortId}`);
      if (response.status === 200) {
        props.getAnalyse(
          response.data.url,
          response.data.count,
          response.data.id
        );
        setUrl("");
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="input">
      <input
        type="text"
        placeholder="Post Your URL Here"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>
      <button onClick={handleAnalyse}>Analyse</button>
    </section>
  );
};

export default Input;
