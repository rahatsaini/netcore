import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../app/models/activity";

interface Props{
    activities: Activity[];
}

export default function ActivityList(props: Props) {
    return (
        
      <Segment>
          <Item.Group divided>
          {props.activities.map((data: Activity) => {
              return (
                  <Item key={data.id}>
                      <Item.Content>
                      <Item.Header as='a'>{data.title}</Item.Header>
                      <Item.Meta>{data.date}</Item.Meta>
                      <Item.Description>
                          <div>
                              {data.description}
                          </div>
                          <div>
                              {data.city}, {data.venue}
                          </div>
                      </Item.Description>
                      <Item.Extra>
                          <Button floated="right" content='View' color='blue'></Button>
                          <Label content={data.category}></Label>
                      </Item.Extra>
                      </Item.Content>
                  </Item> )
          })}
          </Item.Group>
      </Segment>
    )
}