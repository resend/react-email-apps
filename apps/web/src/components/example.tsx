/* eslint-disable react/jsx-no-target-blank */
import * as React from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import { Text } from 'design-system';

type ExampleElement = React.ElementRef<'a'>;

interface ExampleProps {
  id: string;
  name: string;
  className?: string;
}

const GITHUB_URL =
  'https://github.com/zenorocha/react-email-apps/blob/main/apps/demo';

export const Example = React.forwardRef<ExampleElement, Readonly<ExampleProps>>(
  ({ className, ...props }, forwardedRef) => (
    <a
      ref={forwardedRef}
      href={`${GITHUB_URL}/${props.id}.tsx`}
      target="_blank"
      className={classnames(
        'bg-gradient hover:bg-gradientHover focus:bg-gradientHover mb-8 flex w-full flex-col rounded-md border border-[#34343A] backdrop-blur-[20px] focus:outline-none focus:ring-2 focus:ring-white/20',
        className,
      )}
    >
      <Image
        src={`/static/examples/${props.id}.png`}
        alt={props.name}
        className="rounded-t-md"
        width="450"
        height="300"
      />
      <Text className="p-4" color="white" size="3">
        {props.name}
      </Text>
    </a>
  ),
);

Example.displayName = 'Example';
