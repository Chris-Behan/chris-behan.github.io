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
        <p class="text-xl">
          Passionate neurotic struggling with
          moderation. I try to say things when I talk.{" "}
        </p>
      </section>
      <section class="p-2">
        <h2 class="text-4xl my-4 font-extrabold">Posts</h2>
        <ul class="list-none p-0">
          {allPostsData.map(({ id, date, title }) => (
            <li class="my-4" key={id}>
              <Link href={`/posts/${id}`}>
                <a class="text-2xl text-blue-500 hover:underline">{title}</a>
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
