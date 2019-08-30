import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
export default class Services extends Component {

       state={
           services:[{
               icon:<FaCocktail/>,
               title:"free cocktials",
               info: "Lorem ipsum dolor sit amet, consectetur adipiscing eli sed do eiusmod "
            },
                {
                    icon: <FaHiking/>,
                    title: "endlesss Hiking",
                    info: " Lorem ipsum dolor sit amet, consectetu te pro movet reformidans."
                },
                {
                    icon: <FaShuttleVan/>,
                    title: "Fa shadow ",
                    info: "  Lorem ipsum dolor sit amet, riculis ei eam, te pro movet reformidans."
                },
                {
                    icon: <FaBeer/> ,
                    title: "free Beer",
                    info: " esse cillum dolore eu fugiat nulla pariatur.ans."
                }
            ]
       }



               render() {
        return (
            
                <section className="services">
                     <Title title = "services"/>
                     <div className="services-center">
                      {this.state.services.map(
                          (item,index)=>{
                            return  <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                          }
                      )}
                      </div>    
                </section>
           

        )
    }
}
