import React from 'react'
import './Project.css'
import maze from './maze.png';
import portfolio from '../Images/portfolio.png'
import chatApp from '../Images/chatApp.jpg'
import sort from '../Images/sort.png';
import weather from '../Images/weather.png';

const project = () => {
  return (
    <div id='projects'>

   
    <div>
      <div className="container">
      <h1 style={{color:'darkorange', fontWeight:"bolder", fontFamily:"inheri",width:"100%"}}>PROJECTS</h1>

          <div className="card">
            <img className="card-img-top prjctImg" src={maze} alt="Card" />
              <h3>Maze Solver</h3>
            <div className="intro">
            <h4>Maze Solver</h4>
              <p className="hidden-para"><span>Maze Solver</span> Visualized pathfinding algorithms such as A-Star, Dijkstra, Depth First Search and 
 Breadth First Search and implemented features like adding walls and moving start
 and end nodes.
</p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top prjctImg" src={chatApp} alt="Card" />
              <h3>Chat Application</h3>
            <div className="intro">
            <h4>Chat Application</h4>
              <p className="hidden-para">A real time chat application using react.js and firebase</p>
            </div>
          </div>


          <div className="card">
            <img className="card-img-top prjctImg" src={sort} alt="Card" />
              <h3>Sorting Visualizer</h3>
            <div className="intro">
            <h4>Sorting Visualizer</h4>
              <p className="hidden-para">Sorting visualizer java project</p>
            </div>
          </div>


          <div className="card">
            <img className="card-img-top prjctImg" src={portfolio} alt="Card" />
              <h3>portfolio</h3>
            <div className="intro">
            <h4>Portfolio</h4>
              <p className="hidden-para"><span>Personal Portfolio</span> Developed using React.js </p>
            </div>
          </div>


          <div className="card">
            <img className="card-img-top prjctImg" src={weather} alt="Card" />
              <h3>Weather Forecast</h3>
            <div className="intro">
            <h4>Weather Forecast</h4>
              <p className="hidden-para">Real time weather forecast website</p>
            </div>
          </div>

          {/* <div className="card">
            <img className="card-img-top prjctImg" src={maze} alt="Card" />
              <h3>Maze Solver</h3>
            <div className="intro">
            <h4>Maze Solver</h4>
              <p className="hidden-para"><span>Maze Solver</span> hii these is me soin iej kjeijegrwh ejwiowjgj ioih</p>
            </div>
          </div> */}
    </div>
    </div>
    </div>
  )
}

export default project
