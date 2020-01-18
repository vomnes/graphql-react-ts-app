import * as React from 'react';
import { useLaunchListStatisticsQuery } from '../../generated/graphql';
import LaunchStatistics from './LaunchStatistics';
import StatInterface from './model';

const LaunchStatisticsContainer = () => {
  const { data, error, loading } = useLaunchListStatisticsQuery();
  const stat: StatInterface = {
    total: {
      success: 0,
      fail: 0,
    },
    perYear: {},
    upcoming: 0,
  };
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (data) {
    data.launches?.forEach(element => {
      if (!element?.upcoming) {
        if (element?.launch_success) {
          stat.total.success++;
        } else {
          stat.total.fail++;
        }
      }
      if (element?.launch_year) {
        if (isNaN(stat.perYear[element?.launch_year])) {
          stat.perYear[element?.launch_year] = 0;
        }
        stat.perYear[element?.launch_year]++;
      }
      if (element?.upcoming) {
        stat.upcoming++;
      }
    });
  }
  if (error || !data) {
    return <div>ERROR</div>;
  }
  return <LaunchStatistics data={ stat }/>;
};

export default LaunchStatisticsContainer;
