import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>
        Log in with this magic link.
      </Preview>
      <Section style={main}>
        <Container style={container}>
          <Img
            src="https://miro.medium.com/max/1024/1*ThvbH5hKHEM4jpuAqRNfBQ.png"
            width="170"
            height="50"
            alt="Koala"
            style={logo}
          />
          <Container style={container2}>
            <Text style={heading}>🪄 Your magic link</Text>
            <Link
            href="https://www.raycast.com"
            target="_blank"
            style={{
              fontSize: '22px',
              display: 'block',
              marginBottom: '16px',
              marginTop: '50px',
            }}
            >
                👉 Click here to sign in 👈
            </Link>
            <Text style={paragraph}>
                If you didn't request this, please ignore this email.
            </Text>
            <Text style={paragraph2}>
                Best,
                <br />
                - Raycast Team
            </Text>
            <Hr style={hr} />
            <Img
                src="https://miro.medium.com/max/1024/1*ThvbH5hKHEM4jpuAqRNfBQ.png"
                width={50}
                style={{
                    WebkitFilter: 'grayscale(100%)',
                    filter: 'grayscale(100%)',
                    marginBottom: '35px'
                }}
            />
            <Text style={footer}>Raycast Technologies Inc.</Text>
            <Text style={footer}>2093 Philadelphia Pike #3222, Claymont, DE 19703</Text>
          </Container>
        </Container>
      </Section>
    </Html>
  );
}

const fontFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

const main = {
    backgroundColor: '#ffffff',
    backgroundImage: 'url(https://ci5.googleusercontent.com/proxy/aK4MHkXhOLhD-fBGFTqQ1eYuKrX9vz7X4KqU86__z0ZVgPhYRO1eShT3hsiX5jH82wBpnAt6hEb1uHoeegzT3BHoeENi3YoxNVpkdOivKOC_KRhVHM2ezc-Gv1jELM-pzLVWh-P5QUp8kUZ3JfdhPICf21gM66NgoIbJW-_i6lWnKkRqvpI=s0-d-e1-ft#http://cdn.mcauto-images-production.sendgrid.net/ef379b8a298c6d3d/deb93c11-8a82-47c2-bcf5-4cdee8d820a6/1440x724.png), url("https://ci4.googleusercontent.com/proxy/gvEo8QunL-goa6twd_HDizIGrITPDyNeio0oZ5NO9cZDBt7wWGiz0mz3hD_XzF6tizUwweII5iPYrP-c7DqgJhKVwD6jhJmgHxRapKaiPNq4x80zLBK1OTZqsiMap4eKCiQ4Tix_1EnEJW2znxKDASZZWKP51uyU00plVeabi7hFafUIhaU=s0-d-e1-ft#http://cdn.mcauto-images-production.sendgrid.net/ef379b8a298c6d3d/51f59eca-c148-46b7-8037-58de51b9a0da/1440x440.png")',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat, no-repeat',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
    marginBottom: '60px',
    width: '60px',
    height: '60px',
    marginRight: '2px',
};

const paragraph = {
  fontFamily,
  fontSize: '18px',
  lineHeight: '26px',
};

const paragraph2 = {
  fontFamily,
  fontSize: '18px',
  lineHeight: '34px',
  margin: '40px 0px',
  marginBottom: '75px'
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  fontFamily,
  color: '#8898aa',
  fontSize: '12px',
  marginLeft: '4px'
};

const heading = {
    fontSize: '32px',
    fontWeight: 'bold',
    fontFamily: 'sans-serif'
}

const container2 = {
    margin: '0 10px'
}