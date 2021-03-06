import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js! series</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{" "}
                    <code className={styles.code}>pages/index.js</code>
                </p>

                <div className={styles.grid}>
                    <Link href="/category/[category]" as="/category/web">
                        <a className={styles.card}>
                            <h3>Web articles &rarr;</h3>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>
                    </Link>

                    <Link href="/category/[category]" as="/category/travel">
                        <a className={styles.card}>
                            <h3>Travel articles &rarr;</h3>
                            <p>My travel posts.</p>
                        </a>
                    </Link>

                    <Link href="/jobs/[job]" as="/jobs/1">
                        <a className={styles.card}>
                            <h3>First job</h3>
                            <p>Discover and deploy boilerplate example Next.js projects.</p>
                        </a>
                    </Link>

                    <Link href="/jobs/[job]" as="/jobs/2">
                    <a className={styles.card}>
                        <h3>Second job</h3>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                    </Link>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>


  )
}
