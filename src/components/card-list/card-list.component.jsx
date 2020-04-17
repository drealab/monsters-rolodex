import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component'
// every component has the props being passed to it.
// There is a concept of a children props. Children props are anything that 
// you pass between the tags of the parent tag
export const CardList = props => (    
    <div className = 'card-list'>
    {props.monsters.map(monster => (<Card key = {monster.id} monster = {monster}/>))}
    </div>
);