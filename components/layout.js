import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Chris Behan";
export const siteTitle = "Chris Behan";

export default function Layout({ children, home }) {
  return (
    <div class="max-w-3xl px-4 mx-auto my-8">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal website of chris behan" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@behan_chris" />
      </Head>
      <header>
        {home ? (
          <>
            <h1 class="text-6xl text-center font-extrabold my-3 text-black">
              {name}
            </h1>
          </>
        ) : (
          <>

          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a class="text-blue-500 hover:underline">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
