import { Container } from '@react-email/container';
import { Button } from '@react-email/button';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>Yelp recent login</Preview>
      <Section style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img src="/static/yelp-logo.png" />
          </Section>

          <Section style={content}>
            <Img width={620} src="/static/yelp-header.png" />

            <Section style={boxInfos}>
              <Section>
                <Text
                  style={{
                    ...paragraph,
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Hi Zeno,
                </Text>
                <Text
                  style={{
                    ...paragraph,
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  We noticed a recent login to your Yelp account.
                </Text>
              </Section>

              <Section>
                <Text style={paragraph}>
                  <b>Time: </b>Today, September 7, 2022, 10:58 am {'('}
                  US/Pacific
                  {')'}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Device: </b>Chrome on Mac OS X
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Location: </b>Upland, California, United States
                </Text>
                <Text
                  style={{
                    ...paragraph,
                    color: 'rgb(0,0,0, 0.5)',
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  *Approximate geographic location based on IP address:
                  47.149.53.167
                </Text>
              </Section>

              <Text style={paragraph}>
                If this was you, there's nothing else you need to do.
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                If this wasn't you or if you have additional questions, please
                see our support page.
              </Text>
              <Section style={containerButton}>
                <Button style={button}>Learn More</Button>
              </Section>
            </Section>
          </Section>

          <Section style={containerImageFooter}>
            <Img width={620} src="/static/yelp-footer.png" />
          </Section>

          <Text
            style={{
              ...paragraph,
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
            U.S.A. | www.yelp.com
          </Text>
        </Container>
      </Section>
    </Html>
  );
}

const fontFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

const main = {
  backgroundColor: '#fff',
};

const paragraph = {
  fontSize: 16,
  fontFamily,
};

const container = {
  width: '620px',
  margin: '0 auto',
};

const logo = {
  padding: '30px 20px',
};

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};

const button = {
  backgroundColor: '#e00707',
  padding: '12px 30px',
  borderRadius: 3,
  color: '#FFF',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  fontFamily,
  cursor: 'pointer',
};

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
};

const boxInfos = {
  padding: '20px 40px',
};

const containerImageFooter = {
  padding: '45px 0 0 0',
};
