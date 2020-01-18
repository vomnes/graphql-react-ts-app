import * as React from 'react';
import { LaunchListQuery } from '../../generated/graphql';
import './styles.scss';

export interface OwnProps {
  handleIdChange: (newId: number) => void;
}
interface Props extends OwnProps {
  data: LaunchListQuery;
}

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (
  <div className="launchList">
    <h3 className="text__title launchList__title">Launches</h3>
    <p
      className="launchList__item"
      onClick={() => handleIdChange(942)}
    > -- Statistics -- </p>
    <ol className="launchList__list">
      {!!data.launches &&
        data.launches.map(
          (launch, i) =>
            !!launch && (
              <li
                key={i}
                className="launchList__item"
                onClick={() => handleIdChange(launch.flight_number!)}
              >
                {launch.mission_name}
              </li>
            ),
        )}
    </ol>
  </div>
);
export default LaunchList;
