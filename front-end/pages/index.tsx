import Head from "next/head";
import styles from "@styles/Home.module.css";
import GameService from "@services/GameService";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const createGame = async () => {
    const [createdGameResponse] = await Promise.all([
      GameService.createGame()
    ])
    const [createdGame] = await Promise.all([
      createdGameResponse.json()
    ])
    console.log(createdGame.game.game_code);
    router.push("/" + createdGame.game.game_code);
  }

  return (
    <>
      <Head>
        <title>Cards Against Humanity</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kanit&display=swap" rel="stylesheet" />

        <meta name="description" content="By Arne and Christophe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <h1 className={`${styles.h1}`}>Cards Against Humanity</h1>
        <article className={`${styles.section}`}>
          <h2 className={`${styles.h2}`}>Join a game</h2>
          <div className={`${styles.joinDiv}`}>
            <input className={`${styles.input}`} type="text" placeholder="Code..." maxLength={4} />
            <button className={`${styles.join}`}>Join</button>
          </div>
          <h3 className={`${styles.h3}`}><span className={`${styles.span}`}>or</span></h3>
          <button 
            className={`${styles.create}`}
            onClick={createGame}>Create a game</button>
        </article>
      </main>
    </>
  );
}
