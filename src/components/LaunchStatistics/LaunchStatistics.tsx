import * as React from 'react';
import './styles.scss';
import StatInterface from './model';

interface Props {
  data: StatInterface;
}

const LaunchStatistics: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <div className="launchStatistics">
      <h1 className="text__title">Statistics</h1>
      <p>
        Success : { data.total.success }<br/>
        Fail : { data.total.fail }<br/>
        Total : { data.total.success + data.total.fail }<br/>
        Upcoming : { data.upcoming }<br/>
      </p>
    </div>
  )
};

export default LaunchStatistics;
