import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';

const Email = () => {
  const docsLink = 'https://react.email/docs';
  const demoLink = 'https://demo.react.email/preview/vercel-invite-user';

  return (
    <Html>
      <Head />
      <Preview>Today we're launching the React Email documentation...</Preview>
      <Section style={main}>
        <Text style={body}>Hey, it's Zeno Rocha.</Text>
        <Text style={body}>I have some big news to share...</Text>
        <Text style={body}>Today we're launching the React Email documentation: <Link href={docsLink}>react.email/docs</Link> 🎉</Text>
        <Link href={docsLink}>
          <Img src="https://assets.react.email/campaigns/launch-docs.png" alt="React Email Docs" width="600" height="371" />
        </Link>
        <Text style={body}>We spent a lot of time thinking about what's the best way to get started, and we came up with something similar to Create React App.</Text>
        <Text style={body}>To start using React Email, you can run:</Text>
        <Text><code style={code}>npx create-email@latest</code></Text>
        <Text style={body}>This will generate a folder with a few pre-built templates. After you install the dependencies and run this app locally, this is what you'll see: <Link href={demoLink}>demo.react.email</Link></Text>
        <Link href={demoLink}>
          <Img src="https://assets.react.email/campaigns/launch-demo.png" alt="React Email Local Server" width="600" height="371" />
        </Link>
        <Text style={body}>We built this preview server with live reload for quick development. That way, you don't need to keep sending real emails to test your templates. Everything happens in the browser.</Text>
        <Text style={body}>Give it a try and let me know what you think :)</Text>
        <Text style={body}>Happy coding!</Text>
        <Text style={body}>P.S.: Last Saturday, I gave a talk about all this at React Conf Brazil. If you speak pt-br, you can <Link href="https://youtu.be/rQFupuVA5XQ">watch it on YouTube</Link>. 🇧🇷</Text>
        <Hr />
        <Text style={footer}>You are receiving this email because you opted in at react.email</Text>
        <Text style={footer}>185 Royal Way - Upland, CA 91786</Text>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: '#ffffff',
};

const body = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const code = {
  display: 'inline-block',
  padding: '12px 20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};


const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
};

export default Email;