import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
  return(
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assests/images/logo.png" alt="logo" style={ {marginRight: '10px'}}/>
          Reactivities
        </Menu.Item>
        <Menu.Item header>
          
          Activities
        </Menu.Item>
        <Menu.Item header>
        
        <Button positive content='Create Activity'></Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
}
