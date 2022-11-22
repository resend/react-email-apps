import React from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import Link from 'next/link';
import { Anchor, Text } from 'design-system';

type FooterElement = React.ElementRef<'footer'>;
type RootProps = React.ComponentPropsWithoutRef<'footer'>;

export const Footer = React.forwardRef<FooterElement, Readonly<RootProps>>(
  ({ className, ...props }, forwardedRef) => (
    <footer
      ref={forwardedRef}
      className={classnames(
        'flex h-[80px] items-center justify-center text-center',
        className,
      )}
      {...props}
    >
      <Text className="inline-flex items-center gap-2">
        Created by{' '}
        <Link passHref legacyBehavior href="https://twitter.com/bukinoshita">
          <Anchor appearance="white" className="inline-flex items-center gap-2">
            <Image
              className="border-slate-7 inline-block rounded-full border"
              src="/static/bu.jpg"
              alt={''}
              width="20"
              height="20"
            />
            Bu Kinoshita
          </Anchor>
        </Link>{' '}
        and{' '}
        <Link passHref legacyBehavior href="https://twitter.com/zenorocha">
          <Anchor appearance="white" className="inline-flex items-center gap-2">
            <Image
              className="border-slate-7 inline-block rounded-full border"
              src="/static/zeno.jpg"
              alt={''}
              width="20"
              height="20"
            />
            Zeno Rocha
          </Anchor>
        </Link>
      </Text>
    </footer>
  ),
);

Footer.displayName = 'Footer';
