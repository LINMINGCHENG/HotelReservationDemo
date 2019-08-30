import React from 'react'
import  {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../Components/Title'

//get all unique values
const getUnique =(items,value)=>{
  return [...new Set(items.map(item =>item[value]))]
}










export default function RoomFilter({rooms}) {
    const context= useContext(RoomContext)
    const{
        handlechange,type,capacity,price,minPrice,maxPrice,
        minSize,maxSize,breakfast,pets
    }=context;
    //get unique types
    let types = getUnique(rooms,'type')
    //add all type
    types=['all',...types]
    //map to jsx
    types= types.map((item,index)=>{
      return <option value={item} key={index}>{item}</option>
    })
    
     

     let people = getUnique(rooms,'capacity')
     people = people.map((item,index)=>{
       return <option key={index} value={item}>{item}</option>
     })

   

    return (
        <section className='filter-container'>
            <Title title="search rooms"></Title>
            <form className='filter-form'>
              {/**select type */}
                <div className="form-group">
                   <label htmlFor="type">room type</label>
                   <select name='type' id="type" value={type}
                     className='form-control' onChange={handlechange}
                   >
                     {types}
                  </select>
                </div>
               {/** End of select type */ }
                 {/**guest */}
                <div className="form-group">
                   <label htmlFor="capacity">Guest</label>
                   <select name='capacity' id="capacity" value={capacity}
                     className='form-control' onChange={handlechange}
                   >
                     {people}
                  </select>
                </div>
               {/**end  guest */ }
               { /* room pirce*/ }
                     <div className="from-group"> 
                      <laber htmlFor="pirce">
                        room price ${price}  
                      </laber>
                      <input type="range" name="price"
                      min={minPrice} max={maxPrice}
                      id="price" value={price} onChange={handlechange}
                      className="form-control"/>
                     </div>
              {/* end of room pirce*/ }
              {/* size*/ }
              <div className='form-grounp'>
              <label htmlFor="size">
                room size
              </label>
               <div className='size-inputs'>
               <input type="number" name="minSize"
               id="size" value={minSize} onChange={handlechange}
               className="size-input"></input>
               <input type="number" name="maxSize"
               id="size" value={maxSize} onChange={handlechange}
               className="size-input"></input>
               </div>
              </div>

              { /* end of size*/ }
              {/**extras box*/}
               <div className="form-group">
                <div className="single-extra">
                <input type="checkbox" name="breakfast"
                id="breakfast" checked={breakfast} 
                onChange={handlechange}/>
                <label htmlfor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                <input type="checkbox" name="pets"
                id="pets" checked={pets} 
                onChange={handlechange}/>
                <label htmlfor="pets">pets</label>
                </div>
               </div>
                { /** end extras box*/ }
            </form>
        </section>
    )
}
