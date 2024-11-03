import styles from "@styles/Home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";

const ReadLecturerById = () => {
  const router = useRouter();
  const { gameCode } = router.query;

  return (
    <>
      <Head>
        <title>Round 1</title>

        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kanit&display=swap" rel="stylesheet" />
      </Head>
      <main className={`${styles.main}`}>
        <h1 className={`${styles.h1}`}>Game lobby {gameCode}</h1>
      </main>
    </>
  )
}

export default ReadLecturerById;