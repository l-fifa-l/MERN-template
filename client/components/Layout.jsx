import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Website Title</title>
      </Head>
      <main className="w-full">
        <Navbar />
        <div>{children}</div>
      </main>
    </>
  );
}
