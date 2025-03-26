import React, { Component } from "react";
import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser, FaPlus } from "react-icons/fa";
import { MdVisibilityOff } from "react-icons/md";
import "./index.css";


const data = [
    {
        id:1,
        name: "Maneesh",
        img:"https://res.cloudinary.com/dvmcsww2y/image/upload/v1733326538/image1_j57cyy.png",
        description:"Maneesh is a very good boyt jfkjaklfjakfjafkjafklfknafnafanfanafafkanfafnakfnakfnakl",
    },
    {
        id:2,
        name: "Maneesh",
        img:"https://res.cloudinary.com/dvmcsww2y/image/upload/v1710484592/maldives-261506_vqc3jk.jpg",
        description:"Maneesh is a very good boyt jfkjaklfjakfjafkjafklfknafnafanfanafafkanfafnakfnakfnakl",
    },
    
]


class Home extends Component {
  
  render() {
    return (
      <div className="app-container">
        <aside className="sidebar">
          <FaHome className="icon" />
          <FaSearch className="icon" />
          <FaBell className="icon" />
          <FaEnvelope className="icon" />
          <FaUser className="icon" />
          <FaPlus className="icon" />
        </aside>
        <main className="feed">
          <div className="post-box">
            <textarea
              placeholder="Sell land ?"
            />
            <button>Post</button>
          </div>
          <div>
            {
                data.map(each=>(
                    <div> 
                      <div className="pro-cont">
                      <div className="pro-pic"> <p>{each.name[0]}</p></div>
                      <div>
                      <p>{each.name}</p>
                         <p>1Min ago</p>
                      </div>
                     
                      </div>
                    <img src={each.img} className="img"/>
                    <p>{each.description}</p>
                    </div>
                ))
            }
          </div>
        </main>
        <aside className="right-sidebar">
          <div className="trends">
            <h3>What's Happening</h3>
            <p>#Muthyala's Lands</p>
            <p>Best Prices of Land</p>
          </div>
          {/* <MdVisibilityOff className="hide-icon" /> */}
        </aside>
      </div>
    );
  }
}

export default Home;

