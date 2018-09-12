import React , {Component} from 'react';

class Table extends React.Component{

    render() {
        return (
            <React.Fragment>
                <td>{this.props.name}</td>
                <td>{this.props.car}</td>
                <td>{this.props.seatsLeft}</td>
                <td>{this.props.pickUp}</td>
                <td>{this.props.offerId}</td>
            </React.Fragment>
        )
    }
}

export default Table;