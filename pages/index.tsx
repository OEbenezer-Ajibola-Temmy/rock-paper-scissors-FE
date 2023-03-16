import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Leaderboard } from '../components';
import styles from '../styles/Home.module.scss';
import rps_logo from '../public/images/rps-logo.png';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image src={rps_logo} alt="rps-logo" />
        <Leaderboard />
        <div className={styles.play__buttons}>
          <button type="button">Play as guest</button>
          <Link href="/login">
            <button type="button">Sign In/Sign Up</button>
          </Link>
          <button type="button">How to play</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
