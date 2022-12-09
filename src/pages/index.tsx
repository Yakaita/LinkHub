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
        </>
    );
};

export default Home;
