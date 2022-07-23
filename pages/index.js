import Head from "next/head";
import Image from "next/image";
import { SignIn } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>A.S.R.I.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SignIn />
      </main>
    </div>
  );
}
