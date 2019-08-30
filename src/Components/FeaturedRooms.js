import React, { Component } from 'react'
import {RoomContext} from '../context'
import Room from './Room';
import Title from './Title';
export default class FeatureRooms extends Component {
    static contextType = RoomContext

    render() {
         let {loading,featuredRooms:rooms} = this.context;
            rooms=rooms.map(room =>{
                return <Room key={room.id} room={room}/>
            } )


        return (
            <section className='featured-rooms'>
               <Title title="featured room"/>
                <div className="featured-rooms-center">
                {loading?<loading/>:rooms}
                </div>
            </section>
        )
    }
}