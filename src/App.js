import React from 'react';
import './App.css';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryTooltip, VictoryLegend } from 'victory';

const cyclistsKilled = [
  {borough: "Brooklyn", killed: 52, label: "cyclists killed: 52"},
  {borough: "Manhattan", killed: 29, label: "cyclists killed: 29"},
  {borough: "Queens", killed: 27, label: "cyclists killed: 27"},
  {borough: "Bronx", killed: 13, label: "cyclists killed: 13"},
  {borough: "Staten Island", killed: 3, label: "cyclists killed: 3"}
];

const motoristsKilled = [
  {borough: "Brooklyn", killed: 155, label: "motorists killed: 155"},
  {borough: "Manhattan", killed: 37, label: "motorists killed: 37"},
  {borough: "Queens", killed: 159, label: "motorists killed: 159"},
  {borough: "Bronx", killed: 65, label: "motorists killed: 65"},
  {borough: "Staten Island", killed: 40, label: "motorists killed: 40"}
];

const pedestriansKilled = [
  {borough: "Brooklyn", killed: 52, label: "pedestrians killed: 52"},
  {borough: "Manhattan", killed: 185, label: "pedestrians killed: 185"},
  {borough: "Queens", killed: 235, label: "pedestrians killed: 235"},
  {borough: "Bronx", killed: 108, label: "pedestrians killed: 108"},
  {borough: "Staten Island", killed: 33, label: "pedestrians killed: 33"}
];

function App() {
  return (
    <div className="App">
      <h1>Motor Vehicle Accidents</h1>
        <h3>Deaths</h3>
        <h3> </h3>        
        <div className="card">
          <VictoryChart
            domainPadding={30}
            theme={VictoryTheme.material}>            
            <VictoryLegend x={50} y={0}
  	          title="Legend"
              centerTitle
              height={40}
              orientation="horizontal"
              gutter={20}
              style={{ border: { stroke: "black" }, title: {fontSize: 12 }, labels: {fontSize: 8} }}
              data={[
                { name: "Cyclists Killed", symbol: { fill: "tomato", type: "square" } },
                { name: "Motorists Killed", symbol: { fill: "orange", type: "square" } },
                { name: "Pedestrians Killed", symbol: { fill: "gold", type: "square" } }
              ]}
            />
            <VictoryAxis
              tickValues={[1,2,3,4,5]}
              tickFormat={["Brooklyn", "Manhattan","Queens","Bronx","Staten Island"]}
              style={{tickLabels: {fontSize: 8}}}
            />
            <VictoryAxis
              dependentAxis
            />
          <VictoryStack
            colorScale={["tomato", "orange", "gold"]}>
            <VictoryBar 
              labelComponent={<VictoryTooltip/>}              
              data={cyclistsKilled} x="borough" y="killed"/>
            <VictoryBar 
              labelComponent={<VictoryTooltip/>}
              data={motoristsKilled} x="borough" y="killed"/>
            <VictoryBar 
              labelComponent={<VictoryTooltip/>}
              data={pedestriansKilled} x="borough" y="killed"/>
          </VictoryStack>                    
        </VictoryChart>
        </div>
    </div>
  );
}

export default App;
