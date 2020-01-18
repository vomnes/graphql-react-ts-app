import * as React from 'react';
import { useLaunchProfileQuery } from '../../generated/graphql';
import LaunchProfile from './LaunchProfile';

interface OwnProps {
  id: number;
}

const LaunchProfileContainer = ({ id }: OwnProps) => {
  const { data, error, loading, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) },
  });
  React.useEffect(() => {
    refetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (error) {
    return <div>ERROR</div>;
  }
  if (!data) {
    return <div>Select a flight from the panel</div>;
  }
  return <LaunchProfile data={data} />;
};
export default LaunchProfileContainer;
