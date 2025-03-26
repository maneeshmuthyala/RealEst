import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser, FaPlus, FaHeart, FaComment, FaShareAlt } from "react-icons/fa";
import Notification from "../Notification";
import "./index.css";

const data = [
  {
    id: 1,
    name: "Maneesh",
    img: "https://res.cloudinary.com/dvmcsww2y/image/upload/v1733326538/image1_j57cyy.png",
    description: "pfjajhfjhffhakjfhajkfhajkdfhajhajfhajhajhajkn jhajhajha hfajhjahfaa ahajhajda ",
  },
  {
    id: 2,
    name: "Maneesh",
    img: "https://res.cloudinary.com/dvmcsww2y/image/upload/v1710484592/maldives-261506_vqc3jk.jpg",
    description: "ahdabhdg dhagbdhag d dahdjhagd a ahdajdha dad ahdajuiqi f sfajhdfjkhfja ahja hajh fa fa fajh faj aj a a",
  },
];

class Home extends Component {
  render() {
    return (
      <div className="app-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <FaHome className="icon" />
          <FaSearch className="icon" />
          <FaBell className="icon" />
          <Link to="/notification">
            <FaEnvelope className="icon" />
          </Link>
          <Link to="/friends">
          <FaUser className="icon" />
          </Link>
       
          <FaPlus className="icon" />
        </aside>

        {/* Main Feed */}
        <main className="feed">
          <div className="post-box">
            <textarea placeholder="Sell land ?" />
            <button>Post</button>
          </div>

          {/* Posts */}
          <div>
            {data.map((each) => (
              <div key={each.id} className="post-container">
                <div className="pro-cont">
                  <div className="pro-pic">
                    <p>{each.name[0]}</p>
                  </div>
                  <div>
                    <p className="pro-name">{each.name}</p>
                    <p className="pro-time">1 min ago</p>
                  </div>
                </div>

                <img src={each.img} alt={each.name} className="img" />
                <p className="description">{each.description}</p>

                {/* Like, Comment and Share Section */}
                <div className="interaction-section">
                  <div className="like-share">
                    <FaHeart className="icon" />
                    <FaComment className="icon" />
                    <FaShareAlt className="icon" />
                  </div>
                  <div className="comment-box">
                    <textarea placeholder="Write a comment..." />
                    <button className="comment-btn">Post Comment</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="right-sidebar">
          <div className="trends">
            <h3>What's Happening</h3>
            <p>#Muthyala's Lands</p>
            <p>Best Prices of Land</p>
          </div>
        </aside>
      </div>
    );
  }
}

export default Home;
