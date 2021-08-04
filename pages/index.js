import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import { SignupForm } from "../components/SignupForm";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XSBEQSV3P3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-XSBEQSV3P3');
          `,
          }}
        />
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.centerText}>
          Communicator and Data Transformer.
        </p>
      </section>
      <section className={utilStyles.headingSm}>
        <p className={utilStyles.introText}>
          I would describe myself as a passionate neurotic who struggles with
          moderation. I previously worked at{" "}
          <a href="https://aws.amazon.com/" className={utilStyles.orangeAnchor}>
            AWS
          </a>{" "}
          and I currently work at{" "}
          <a href="https://www.ada.cx/" className={utilStyles.pink}>
            Ada
          </a>
          . Technology fascinates me. I believe there is no difference between
          magic and enough layers of abstraction. I spend too much time
          pondering philosophical questions. I love to both play and watch
          basketball (<a href="https://www.nba.com/thunder/">Thunder up!</a>).{" "}
          <a
            className={utilStyles.redAnchor}
            href="https://open.spotify.com/album/4wExFfncaUIqSgoxnqa3Eh?si=UmkV7iSCRZuob0szOKBohA"
          >
            Led Zeppelin
          </a>{" "}
          is my favorite band of all time.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <hr />
        <SignupForm />
      </section>
    </Layout>
  );
}
