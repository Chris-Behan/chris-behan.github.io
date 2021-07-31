import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import RemarkMathPlugin from "remark-math";
import { BlockMath, InlineMath } from "react-katex";
import { useEffect } from "react";
import { SignupForm } from "../../components/SignupForm";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
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

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.description} />
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
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown
          plugins={[RemarkMathPlugin]}
          source={postData.content}
          allowDangerousHtml={false}
          renderers={{
            code: CodeBlock,
            math: ({ value }) => <BlockMath>{`${value}`}</BlockMath>,
            inlineMath: ({ value }) => <InlineMath>{`${value}`}</InlineMath>,
          }}
        />
      </article>
      <hr></hr>
      <SignupForm />
    </Layout>
  );
}
