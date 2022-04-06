import { ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

export default function Todo(props){
    return(
        <div>
            <ListItem>
                <ListItemText primary="Todo" secondary={props.text} />
            </ListItem>
          
        </div>
    )

}