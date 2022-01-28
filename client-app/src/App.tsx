import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((res) => {
      setActivities(res.data);
    });
  }, []);
  const REACT_VERSION = React.version;

  return (
    <div className="App">
      <header className="App-header">
        <Header as="h1" icon="users" content="Reactivities"></Header>

        <List>
          {activities.map((data: any) => (
            <List.Item className="item" key={data.id}>
              {data.title}
            </List.Item>
          ))}
        </List>
      </header>
    </div>
  );
}

export default App;
