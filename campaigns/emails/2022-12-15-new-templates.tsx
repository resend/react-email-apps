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
  const websiteLink = 'https://react.email';
  const githubLink = 'https://github.com/zenorocha/react-email';
  const airbnbLink = 'https://demo.react.email/preview/airbnb-review';
  const dropboxLink = 'https://demo.react.email/preview/dropbox-reset-password';
  const examplesLink = 'https://react.email/examples';
  const contributeLink =
    'https://github.com/zenorocha/react-email/issues?q=is%3Aissue+is%3Aopen+label%3A%22app%3A+demo%22';
  const sourceCodeLink =
    'https://github.com/zenorocha/react-email-apps/blob/main/campaigns/emails/2022-12-15-new-templates.tsx';

  return (
    <Html>
      <Head />
      <Preview>
        The last few days have been crazy! We launched the React Email docs and
        got a _lot_ of attention...
      </Preview>
      <Section style={main}>
        <Text style={body}>Hey, it's Zeno Rocha.</Text>
        <Text style={body}>The last few days have been crazy!</Text>
        <Text style={body}>
          We launched the React Email docs and got a _lot_ of attention. More
          than 12k people visited the{' '}
          <Link href={websiteLink}>new website</Link>, and we crossed 1.8k stars
          on the <Link href={githubLink}>GitHub repo</Link>.
        </Text>
        <Link href="https://twitter.com/rauchg/status/1600151807707164672">
          <Img
            src="/static/new-templates-tweet.png"
            alt="react.email looks fire emoji - Guillermo Rauch"
            width="400"
            height="473"
          />
        </Link>
        <Text style={body}>
          Now we've been working hard to address all the issues and feature
          requests that are coming in.
        </Text>
        <Text style={body}>
          Thankfully, the community has been helping a lot, and they even
          started to create a few new email templates.
        </Text>
        <Text style={body}>
          Here's the <Link href={airbnbLink}>Airbnb template</Link> recreated by
          @joaom00 and the <Link href={dropboxLink}>Dropbox template</Link>{' '}
          recreated by @ribeiroevandro.
        </Text>
        <Link href={airbnbLink}>
          <Img
            src="/static/new-templates-airbnb.png"
            alt="Airbnb email template by @joaom00"
            width="600"
            height="386"
          />
        </Link>
        <Text style={body}>
          You can now find all the templates on{' '}
          <Link href={examplesLink}>react.email/examples</Link>. And if you want
          to contribute, here are{' '}
          <Link href={contributeLink}>a couple of templates</Link> we still want
          to implement using React Email.
        </Text>
        <Text style={body}>
          Try it out and let me know if you have any questions :)
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
};

export default Email;
