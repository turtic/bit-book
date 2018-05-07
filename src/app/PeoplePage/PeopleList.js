import React from 'react';
import PeopleItem from './PeopleItem'
import { Item } from 'semantic-ui-react'

const PeopleList = (props) => {
    
    return (
        <Item.Group divided>
            {props.data.map(user => <PeopleItem key={user.id} user={user}/>)}
        </Item.Group>
    )
}

export default PeopleList;