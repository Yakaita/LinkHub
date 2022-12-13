import { type NextPage } from 'next';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>LinkHub</title>
                <meta name="description" content="A home for all your links" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <br />
                <h1>Hi this is the default tailwind font</h1>
                <br />
                <h1 className="font-inter">Hi this is the Inter font</h1>
            </div>
        </>
    );
};

export default Home;
