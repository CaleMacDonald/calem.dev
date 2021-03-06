import Head from 'next/head';
import { url as gravatar } from 'gravatar';

import GitHub from '../components/icons/github';
import Twitter from '../components/icons/twitter';
import LinkedIn from '../components/icons/linkedin';
import Instagram from '../components/icons/instagram';

const picUrl = gravatar('cale.macdonald@gmail.com', { s: 500, protocol: 'https' });

export default props => {
  return (
    <div id="root">
      <Head>
        <title>Cale MacDonald</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, user-scalable=no"
          key="viewport"
        />
        {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />*/}
        {/*<link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />*/}
        {/*<link rel="icon" type="image/png" sizes="128x128" href="/favicon-128x128.png" />*/}
        <link href="https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff" rel="stylesheet" />
      </Head>

      <div id="content">
        <img src={picUrl} />
        <h1 className="name">Cale MacDonald</h1>
        <h2 className="handle">@CaleMacDonald</h2>
        <div id="icons">
          <a href="https://github.com/CaleMacDonald" target="_blank">
            <GitHub className="github" />
          </a>
          <a href="https://twitter.com/CaleMacDonald" target="_blank">
            <Twitter className="twitter" />
          </a>
          <a href="https://www.linkedin.com/in/calemacdonald/" target="_blank">
            <LinkedIn className="linkedin" />
          </a>
          <a href="https://instagram.com/cale.macdonald" target="_blank">
            <Instagram className="instagram" />
          </a>
        </div>
      </div>

      <style jsx>{`
        #root {
          align-items: center;
          display: flex;
          justify-content: center;
          height: 100%;
        }
        img {
          filter: grayscale(100%);
          border: #222 1px solid;
          border-radius: 50% 50%;
          width: 50%;
          margin-bottom: 0.4em;
        }
        h1,
        h2 {
          margin: 0;
          font-weight: normal;
        }
        h2 {
          margin-top: 0.4em;
        }
        .name {
          color: white;
        }
        .handle {
          font-style: italic;
        }
        #content {
          text-align: center;
        }
        #icons {
          margin-top: 1.2em;
          height: 2.5em;
        }
        #icons :global(svg) {
          fill: #ccc;
          vertical-align: top;
          width: 2em;
          padding: 0 0.5em;
        }
        #icons :global(svg),
        #icons :global(svg) :global(.colored) {
          filter: drop-shadow(0 0 0 white);
          transition-duration: 0.3s;
          transition-property: fill, filter, padding, width;
        }
        #icons :global(svg):hover {
          width: 2.5em;
          padding: 0 0.8em;
        }
        #icons :global(.github):hover {
          fill: #ffffff;
          filter: drop-shadow(0 0 0.2em #ffffff);
        }
        #icons :global(.twitter):hover {
          fill: #1da1f2;
          filter: drop-shadow(0 0 0.2em #1da1f2);
        }
        #icons :global(.linkedin):hover {
          fill: #0077b5;
          filter: drop-shadow(0 0 0.2em #0077b5);
        }
        #icons :global(.instagram):hover {
          fill: #e4405f;
          filter: drop-shadow(0 0 0.2em #e4405f);
        }
        #icons :global(.npm):hover {
          filter: drop-shadow(0 0 0.2em #c12127);
        }
        #icons :global(.npm):hover :global(.outer) {
          fill: #c12127;
        }
        #icons :global(.npm) :global(.inner) {
          fill: transparent;
        }
        #icons :global(.npm):hover :global(.inner) {
          fill: #fff;
        }
      `}</style>

      <style global jsx>{`
        html,
        body {
          background-color: #161616;
          color: #ccc;
          font-family: 'San Francisco', sans-serif;
        }
        /* https://github.com/zeit/next.js/issues/822#issuecomment-328279284 */
        html,
        body,
        body > div:first-child,
        #__next,
        #__next > div:first-child {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};
