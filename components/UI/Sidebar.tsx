import Image from 'next/image';
import styles from '../../styles/Sidebar.module.scss';
import sidebar_logo from '../../public/images/sidebar-logo.png';
import leaderboard_svg from '../../public/images/leaderboard.png';
import book_svg from '../../public/images/book-open.png';

interface Props {
  openLeaderBoard: () => void;
}

const Sidebar = ({ openLeaderBoard }: Props) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__inner}>
        <div className={styles.sidebar__header}>
          <Image src={sidebar_logo} alt="sidebar-logo" />
        </div>

        <div className={styles.sidebar__content}>
          <div className={styles.sidebar__content__inner}
            onClick={openLeaderBoard}
          >
            <Image src={leaderboard_svg} alt="leaderboard" />
          </div>
          <div className={styles.sidebar__content__inner}>
            <Image src={book_svg} alt="book-open" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
