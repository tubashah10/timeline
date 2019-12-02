import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
        <div className="Header">Header</div>
        <div className="Timeline">
          <TimelineItem name="2008" />
          <div className="TimelineContent">
            Test
          </div>
          <div className="TimelineItem">
            <TimelineItem name="IMF" />
          </div>
        </div>
      </div>
  );
}

// write a functional component that takes properties
// of your 'news item' 


function TimelineItem(props) {
  return(
      <div className="TimelineItem">
          <button className="round-button">{props.name}</button>
      </div>
  )
}

export default App;
