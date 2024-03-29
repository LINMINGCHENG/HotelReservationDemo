import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {withRoomConsumer, RoomConsumer} from '../context';
import Loading from './Loading'
import { FaDivide } from 'react-icons/fa';



function RoomContainer({context}){
const{loading, sortedRooms, rooms} = context;
     if(loading){
         return <Loading/>;
     }
       return(
           <div>
                 <RoomFilter rooms={rooms}/>
                 <RoomList rooms={sortedRooms}/>
           </div>
       )

}

export default withRoomConsumer(RoomContainer);












// export default function RoomContainer() {
//     return (
//           <RoomConsumer>
                
                    
                
//               {(value)=>{
//                 const {loading,sortedRooms,rooms} = value
//                   if (loading) {
//                          return<Loading/>;
//                   }


//                   return(
//                       <div>
//                           Hello From RoomContainer
//                           <RoomFilter rooms={rooms}/>
//                            <RoomList rooms={sortedRooms}/>
//                       </div>
//                   )
//               }}
//           </RoomConsumer>


      
//     )
// }
