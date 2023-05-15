import styles from "./layout.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import utilSyles from "../styles/utility.module.css";

const description = "My Personal Blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale" />
        <meta name="description" content={description} />
      </Head>
      {home ? (
        <>
          <Image
            src="/images/profile.svg"
            height="110"
            width="110"
            alt="profile picture"
          />
          <h1 className={utilSyles.heading2Xl}>{description}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                src="/images/profile.svg"
                height="110"
                width="110"
                al="profile picture"
              />
            </a>
          </Link>
          <h2 className={utilSyles.heading2Xl}>
            <Link href="/">
              <a>{description}</a>
            </Link>
          </h2>
        </>
      )}
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a> Back to Home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
