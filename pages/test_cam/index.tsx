import { useState } from 'react';
import { BigLeaderboard, Sidebar, TestCamComponent } from '../../components';
import styles from './page.module.scss';

const TestCam = () => {
  const [leaderBoard, setLeaderBoard] = useState<boolean>(false);

  return (
    <>
      <BigLeaderboard
        leaderBoard={leaderBoard}
        setLeaderBoard={setLeaderBoard}
      />
      <div className={styles.wrapper}>
        <Sidebar
          openLeaderBoard={() => {
            setLeaderBoard(!leaderBoard);
          }}
        />
        <TestCamComponent />
      </div>
    </>
  );
};

export default TestCam;
