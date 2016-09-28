import React from 'react';

export class Card extends React.Component {
    render() {
        let style = {
            'padding': '10px',
            'border': '1px solid green',
            'borderRadius': '5px',
            'marginBottom': '5px'
        }
        return (<div style={style}>
            <span>{this.props.text}</span> ({this.props.id})
        </div>);
    }
}
