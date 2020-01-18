import React from 'react';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';
import LaunchStatistics from './components/LaunchStatistics';

import './App.scss';
const App = () => {
  const [id, setId] = React.useState(942);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);
  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange} />
      {
        id !== 942 ?
        (<LaunchProfile id={id} />) :
        (<LaunchStatistics/>)
      }
    </div>
  );
};
export default App;
