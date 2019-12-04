import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
        <div className="Header">PAKISTAN - Macroeconomic Cycles</div>
        <div className="Timeline">
          <div className="majoryearbox">
          <Box2>
            <iframe width="380" height="215" src="https://www.youtube.com/embed/KazyltuEWcY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box2>

            <TimelineItem name="2008" className="major-years" />
            <Box>
            <img src="https://d3fy651gv2fhd3.cloudfront.net/charts/pakistan-inflation-cpi.png?s=pacpgeny&v=201911070308V20191105&d1=20080104&d2=20081204" width="100%" height="65%"/>

            </Box>
            
            
           
          
        
          </div>
         {/* <div className="TimelineContent">
            Inflation was the highest in 2008 
          </div> */}
          <div className ="majoryearbox2">
            <Box3>
            <p> Pakistan Gets $7.6 Billion Loan from IMF </p>
               </Box3>
            
            <TimelineItem name="IMF" className="imf"/>
            </div>
            <div className="majoryearbox3">
              <Box4 />
            <TimelineItem name="2009" className="minor-years"/>
            </div>
            <div className="majoryearbox3">
              <Box4 />
            <TimelineItem name="2010" className="minor-years"/>
            </div>
            <div className="majoryearbox3">
              <Box4 />
            <TimelineItem name="2011" className="minor-years"/>
            </div>
            <div className="majoryearbox3">
              <Box4 />
            <TimelineItem name="2012" className="minor-years"/>
            </div>
            <div className="majoryearbox">
          <Box2 />
            <TimelineItem name="2013" className="major-years" /> 
            <Box />
        

        
          </div>
          <div className ="majoryearbox2">
            <Box3 />
            <TimelineItem name="IMF" className="imf"/>
            </div>
            <div className="majoryearbox3">
              <Box4 />
            <TimelineItem name="2014" className="minor-years"/>
            </div>
            <div className="majoryearbox3">
              <Box4 />
            <TimelineItem name="2015" className="minor-years"/>
            </div>
            <div className="majoryearbox3">
              <Box4 />
            <TimelineItem name="2016" className="minor-years"/>
            </div>
            <div className="majoryearbox3">
              <Box4 />
            <TimelineItem name="2017" className="minor-years"/>
            </div>
            <div className="majoryearbox">
          <Box2 />
            <TimelineItem name="2018" className="major-years" /> 
            <Box />
          </div>
          <div className="majoryearbox3">
              <Box4 />
            <TimelineItem name="2019" className="minor-years"/>
            </div>
          <div className ="majoryearbox2">
            <Box3 />
            <TimelineItem name="IMF" className="imf"/>
            </div>

            </div>
  </div>
  );
}

// write a functional component that takes properties
// of your 'news item' 


function TimelineItem(props) {
  return(
      <div className={props.className+" Timeline "}>
          <button >{props.name}</button>

      </div>

      
  )
}

  function Box(props) {
    return (
      <div className="infobox"  >
        <p> Inflation Rate </p>
        {props.children}
        <button className="more"> Read More </button>
      </div>
    )
  }




  function Box2(props) {
    return (
      <div className="infobox2"  >
        <p> Economic Growth  </p>
        {props.children}
        <button className="more"> Read More </button>
      </div>
    )
  }


  function Box3(props) {
    return (
      <div className="infobox3"  >
        
        {props.children}
        <button className="more"> Read More </button>
      </div>
    )
  }

  function Box4(props) {
    return (
      <div className="infobox4"  >
        <p> Details </p>
        <button className="more"> Read More </button>
      </div>
    )
  }
export default App;
