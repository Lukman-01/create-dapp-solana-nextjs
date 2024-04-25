import type { NextPage } from "next";
import Head from "next/head";
import { MultiSenderView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana MultiSender app</title>
        <meta name="description" content="This site will fly high 🦤" />
      </Head>
      <MultiSenderView />
    </div>
  );
};

export default Home;
