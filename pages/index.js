import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import MapContainer from '@/components/MapComponent';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main style={{ minHeight: '100vh' }}>
        <div style={{ textAlign: 'center', margin: '100px auto' }}>
          <div>Hello map</div>
          <div
            style={{
              width: 300,
              height: 220,
              textAlign: 'center',
              margin: 'auto',
            }}
          >
            <MapContainer />
          </div>
        </div>
      </main>
    </>
  );
}
