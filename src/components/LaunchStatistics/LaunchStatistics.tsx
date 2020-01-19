import * as React from 'react';
import './styles.scss';
import StatInterface from './model';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

interface Props {
  data: StatInterface;
}

interface GraphData {
  name: String,
  uv: Number,
}

const createGraphData = (data: any) => {
  let visualGraph: GraphData[] = [];
  Object.keys(data).forEach(key => {;
    visualGraph.push({
      name: key,
      uv: data[key],
    });
  });
  return visualGraph;
}

const LaunchStatistics: React.FC<Props> = ({ data }) => {
  const visualGraph = createGraphData(data.perYear)
  console.log(visualGraph);
  return (
    <div className="launchStatistics">
      <h1 className="text__title">Statistics</h1>
      <p>
        Success : { data.total.success }<br/>
        Fail : { data.total.fail }<br/>
        Total : { data.total.success + data.total.fail }<br/>
        Upcoming launches : { data.upcoming }<br/>
      </p>
      <LineChart width={500} height={250} data={visualGraph}>
        <Line type="monotone" dataKey="uv" stroke="#3498db" />
        <CartesianGrid stroke="#2c3e50" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  )
};

export default LaunchStatistics;
