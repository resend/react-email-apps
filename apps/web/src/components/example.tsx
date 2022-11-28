import * as React from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import { Heading } from 'design-system';
import Link from 'next/link';

type ExampleElement = React.ElementRef<'a'>;

interface ExampleProps {
  id: string;
  name: string;
  className?: string;
}

const GITHUB_URL =
  'https://github.com/zenorocha/react-email-apps/blob/main/apps/demo';

export const Example = React.forwardRef<ExampleElement, Readonly<ExampleProps>>(
  ({ className, id, name, ...props }, forwardedRef) => (
    <Link
      ref={forwardedRef}
      className={classnames(
        'bg-gradient border-slate-6 flex w-full flex-col rounded-md border backdrop-blur-[20px] focus:outline-none focus:ring-2',
        'hover:bg-gradientHover',
        'focus:bg-gradientHover focus:ring-white/20',
        className,
      )}
      href={`${GITHUB_URL}/${id}.tsx`}
      target="_blank"
      {...props}
    >
      <Image
        src={`/static/examples/${id}.png`}
        alt={name}
        className="rounded-t-md"
        width="450"
        height="300"
      />
      <div className="p-4">
        <Heading size="2" weight="medium">
          {name}
        </Heading>
      </div>
    </Link>
  ),
);

Example.displayName = 'Example';
