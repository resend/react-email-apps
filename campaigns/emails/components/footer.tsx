import { Hr } from '@react-email/hr';
import { Text } from '@react-email/text';
import * as React from 'react';

const Footer = () => {
  return (
    <>
      <Hr />
      <Text style={footer}>
        You are receiving this email because you opted in at react.email
      </Text>
      <Text style={footer}>
        185 Royal Way - Upland, CA 91786
      </Text>
    </>
  );
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
};

export default Footer;