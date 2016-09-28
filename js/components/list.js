import React from 'react';
import { Card } from './card';
import { TrelloForm } from './tform';

export class TrelloList extends React.Component {
    render() {

        let style = {
            'border': '1px solid black',
            'padding': '5px',
            'width': '250px'
        };

        return (
            <div style={style}>
                <h4>{this.props.title}</h4>
                {this.props.cards.map((item)=>{
                    return (<Card text={item.text} id={item.id} key={item.id} />);
                })}
                <TrelloForm />
            </div>);
    }
}
