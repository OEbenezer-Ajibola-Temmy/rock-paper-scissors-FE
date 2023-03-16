import { useState } from 'react';
import styles from '../../styles/TestCamComponent.module.scss';
import SelectSkin from './SelectSkin';
import TestCam from './TestCam';
import WebCam from './WebCam';

const TestCamComponent = () => {
  const [startCam, setStartCam] = useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <SelectSkin />
        {!startCam && <TestCam setStartCam={setStartCam} />}
        {startCam && <WebCam />}
      </div>
    </div>
  );
};

export default TestCamComponent;
