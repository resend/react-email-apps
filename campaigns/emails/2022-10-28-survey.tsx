import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Link } from '@react-email/link';
import { Text } from '@react-email/text';
import { Section } from '@react-email/section';
import { Preview } from '@react-email/preview';
import Footer from './components/footer';
import * as React from 'react';

const Email = () => {
  const link = 'https://rd8yncr0wr5.typeform.com/react-email';

  return (
    <Html>
      <Head />
      <Preview>
        We have a massive backlog in front of us, so we would love your input to
        help us prioritize what's most important to you.
      </Preview>
      <Section style={main}>
        <Text style={body}>Hey, it's Zeno Rocha.</Text>
        <Text style={body}>
          We've been hard at work building React Email for you.
        </Text>
        <Text style={body}>
          <em>
            Quick question: Which email service do you use? SendGrid? Postmark?
          </em>
        </Text>
        <Text style={body}>
          We have a massive backlog in front of us, so we would love your input
          to help us <b>prioritize what's most important to you</b>.
        </Text>
        <Text style={body}>
          By filling up this form, you will also move up the waiting list, so
          what are you waiting for?
        </Text>
        <Text style={body}>
          <Link href={link}>{link}</Link>
        </Text>
        <Text style={body}>Thanks!</Text>
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
