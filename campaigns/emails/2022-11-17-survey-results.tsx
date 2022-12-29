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
  const link = 'https://rd8yncr0wr5.typeform.com/react-email';

  return (
    <Html>
      <Head />
      <Preview>
        The results from the React Email questionnaire have been insane, with
        206 responses so far.
      </Preview>
      <Section style={main}>
        <Text style={body}>Hey, it's Zeno Rocha.</Text>
        <Text style={body}>
          The results from the React Email{' '}
          <Link href={link}>questionnaire</Link> have been insane, with{' '}
          <b>206 responses</b> so far.
        </Text>
        <Text style={body}>
          There were a lot of interesting insights and ideas, so I wanted to
          share some of them with you...
        </Text>
        <Text style={body}>
          <b>1. What do you hate the most about email development?</b>
        </Text>
        <Text style={body}>
          <em>
            "Writing tables inside tables inside tables. My goodness, I hate it
            so much."
          </em>
        </Text>
        <Text style={body}>
          <b>2. What email service provider do you use?</b>
        </Text>
        <Img
          src="/static/survey-email-provider.png"
          alt="SendGrid: 52.3% / AWS SES: 35.5% / Mailchimp: 29.4%"
          width="532"
          height="232"
        />
        <Text style={body}>
          <b>3. How do you develop email templates?</b>
        </Text>
        <Img
          src="/static/survey-email-dev.png"
          alt="Pure HTML/CSS: 66.3% / MJML: 17.8% / Drag-n-drop: 12.9%"
          width="532"
          height="223"
        />
        <Text style={body}>
          A lot of people also mentioned testing as one of the biggest pain
          points:
        </Text>
        <Text style={body}>
          <em>"Styling is hard, testing is even harder."</em>
        </Text>
        <Text style={body}>
          We're working on something to help with this right now, and we plan to
          share an update next week :)
        </Text>
        <Text style={body}>Thanks again for the amazing support so far.</Text>
        <Footer />
      </Section>
    </Html>
  );
};

const main = {
  backgroundColor: '#ffffff',
};

const body = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

export default Email;
