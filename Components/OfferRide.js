import React from 'react';
class OfferRide extends React.Component {
    
    render() {
        console.log(this.props);

        if(this.props.isOffered) {
            return(
                <div>
                    <h1>Offered Successfully.</h1>
                    <button onClick={()=>{
                        this.props.history.push(`/show_rides`);
                    }}>Show All Rides</button>
                </div>
            )
        } else {
            return (
                <div align ="center">
                    <h2>Offer Ride page</h2>
                    <p1>Carpooling (also car-sharing, ride-sharing and lift-sharing) is the sharing 
                        of car journeys so that more than one person travels in a car, and prevents the 
                        need for others to have to drive to a location themselves.By having more people 
                        using one vehicle, carpooling reduces each person's travel costs such as: fuel 
                        costs, tolls, and the stress of driving. Carpooling is also a more environmentally 
                        friendly and sustainable way to travel as sharing journeys reduces air pollution, 
                        carbon emissions, traffic congestion on the roads, and the need for parking spaces.
                         Authorities often encourage carpooling, especially during periods of high pollution
                          or high fuel prices. Car sharing is a good way to use up the full seating capacity
                           of a car, which would otherwise remain unused if it were just the driver using the
                            car.
                    </p1>
                    <br/><br/>
                    <form >
                        <div class="form-group">
                            <label for="name">Name: </label>
                            <input id="name" ref="refName" type="text"></input>
                            
                        </div>
                        <div class="form-group">
                            <label for="car">Car: </label>
                            <input id="car" ref="refCar" type="text"></input>
                            
                        </div>
                        <div class="form-group">
                            <label for="SeatsLeft">SeatsLeft: </label>
                            <input id="SeatsLeft" ref="refSeatsLeft" type="text"></input>
                            
                        </div>
                        <div class="form-group">  
                            <label for="pickup">pickup: </label>
                            <input id="pickup" ref="refPickup" type="text"></input>
                        </div>
                        
                        <br /><br/>
                        <button type="button" className="btn-primary" onClick={() => {
                            this.props.onOffer({
                                name: this.refs.refName.value,
                                car: this.refs.refCar.value,
                                seatsLeft: this.refs.refSeatsLeft.value,
                                pickup: this.refs.refPickup.value
                            })
                        }}>Book</button><br/><br/>
                    </form>
                    <button onClick={()=>{
                        this.props.history.push(`/show_rides`);
                    }} className="btn-primary">Show All Rides</button>
                </div>
            )
        }
    }
}

export default OfferRide;
