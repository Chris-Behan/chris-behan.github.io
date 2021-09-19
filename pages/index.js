import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import path from "path";
import { Posts } from "../lib/posts";
import Date from "../components/date";
import { SignupForm } from "../components/SignupForm";

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), "posts");
  const posts = new Posts(postsDir)
  const allPostsData = posts.getSortedPostsData();
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
      <section>
        <p class="text-2xl text-center my-3">
          Communicator and Data Transformer
        </p>
      </section>
      <section>
        <p class="text-lg">
          I would describe myself as a passionate neurotic who struggles with
          moderation. I previously worked at{" "}
          <a
            href="https://aws.amazon.com/"
            class="text-yellow-500 hover:underline"
          >
            AWS
          </a>{" "}
          and currently work at{" "}
          <a href="https://www.ada.cx/" class="text-pink-400 hover:underline">
            Ada
          </a>
          . Technology fascinates me. I love to both play and watch basketball (
          <a
            class="text-blue-500 hover:underline"
            href="https://www.nba.com/thunder/"
          >
            Thunder up!
          </a>
          ). My favorite book is{" "}
          <a
            class="text-yellow-700 hover:underline"
            href="https://davidgoggins.com/book/"
          >
            Can't Hurt Me by David Goggins
          </a>{" "}
          and my favorite band is{" "}
          <a
            class="text-red-600 hover:underline"
            href="https://open.spotify.com/album/4wExFfncaUIqSgoxnqa3Eh?si=UmkV7iSCRZuob0szOKBohA"
          >
            Led Zeppelin
          </a>
          .
        </p>
      </section>
      <section class="p-2">
        <h2 class="text-3xl my-4 font-extrabold">Posts</h2>
        <ul class="list-none p-0">
          {allPostsData.map(({ id, date, title }) => (
            <li class="my-4" key={id}>
              <Link href={`/posts/${id}`}>
                <a class="text-xl text-blue-500 hover:underline">{title}</a>
              </Link>
              <br />
              <small class="text-gray-400">
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
