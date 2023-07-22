import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/Login.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '../../components';
import rps_logo from '../../public/images/rps-logo.png';
import apple from '../../public/svgs/apple.svg';
import google from '../../public/svgs/google.svg';

const Register: NextPage = () => {
  const { pathname } = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Link href="/">
          <Image
            src={rps_logo}
            alt="rps-logo"
          />
        </Link>
        <form className={styles.form}>
          <header className={styles.header}>
            <Link href="/login">
              <h1 className={(pathname === '/login' && styles.active) || ''}>
                Sign in
              </h1>
            </Link>
            <Link href="/register">
              <h1 className={(pathname === '/register' && styles.active) || ''}>
                Register
              </h1>
            </Link>
          </header>
          <div className={(pathname === '/register' && styles.animate) || ''}>
            <input type="text" id="username" placeholder="Username" />
            <input type="password" id="password" placeholder="Password" />
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm password"
            />
            <Button type="submit" text="Register" />
          </div>

          <p>Forgot password?</p>

          <div className={styles.or}>
            <div className={styles.line}></div>
            <p>or</p>
          </div>

          <button type="button" className={styles.apple}>
            <Image
              src={apple}
              alt="apple-logo"
            />
            <p>Sign up with Apple</p>
          </button>

          <button type="button" className={styles.google}>
            <Image
              src={google}
              alt="google-logo"
            />
            <p>Sign up with Google</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
