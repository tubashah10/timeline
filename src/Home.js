import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import 'typeface-roboto';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';




import './App.css';

//images
/* 
    1. drag-drop you image to the 'images' folder in src
    2. import it (see cpi example)
    3. you need to reference is like this: {nameyougiv}
*/

import cpi from './images/pakistan-inflation-cpi.png';

export default function Home() {
    return (
        <div className="App">
          <div className="Header">
            Pakistan - History of Financial Crises
          </div>
          {/* <div className="Header">PAKISTAN - Macroeconomic Cycles</div> */}
            <div className="Timeline">
            <div className="majoryearbox">
            <BasicCard />
            <Fab className="majoryearbox2">
            <p> 2008 </p>
            </Fab>
              <MediaCard />
            </div>
            <div className ="majoryearbox">
               <BasicCard />
               <Fab className="imfbutton">
                <p> IMF </p>
                </Fab>
              <MediaCard />
            </div>

            <div className="majoryearbox">
            <BasicCard />
            <Fab className="majoryearbox">
            <p> 2009 </p>
            </Fab>
              <MediaCard />
            </div>


            <div className="majoryearbox">
            <BasicCard />
            <Fab className="majoryearbox">
            <p> 2010 </p>
            </Fab>
              <MediaCard />
            </div>

            <div className="majoryearbox">
            <BasicCard />
            <Fab className="majoryearbox">
            <p> 2011 </p>
            </Fab>
              <MediaCard />
            </div>

            <div className="majoryearbox">
            <BasicCard />
            <Fab className="majoryearbox">
            <p> 2012 </p>
            </Fab>
              <MediaCard />
            </div>

            <div className="majoryearbox">
            <BasicCard />
            <Fab className="majoryearbox2">
            <p> 2013 </p>
            </Fab>
              <MediaCard />
            </div>

            <div className ="majoryearbox">
               <BasicCard />
               <Fab className="imfbutton">
                <p> IMF </p>
                </Fab>
              <MediaCard />
            </div>
            

            <div className="majoryearbox">
            <BasicCard />
            <Fab className="majoryearbox">
            <p> 2014 </p>
            </Fab>
              <MediaCard />
            </div>

            <div className="majoryearbox">
            <BasicCard />
            <Fab className="majoryearbox">
            <p> 2015 </p>
            </Fab>
              <MediaCard />
            </div>

            <div className="majoryearbox">
            <BasicCard />
            <Fab className="majoryearbox">
            <p> 2016 </p>
            </Fab>
              <MediaCard />
            </div>
        

            <div className="majoryearbox">
            <BasicCard />
            <Fab className="majoryearbox">
            <p> 2016 </p>
            </Fab>
              <MediaCard />
            </div>


            <div className="majoryearbox">
            <BasicCard />
            <Fab className="majoryearbox">
            <p> 2017 </p>
            </Fab>
              <MediaCard />
            </div>

            <div className="majoryearbox">
            <BasicCard />
            <Fab className="majoryearbox2">
            <p> 2018 </p>
            </Fab>
              <MediaCard />
            </div>



            <div className="majoryearbox">
            <BasicCard />
            <Fab className="majoryearbox">
            <p> 2019 </p>
            </Fab>
              <MediaCard />
            </div>


            <div className ="majoryearbox">
               <BasicCard />
               <Fab className="imfbutton">
                <p> IMF </p>
                </Fab>
              <MediaCard />
            </div>




            </div>
        </div>
    )
}

function BasicCard() {

  return (
      <Card className="Card">
      <CardContent>
        <Typography variant="body" className="Title" color="textPrimary" gutterBottom>
          Inflation Rate
        </Typography>
            <iframe width="380" height="215" src="https://www.youtube.com/embed/KazyltuEWcY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" width="100%" allowfullscreen></iframe>
        <Typography variant="body2" className="Title" color="textPrimary" gutterBottom>
          Learn more about the financial crisis in Pakistan...
        </Typography>
      </CardContent>
      <CardActions>
        <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Read More</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </CardActions>
    </Card>
  );
}

function MediaCard() {
    return (
        <Card className="Card">
          <CardActionArea>
            <CardMedia
              className="Media"
              image={cpi}
              title="Pakistan Inflation"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Inflation
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Here's some info on the image above...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="button2">
            <Button  
            size="small" color="primary">
              More Information
            </Button>
          </CardActions>
        </Card>
      );
}




function TimelineItem(props) {
  return(
      <div className={props.className+" Timeline "}>
          <button >{props.name}</button>

      </div>
      
  )
}

