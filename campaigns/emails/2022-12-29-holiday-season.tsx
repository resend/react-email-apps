import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import Footer from './components/footer';
import * as React from 'react';

const Email = () => {
  const tweetLink = 'https://twitter.com/github/status/1605866235119403009';
  const changelogLink = 'https://react.email/docs/changelog';
  const airbnbLink = 'https://demo.react.email/preview/airbnb-review';
  const googlePlayLink = 'https://demo.react.email/preview/google-play-policy-update';
  const linearLink = 'https://demo.react.email/preview/linear-login-code';
  const slackLink = 'https://demo.react.email/preview/slack-confirm';
  const twitchLink = 'https://demo.react.email/preview/twitch-reset-password';
  const yelpLink = 'https://demo.react.email/preview/yelp-recent-login';
  const githubLabel = 'https://github.com/zenorocha/react-email/issues?q=is%3Aissue+is%3Aopen+label%3A%22app%3A+demo%22';
  const githubPullRequest = 'https://github.com/zenorocha/react-email/tree/main/apps/demo/emails';
  const sourceCodeLink =
    'https://github.com/zenorocha/react-email-apps/blob/main/campaigns/emails/2022-12-29-holiday-season.tsx';

  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

  return (
    <Html>
      <Head />
      <Preview>React Email continues to get a lot of attention during this holiday season...</Preview>
      <Section style={main}>
        <Text style={body}>Hey, it's Zeno Rocha.</Text>
        <Text style={body}>
          React Email continues to get a lot of attention during this holiday season. 🎄
        </Text>
        <Text style={body}>
          This time even the <Link href={tweetLink}>official GitHub account</Link> tweeted about us. 😱
        </Text>
        <Link href={tweetLink}>
          <Img
            src={`${baseUrl}/static/holiday-github-tweet.png`}
            alt="Spending too much time crafting the perfect email? - GitHub"
            width="400"
            height="507"
            style={image}
          />
        </Link>
        <Text style={body}>
          We're shipping tons of improvements and new features every week (<Link href={changelogLink}>see changelog</Link> for all the details).
        </Text>
        <Text style={body}>
          There's one that I'm particularly excited about: you can now <strong>send real test emails</strong> right from React Email. To try this, you can go to the <Link href={airbnbLink}>demo app</Link> and click on the "Send" button in the top right corner.
        </Text>
        <Link href={airbnbLink}>
          <Img
            src={`${baseUrl}/static/holiday-send-test.png`}
            alt="Send test email from React Email"
            width="400"
            height="287"
            style={image}
          />
        </Link>
        <Text style={body}>
          Also, there are a lot of new email templates being added by the community, including:
        </Text>
        <ul>
          <li style={body}><Link href={googlePlayLink}>Google Play clone</Link> by
          @EmersonGarrido</li>
          <li style={body}><Link href={linearLink}>Linear clone</Link> by
          @Rychillie</li>
          <li style={body}><Link href={twitchLink}>Twitch clone</Link> by
          @EmersonGarrido</li>
          <li style={body}><Link href={slackLink}>Slack clone</Link> by
          @c0dr</li>
          <li style={body}><Link href={yelpLink}>Yelp clone</Link> by
          @EmersonGarrido</li>
        </ul>
        <Link href={slackLink}>
          <Img
            src={`${baseUrl}/static/holiday-slack-template.png`}
            alt="Slack email template by @c0dr"
            width="600"
            height="398"
            style={image}
          />
        </Link>
        <Text style={body}>
          If you want to contribute and recreate an email template yourself, feel free to check out these <Link href={githubLabel}>ideas here</Link> and submit a <Link href={githubPullRequest}>pull request</Link>.
        </Text>
        <Text style={body}>
          Play around and let me know if you have any questions :)
        </Text>
        <Text style={body}>Happy coding!</Text>
        <Text style={body}>
          P.S.: See the <Link href={sourceCodeLink}>source code</Link> of this
          email written in React.
        </Text>
        <Footer />
      </Section>
    </Html>
  );
};

const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

const main = {
  backgroundColor: '#ffffff',
};

const body = {
  fontFamily,
  fontSize: '14px',
};

const image = {
  display: 'inline-block',
};

export default Email;
