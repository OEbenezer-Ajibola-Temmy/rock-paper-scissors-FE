import styles from '../../styles/SharePlayerLink.module.scss';
import { CloseButton, CopyLinkButton } from '../../components';

interface Props {
  setCurrentSection: (arg0: number) => void;
  setShowButton: (arg0: boolean) => void;
}

const SharePlayerLink = ({ setCurrentSection, setShowButton }: Props) => {
  return (
    <>
      <CloseButton
        setCurrentSection={setCurrentSection}
        setShowButton={setShowButton}
      />
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <h2>Start a game with anyone that has this link</h2>
          <CopyLinkButton link="https://www.google.com" />
        </div>
      </div>
    </>
  );
};

export default SharePlayerLink;
