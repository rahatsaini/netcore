import React, { Fragment, useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { Container, Header, List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./navbar";
import ActivityDashboard from "../../activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((res) => {
        setActivities(res.data);
      });
  }, []);

  return (
    <Fragment>
      <header className="App-header">
        <NavBar />
        <Container style={{ marginTop: "7em" }}>
          <ActivityDashboard activities={activities} />
        </Container>
      </header>
    </Fragment>
  );
}

export default App;
