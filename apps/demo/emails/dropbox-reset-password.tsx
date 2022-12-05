import * as React from 'react';
import { Html } from '@react-email/html';
import { Head } from '@react-email/head';
import { Container } from '@react-email/container';
import { Img } from '@react-email/img';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import { Button } from '@react-email/button';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>Dropbox reset your password</Preview>
      <Section style={main}>
        <Container style={container}>
          <Img
            src="https://cfl.dropboxstatic.com/static/images/emails/glyph_116_98_m1.png"
            width="40"
            alt="Dropbox"
          />
          <table border={0} cellPadding="0" cellSpacing="10">
            <tr>
              <td>
                <br />
                <Text style={text}>Hi Zeno,</Text>
                <br />
                <Text style={text}>
                  Someone recently requested a password change for your Dropbox
                  account. If this was you, you can set a new password here:
                </Text>
                <br />
                <Button
                  style={button}
                  href="https://www.dropbox.com/l/AAD-jqnfHjlJUO9hMoWdydqe3u594O5FMiE/forgot_finish"
                >
                  Reset password
                </Button>
                <br />
                <Text style={text}>
                  If you don&apos;t want to change your password or didn&apos;t
                  request this, just ignore and delete this message.
                </Text>
                <br />
                <Text style={text}>
                  To keep your account secure, please don&apos;t forward this
                  email to anyone. See our Help Center for{' '}
                  <Link
                    style={anchor}
                    href="https://www.dropbox.com/l/AAAqid-_okKjW2byigTjZo7j4cPwJwLxdqY/help/365"
                  >
                    more security tips
                  </Link>
                  .
                </Text>
                <br />
                <Text style={text}>Happy Dropboxing!</Text>
              </td>
            </tr>
          </table>
        </Container>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  padding: '10px 0',
};

const container = {
  margin: '0 auto',
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  width: '600px',
  padding: '45px',
};

const text = {
  fontSize: '16px',
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
};

const button = {
  backgroundColor: '#007ee6',
  borderRadius: '4px',
  color: '#fff',
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '210px',
  padding: '14px 7px',
};

const anchor = {
  textDecoration: 'underline',
};
