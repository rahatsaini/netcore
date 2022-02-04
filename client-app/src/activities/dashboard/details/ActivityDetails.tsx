import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity;
}

export default function ActivityDetails({ activity }: Props){
    return (
<Card>
    <Image src={`/assets/Images/categoryImages/${activity.category}`} />
    <Card.Content>
      <Card.Header>{activity.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{activity.date}</span>
      </Card.Meta>
      <Card.Description>
      {activity.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Button.Group width='2'>
        <Button basic color='blue' content='Edit'></Button>
        <Button basic color='grey' content='Cancel'></Button>
    </Button.Group>
    </Card.Content>
  </Card>
    );
}