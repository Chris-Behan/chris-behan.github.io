import Layout from "../../components/layout";
import path from "path"
import { Posts } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import RemarkMathPlugin from "remark-math";
import { BlockMath, InlineMath } from "react-katex";
import { useEffect } from "react";
import { SignupForm } from "../../components/SignupForm";

const postsDirectory = path.join(process.cwd(), "posts");
const posts = new Posts(postsDirectory);

export async function getStaticPaths() {
  const paths = posts.getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await posts.getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default function Post({ postData }) {
  // Log page view
  useEffect(() => {
    postData.id;
  }, []);
  const defaultImg = "https://raw.githubusercontent.com/Chris-Behan/chris-behan.github.io/master/public/images/wpg.jpg"

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.description} />
        {postData.image
          ? <meta property="og:image" content={postData.image} />
          : <meta property="og:image" content={defaultImg} />
        }
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
      </Head>
      <article class="text-xl">
        <h1 class="text-5xl font-extrabold my-3 text-center">
          {postData.title}
        </h1>
        <div class="text-gray-400 my-4">
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown
          plugins={[RemarkMathPlugin]}
          source={postData.content}
          allowDangerousHtml={true}
          renderers={{
            code: CodeBlock,
            math: ({ value }) => <BlockMath>{`${value}`}</BlockMath>,
            inlineMath: ({ value }) => <InlineMath>{`${value}`}</InlineMath>,
          }}
        />
      </article>
      <hr class="mt-4"></hr>
      <SignupForm />
    </Layout>
  );
}
