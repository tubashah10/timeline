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

          <h1> Pakistan - History of Macroeconomic Imbalances</h1>
          <div className="textbox">
          <p className="headercontent">The past 10 years have
          brought about a significant decline in growth rates and in more recent
          seven years, it has lagged behind other South Asian countries. A combination of
          political instability and disruption of evolving democratic process, lack of continuity
          in policies and poor governance have contributed to this outcome. </p>
          </div>
        </div>

        <div className="key">

          <div className="key1">
          
          <Fab className="majoryearbox2"> 
          </Fab>

          <p> Major Year Box </p>
          </div>

          <div className="key1">
          <Fab className="imfbutton"> </Fab>

          
          <p> IMF Bailout Packages </p>

          </div>

          <div className="key1">
          <Fab className="majoryearbox"> </Fab>
          <p> Minor Year Box </p>

          </div>







        </div>






          
            
          {/* <div className="Header">PAKISTAN - Macroeconomic Cycles</div> */}
            {/* <div className="majoryearbox"> */}
      
              <Fab className="majoryearbox2">
                <div className="flextitle">
              <h1 > 2008 </h1>
              <p>Balance of Payment Crisis </p>
              </div>
              </Fab>
              <BasicCard title="Financial Crisis of 2008"
               media={<iframe width="600" height="280" src="https://www.youtube.com/embed/KazyltuEWcY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
               body="The Pakistan Crisis unfolded as domestic and external imbalances started to worsen rapidly in the early
              months of 2008.
               Inflation accelerated and soared upto 25 percent from a rate of 7 percent in the preceeding year. Before the year's end, share prices at the Karachi Stock Exchange 
               had collapsed by some 60 percent from the peak in April 2008. Aggregate market capitalisation shrank to less than 20 percent of GDP
               at the end of 2008, compared to the peak of about 100 percent nine months earlier."
                content="Pakistan’s GDP growth rate came down. Pakistan also witnessed high fiscal and current-account deficit. Inflation which was an international problem also affected Pakistan. 
                Pakistan’s macroeconomic indicators showed very poor performance as GDP growth rate declined from 6.8 % in 2007 to 4.1 % in 2008. Fiscal and Current Account Deficit reached to the
                 highest 7.4 % and 8.4 of GDP respectively.
                Global Financial Crisis hampered Pakistan’s economic growth to a great extent. Deteriorating foreign exchange 
                reserves position due to Balance of Payment crisis compelled Government of Pakistan to approach IMF for a bail out
                 package. Foreign Direct Investment (FDI) carries a considerable importance in economic growth and as a result
                  of Global Financial Crisis. FDI came down from $5410 million in 2008 to $3720 million in 2009. 
                  Global Financial Crisis has also widened the Trade Gap in Pakistan as Trade Deficit rose to 12.8
                   % of GDP in 2008." description="Details about the Financial Crisis of 2008"/>
             
            {/* </div> */}
            {/* <div className ="majoryearbox"> */}
               
               <Fab className="imfbutton">
                <h1> IMF Bailout </h1> 
                </Fab>
                <BasicCard title="Pakistan Gets $7.6 Billion Loan from IMF"
                media={<img src="https://profit.pakistantoday.com.pk/wp-content/uploads/2018/12/5-4.jpg"></img>}
                
                body="The 23-month Stand-By loan will enable the government to implement a stabilization program 
                that envisages a significant tightening of fiscal and monetary policies to bring down inflation
                and reduce the external current account deficit to more sustainable levels. The program seeks 
                to address current macroeconomic imbalances while protecting the poor and preserving social
                stability in the South Asian country of 170 million people.
                The Government's program has two objectives: first, to restore overall economic stability and 
                confidence through a tightening of macroeconomic policies, and second, to do so in a manner 
                that ensures social stability and adequate support for the poor during the adjustment process." 
                content="Upon the Board's approval, an amount equivalent to SDR 2.067 billion (about US$3.1 billion)
                becomes immediately available to Pakistan, and the remaining amount will be phased in, subject to 
                quarterly reviews. The total amount of the IMF resources made available under the arrangement equals
                500 percent of the country's quota. The arrangement was approved by the Board under the Fund's
                fast-track Emergency Financing Mechanism procedures."
                description="Details about the IMF Bailout to Pakistan"/>
              
            {/* </div> */}

            {/* <div className="majoryearbox"> */}
            
            <Fab className="majoryearbox">
            <p> 2009 </p>
            </Fab>
            <BasicCard title="GDP increases by 0.4%" 
            media={<img src="https://i.ibb.co/s9ct0z7/Screen-Shot-2019-12-10-at-3-06-08-PM.png"></img>}
            body="Gross Domestic Product of Pakistan grew 0.4% in 2009 compared to last year. This rate is
             46 -tenths of one percent less than the figure of 5% published in 2008.
            The GDP figure in 2009 was $167,875 million, Pakistan is number 49 in the 
            ranking of GDP of the 196 countries that we publish. The absolute value of 
            GDP in Pakistan rose $2,978 million with respect to 2008.
            The GDP per capita of Pakistan in 2009 was $998, $40 higher than in 2008, it was $1,038. 
            To view the evolution of the GDP per capita, it is interesting to look back a few years 
            and compare these data with those of 1999 when the GDP per capita in Pakistan was $618."


      
            />
              
            {/* </div> */}


            {/* <div className="majoryearbox"> */}
            
            <Fab className="majoryearbox">
            <p> 2010 </p>
            </Fab>
            <BasicCard title="Bumpy Economic Growth"
            media={<img src="https://i.ibb.co/qrpWhFg/Screen-Shot-2019-12-10-at-4-09-47-PM.png" width="60%" ></img>}
            body="Gross Domestic Product of Pakistan grew 2.6% in 2010 compared to last year.
             This rate is 22 -tenths of one percent higher than the figure of 0.4% published in 2009.

            The GDP figure in 2010 was $177,166 million, Pakistan is number 48 in the ranking
             of GDP of the 196 countries that we publish. The absolute value of GDP in Pakistan rose $9,291 million with respect to 2009.
            
            The GDP per capita of Pakistan in 2010 was $1,032, $34 higher than in 2009, it was
             $998. To view the evolution of the GDP per capita, it is interesting to look back 
             a few years and compare these data with those of 2000 when the GDP per capita in Pakistan was $583.
            
            If we order the countries according to their GDP per capita, Pakistan is in 164th 
            position. According to this parameter, its population is among the poorest of the 196 countries whose GDP we publish."/>


             
            {/* </div> */}

            {/* <div className="majoryearbox"> */}
            <Fab className="majoryearbox">
            <p> 2011 </p>
            </Fab>
            <BasicCard title="Growth and Stabilisation"
            media={<img src="https://i.ibb.co/D1Rkb7r/Screen-Shot-2019-12-10-at-4-17-27-PM.png" width="63%" ></img>}
            body="Real GDP growth for 2011-12 has been estimated at 3.7 percent as compared to 3.0 percent
            in the previous fiscal year 2011. The commodity producing sector has performed much better in outgoing fiscal year as
            compared to last year; its growth rate is 3.28 percent against 1.47 percent last year. 
            Industrial sector contains 25.4 percent of GDP having sub sectors: manufacturing,
            construction, mining and quarrying and electricity and gas distribution.
            Foreign Direct Investment in Pakistan stood at $ 666.8 million during July-April 2011-12 as
            against $ 1292.9 million last year."
             />
              
            {/* </div> */}

            {/* <div className="majoryearbox"> */}
            
            <Fab className="majoryearbox">
            <p> 2012 </p>
            </Fab>
            <BasicCard title="Pakistan’s economy performed well in 2012: UN report"
            media={<img src="https://cache.pakistantoday.com.pk/2013/04/UN-flag.jpg" width="45%"></img>}
            body="According to the report, the country’s GDP grew by 3.7% in 2012 as compared with 3% in 2011 and the agricultural
             sector also performed better than in 2011.
            As for manufacturing, its performance improved and the construction sector
             staged a strong recovery while higher growth in the industrial sector as a whole was achieved despite shortages
             of electricity and natural gas.
            On the other hand, the services sector witnessed somewhat slower growth, the survey observed. On the demand side,
             consumption, both private and public, grew at a higher rate in 2012 but investment declined, it said adding as a 
             result, investment fell to 12.5% of GDP in 2012 from 13.1% of GDP in 2011.
            Inflation in Pakistan was brought down from 13.7% in 2011 to 11% in 2012 despite increases in international oil prices"
            
            />
             
            
            <Fab className="majoryearbox2">
            <div className="flextitle">
            <h1>2013 </h1> 
            <p> Fiscal and Current Account Deficits </p>
            </div>
            </Fab>
            <BasicCard
            title="The Cost of Short-term Economic Growth"
            media={<img src="https://i.ibb.co/wQ3XzkN/Screen-Shot-2019-12-10-at-4-31-11-PM.png"></img>} 
            body="As the PML-N took office, central bank foreign exchange reserves stood at $6.5bn, their lowest level in 10 years. 
            Facing the possibility of default, by September the government had approached the International Monetary Fund (IMF), 
            seeking a three-year $6.68bn programme to help stabilise the economy and introduce macroeconomic reforms.

            It would be Pakistan's 12th IMF programme in almost three decades, and came with conditions enforcing discipline on
             managing fiscal deficits and privatising state-owned entities, many of which were not fully met.
            Five years on, the PML-N will tell you, Pakistan's economic situation looks markedly rosier.
            
            Helped by low international oil prices and boosted by the start of work on the $56bn China Pakistan Economic 
            Corridor (CPEC), economic growth stands at a projected 5.79 percent, its highest level in 13 years, taking the gross
             domestic product to an estimated $297bn this year."
             description="Details about Fiscal and Current Account Deficits"
             content="In July, Pakistan's central bank foreign reserves dropped sharply by $601.8m to just $9.6bn, 
             which is enough to cover just two months of imports.

             The fiscal deficit, meanwhile, has ballooned to 5.5 percent of GDP, from the targeted 4.1 percent, 
             the central bank said on May 25.
             
             The external current account deficit rose to $14bn in the first 10 months of the 2018 financial year, 
             a 50 percent rise from the same period last year.
             
            '[Pakistan's] growth has been accompanied in the past 18 months with an increase in macroeconomic imbalances,' 
            says the World Bank's Armos. 'These imbalances will need to be corrected […] we think that further adjustments
             will be needed to put the economy on a much stronger footing, narrowing fiscal deficits and a
              combination of policies to reduce the trade deficit.'"/>
            
              
            {/* </div> */}

            {/* <div className ="majoryearbox"> */}
               <Fab className="imfbutton">
                <h1> IMF Bailout </h1>
                </Fab>
                <BasicCard 
                title="I.M.F. and Pakistan Agree to a $5.3 Billion Bailout"
                media={<img src="https://i.ibb.co/SfthLg3/Screen-Shot-2019-12-10-at-4-39-14-PM.png"></img> }
                body="The 36-month program under the IMF’s Extended Fund Facility aims at bringing down inflation and reducing
                 the fiscal deficit to more sustainable levels. The program also includes measures to help achieve higher 
                 and more inclusive growth, in particular through addressing bottlenecks in the energy sector." 
                 description="Details about the IMF Bailout to Pakistan"
                 content="The loan will be paid out over three years, beginning with the release of $540m, but comes with 
                 strings attached.

                 The government must enact reforms to increase growth, bring down the budget deficit and 
                 improve the rate of tax collection.
                 
                 Pakistan already owes the IMF nearly $5bn after earlier loans.
                 
                 It last received an IMF bailout six years ago, but the government then in power failed to push
                  through the necessary reforms.
                 
                 The economy has grown by an average of just 3% a year since then - too slow to support its 
                 rapidly growing population.
                 
                 Meanwhile the budget deficit has stayed high, foreign cash reserves have dwindled and taxes
                  bring in just 10% of GDP - one of the lowest proportions in the world.
                 
                 Under the new plans, the deficit must fall from around 9% of GDP last year to 3.5-4% in three years, 
                 while tax collection must be improved.
                 
                 There are also hopes that reforms to the energy sector will help prevent frequent power cuts."
                />
            {/* </div> */}
            

            {/* <div className="majoryearbox"> */}
            
            <Fab className="majoryearbox">
            <p> 2014 </p>
            </Fab>
            <BasicCard 
            title="Signs of Improvement"
            media={<img src="https://i.ibb.co/0Fkr2Xk/Screen-Shot-2019-12-10-at-5-39-50-PM.png" width="70%"></img>}
            body="Global economic growth during the outgoing year has witnessed some continuing signs of
            improvement with a pick-up in high-income economies along with some improvement in
            developing countries.
            Major trading partners of Pakistan are growing with better outlook, which will certainly have
            positive impact on the economy of Pakistan and provides an opportunity to uplift socio-economic
            Pakistan is improving quantitatively and qualitatively as growth achieved 4.24 percent is broad
            based and is the highest achievement since 2008-09.condition of common man in the country."
            />
             
            {/* </div> */}

            {/* <div className="majoryearbox"> */}
            
            <Fab className="majoryearbox">
            <p> 2015 </p>
            </Fab>
            <BasicCard 
            title="Pakistan Development Update: Economy Gradually Improving"
            media={<img src="https://i.ibb.co/rHzZSWY/Screen-Shot-2019-12-10-at-5-37-52-PM.png"></img>}
            body="Gross Domestic Product of Pakistan grew 4.1% in 2015 compared to last year This rate is the same than 
            the previous year.

            The GDP figure in 2015 was $270,556 million, Pakistan is number 43 in the ranking of GDP of the 196 countries
             that we publish. The absolute value of GDP in Pakistan rose $26,195 million with respect to 2014.
            
            The GDP per capita of Pakistan in 2015 was $1,425, $113 higher than in 2014, it was $1,312. To view the 
            evolution of the GDP per capita, it is interesting to look back a few years and compare these data with 
            those of 2005 when the GDP per capita in Pakistan was $777.
            
            If we order the countries according to their GDP per capita, Pakistan is in 153th position, its population
             has a low level of affluence compare tothe 196 countries whose GDP we publish"
            />
             
            {/* </div> */}

            {/* <div className="majoryearbox"> */}
            
            <Fab className="majoryearbox">
            <p> 2016 </p>
            </Fab>
            <BasicCard
            title="Pakistan’s Economy- Need to Accelerate Growth"
            media={<img src="https://www.samaa.tv/wp-content/uploads/2017/05/fiscal-deficit-640x419.png"></img>}
            body="Government failed to meet the intended target of 5.7 percent GDP growth rate. Inflation rate 
            remained 4.09% while the volume of Pakistan’s economy surpassed $300 billion. The fiscal deficit of 
            Pakistan has also registered a decrease. From last year when it was 4.6 percent, the fiscal deficit 
            has been brought down to 4.2 percent. As can be seen, the fiscal deficit has been decreasing ever 
            since 2012-2013 when it was at a staggering 8.2 percent.

            " />
              
            {/* </div> */}
        

            {/* <div className="majoryearbox"> */}
            
            {/* <Fab className="majoryearbox">
            <p> 2016 </p>
            </Fab>
            <BasicCard /> */}
              
            {/* </div> */}


            {/* <div className="majoryearbox"> */}
            
            <Fab className="majoryearbox">
            <p> 2017 </p>
            </Fab>
            <BasicCard 
            title="Pakistan to Record Highest Growth Rate in Nine Years: WB Report"
            body="Pakistan’s Gross Domestic Product growth in Fiscal Year 2017 is expected to climb to 5.2 percent
             — the highest in nine years -- and the growth rate will continue to accelerate, 
             reaching 5.5 percent in FY18 and 5.8 percent in FY19.Pakistan’s growth will continue to
              benefit from growing consumer and investor confidence in the first half of FY17, following 
              the successful efforts to restore macroeconomic stability during the last 4 years. There are 
              number of challenges that the provincial governments are facing. Using Punjab as an example,
               it is highlighted that while provincial own-source revenues have significantly increased in 
               recent years, there could have been a further significant gains, if tax policy and administration 
               reforms were implemented."
          media={<img src="https://www.samaa.tv/wp-content/uploads/2017/05/GDP-GROWTH.png"></img>} />
            
            
            <Fab className="majoryearbox2">
              <div className="flextitle">
            <h1> 2018 </h1>
            <p> Depreciation and BOP Crisis </p>
            </div>
            </Fab>
            <BasicCard 
            title="What's Keeping Pakistan in the Dark?"
            media={<iframe width="500" height="300" src="https://www.youtube.com/embed/R_jWnKGbfwc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
            body="Due to the fall in Rupee the economy has suffered. It may be mentioned here that when the central bank took
             back its support on December 13th, Pakistani rupee was hit hard, adversely affecting the currency. Pakistani 
             rupee has always remained between 104 and 105 per dollar since 2015, but in last three sessions it lost its 
             value by over 5 percent. Currency’s level always has a direct bearing on various aspects of the economy.

            The outcome of the devaluation of Rupee against US dollar in the domestic market incidentally coincided with 
            a rise in the crude oil prices in the global market resulting in an upward trend in oil prices from January 2018. 
            The trend will obviously result in increase in the manufacturing and transportation cost resulting in price hike 
            of all the commodities produced locally. Thus in 2018 the country may witness considerable price hike. Therefore, 
            inance managers of the country, take all possible measures to maintain price hike to an acceptable level.
            
            With no major change in massive issues like electricity and gas shortage, unemployment, and poverty, Pakistan may 
            continue to face the problem of fiscal consolidation. The absence of practicable ideas based on ground realities 
            to deal with the changing circumstances, may turn out to be the government’s most significant weakness to maintain
             financial discipline and economic harmony."
             description="Challenges for the New Government"
             content="The new elected government faces formidable macroeconomic challenges. The foremost challenge
             to the economy is the rising aggregate demand without corresponding resources to support it, leading
             to rising fiscal and external account deficits. To address the issue of severe macroeconomic
             instability and to put the economy on the path of sustained growth and stability, the government has
             introduced a comprehensive set of economic and structural reform measures.
             As a short-term measure to get a breathing space, the government secured $ 9.2 billion from friendly
             countries to build up buffers and to ensure timely repayment of previous loans. The government has
             also taken some overdue tough decisions i.e. increase in energy tariffs to stop further accumulation
             of circular debt, reduction in imports through regulatory duties and withdrawal of some of the tax
             relaxations given in the last budget in order to arrest the deterioration in primary balance. These
             painful decisions were tough for the new elected government, but at the same time were necessary
             for economic stabilization. Recently, staff level agreement has been negotiated with the IMF to avail
             Extended Fund Facility for achieving macroeconomic stability. The staff level agreement will now
             be placed before the IMF Board for its approval."
            />
            
            
            <Fab className="majoryearbox">
            <p> 2019 </p>
            </Fab>
            <BasicCard 
            title="Why Pakistan's economy is sinking"
            media={<img src="https://i.ibb.co/phPKfvM/Screen-Shot-2019-12-10-at-6-16-30-PM.png"></img>}
            body="Pakistan’s Gross Domestic Product (GDP) growth slowed as economic policies to address the
            twin deficits took effect. Growth slowed to 3.3 percent in FY19—a 2.2 percentage points decline 
            compared to the previous year, due to the stabilization measures undertaken by the authorities.
            Over the past year, the exchange rate was allowed to depreciate, with a cumulative depreciation 
            of 25.5 percent, the development budget was cut, energy prices were increased, and the policy 
            rate was raised by 575 bps. As a result, private consumption growth decelerated from 6.8 percent
            in FY18 to 4.1 percent in FY19 while investment contracted by 8.9 percent. On the supply side, 
            the industrial sector growth slowed to 1.4 percent in FY19 compared to 4.9 percent in FY18. The 
            services sector grew at 4.7 percent—1.5 percent lower than in FY18. Adverse weather conditions
            have dampened agricultural performance and reduced growth to 0.8 percent in FY19, significantly 
            lower than the targeted growth of 3.8 percent. Average headline inflation increased to 7.3
             percent in FY19 compared with 3.9 percent in FY18, primarily because of the exchange rate passthrough."
            />
            
               
               <Fab className="imfbutton">
                <h1> IMF Bailout </h1>
                </Fab>
                <BasicCard
                 title="The IMF Takeover of Pakistan"
                 body="On July 3, 2019, the Executive Board of the International Monetary Fund (IMF) approved a 39-month
                  extended arrangement under the Extended Fund Facility (EFF) for Pakistan for an amount of SDR 4,268 million 
                  (about US$6 billion or 210 percent of quota) to support the authorities’ economic reform program.

                The EFF-supported program will help Pakistan to reduce economic vulnerabilities and generate sustainable
                and balanced growth focusing on: a decisive fiscal consolidation to reduce public debt and build 
                resilience while expanding social spending; a flexible, market-determined exchange rate to restore
                competitiveness and rebuild official reserves; to eliminate quasi-fiscal losses in the energy sector;
                and to strengthen institutions and enhance transparency."
                 description="Details about US$6 billion 39-Month EFF Arrangement for Pakistan"
                 content="A decisive fiscal consolidation to reduce public debt and build resilience , starting with the
                  adoption of an ambitious FY 2020 budget. The adjustment will be supported by comprehensive efforts to
                   drastically increase revenue mobilization by 4 to 5 percent of GDP at the federal and the provincial 
                   level over the program period;

                 Expanding social spending , including through the strengthening and broadening of safety nets to
                  support the most vulnerable;
                 
                 
                 A flexible, market-determined exchange rate to restore competitiveness, rebuild official reserves,
                  and provide a buffer against external shocks. This will be supported by an appropriate monetary policy
                   to shore up confidence and contain inflation, conducted by an independent central bank;
                 
                 Energy sector reforms to eliminate quasi-fiscal losses and encourage investment , including by depoliticizing 
                 gas and power tariff setting and over the program period, gradually bringing the sector to cost recovery; and
                 
                 Structural reforms through strengthening institutions , increasing governance and transparency, and promoting
                  an investment-friendly environment necessary to improve productivity, entrench lasting reforms, and ensure 
                  sustainable growth.
                 
                 Strong financial assistance by Pakistan’s international partners will support the EFF. The Fund-supported 
                 program is expected to coalesce broader support from multilateral and bilateral creditors in excess of US$38 
                 billion, which is crucial for Pakistan to meet its large financing needs in the coming years."
                media={<img src="https://www.samaa.tv/wp-content/uploads/2018/10/IMF-LOANS-SDR-2.jpg"></img>}
                />

            

      </div>
    )
}

function BasicCard(props) {

  return (
      <Card className="Card">
      <CardContent>
        <Typography variant="body" className="Title" color="textPrimary" gutterBottom>
          {props.title}
        </Typography>
            {props.media}
        <Typography variant="body2" className="Title" color="textPrimary" gutterBottom>
          {props.body} 
        </Typography>
      </CardContent>
      <CardActions>
        {props.content?<ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.description}</Typography> 
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="expansionpanel">
          <Typography>
       {props.content}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>:<div></div>}
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

