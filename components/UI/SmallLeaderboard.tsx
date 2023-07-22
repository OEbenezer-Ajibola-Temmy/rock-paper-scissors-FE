import Image from 'next/image';
import styles from '../../styles/Leaderboard.module.scss';
import ic_star_small from '../../public/svgs/ic-star_small.svg';
import ic_star_medium from '../../public/svgs/ic-star_medium.svg';
import ic_star_big from '../../public/svgs/ic-star_big.svg';

const SmallLeaderboard = (): JSX.Element => {
  const leadersData = [
    {
      rank: 1,
      star: 3,
      username: 'BBQueen',
      points: 705,
    },
    {
      rank: 2,
      star: 3,
      username: 'Nagan00917',
      points: 622,
    },
    {
      rank: 3,
      star: 3,
      username: 'A917161746',
      points: 600,
    },
    {
      rank: 1056,
      star: 0,
      username: 'Jamanson',
      points: 50,
    },
  ] as { rank: number; star: number; username: string; points: number }[];
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1>Leaderboard</h1>
        <div className={styles.leader__table}>
          <h3>Rank</h3>
          <h3>Username</h3>
          <h3>Points</h3>
        </div>
        <div className={styles.leader__display}>
          {leadersData.map((leader: any, i: number) => (
            <div key={i} className={styles.leader__details}>
              <h3>{leader.rank}</h3>
              <div className={styles.stars__ctn}>
                {leader.star === 1 ? (
                  <Image src={ic_star_small} alt="star" />
                ) : leader.star === 2 ? (
                  <>
                    <Image src={ic_star_small} alt="star" />
                    <Image src={ic_star_medium} alt="star" />
                  </>
                ) : leader.star === 3 ? (
                  <>
                    <Image src={ic_star_small} alt="star" />
                    <Image src={ic_star_medium} alt="star" />
                    <Image src={ic_star_big} alt="star" />
                  </>
                ) : null}
              </div>
              <h3>{leader.username}</h3>
              <h3>{leader.points}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallLeaderboard;
