import React from "react";
import "./Display.css";

const Display = (props) => {
  const [isUrl, setUrl] = React.useState(false);
  const [isAnalyse, setAnalyse] = React.useState(false);

  React.useEffect(() => {
    if (props.url && props.count && props.id) {
      setAnalyse(true);
      setUrl(false);
    } else if (props.url) {
      setUrl(true);
      setAnalyse(false);
    }
  });


  return (
    <section className="display">
      {!isAnalyse && !isUrl && <h4>Please Generate a URL</h4>}
      {!isAnalyse && isUrl && (
        <a href={props.url} target="_blank">
          {props.url}
        </a>
      )}
      {!isUrl && isAnalyse && (
        <ul>
          <li>Registered URL: {props.url}</li>
          <li>Total Clicks: {props.count}</li>
          <li>
            Visits:{" "}
            <ul>
              {props.id.map((id) => (
                <ul key={id._id}>
                  <li>timestamp: {id.timestamp}</li> <li>id: {id._id}</li>
                </ul>
              ))}
            </ul>
          </li>
        </ul>
      )}
    </section>
  );
};

export default Display;
