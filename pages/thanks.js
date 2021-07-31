import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/thanks.module.css";

export default function Thanks() {
  return (
    <Layout>
      <Head>
        <title>Thanks!</title>
      </Head>
      <div className={styles.container}>
        <h1>Thanks for Subscribing!</h1>
        <h3>Here's some links to brighten your day and sharpen your mind:</h3>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=g3AHqcinzZ4&ab_channel=KarylannLove">
              Brothers Moving - Incredible street performers
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=zpZRRaAbdzo&ab_channel=Hoopmixtape">
              5'6 Aquille Carr High School Basketball Mixtape
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=FvP9SE0QA9o&ab_channel=PBCONFOX">
              Tyson Fury sings 'American Pie' after beating Deontay Wilder
              during postfight interview
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCESLZhusAkFfsNsApnjF_Cg">
              The All-In Podcast - Nuanced Discussion on Tech, Economics,
              Politics, and Science
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=0doGM_6izYg&ab_channel=illneas">
              The Genius of the Crowd By Charles Bukowski
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=HVi3oPufVPg&t=75s&ab_channel=JREClips">
              David Goggins - From 300lbs to Navy Seal
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
