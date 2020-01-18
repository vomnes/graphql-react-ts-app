import gql from 'graphql-tag';

export const QUERY_LAUNCH_STATISTICS = gql`
  query LaunchListStatistics {
    launches {
      flight_number
      launch_year
      launch_success
      upcoming
    }
  }
`;
