import React from 'react';
import Table from './Table';

class ShowRide extends React.Component {
    handleClick(rideData) {
        console.log('The offerId is: ',rideData.offerId);
        this.props.onBookRide(rideData);
    }
    render() {
        var rows = [];
        console.log('printing the this.props.rides',this.props.rides);
        this.props.rides.forEach(element => {
            console.log('inside foreach',rows);
            rows.push(
                    <tr>
                        <Table 
                            name={element.name}
                            car={element.car}
                            seatsLeft={element.seatsLeft}
                            pickUp={element.pickUp}
                            offerId={element.offerId}
                        />
                        <td>
                            <button type="button" onClick={()=>{this.handleClick({

                                ridee:"admin",
                                name:element.name,
                                car:element.car,
                                seatsLeft:element.seatsLeft,
                                pickUp:element.pickUp,
                                offerId:element.offerId
                            })}} class = "btn-primary">Book Ride</button>
                        </td>
                    </tr>
            );
          
        });
        console.log(rows);
        if(this.props.rides.length > 0) {
            return(
                <div align ="center">
                    <h1>Rides Available</h1>
                    <table className ="table">
                    <thead>
                        <tr>
                            <td><b>Name</b></td>
                            <td><b>car</b></td>
                            <td><b>Seats Left</b></td>
                            <td><b>Pick Up</b></td>
                            <td><b>Offer Id</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                    </table>
                </div>
            );
        } else {
            return(
                <div>
                    {this.props.onShowRides()}
                </div>
            )
        }
    }
}

export default ShowRide;