import * as React from 'react';
import { Badge, Logo } from 'design-system';
import classnames from 'classnames';
import Link from 'next/link';
import { Menu } from '../components/menu';

type TopbarElement = React.ElementRef<'header'>;
type RootProps = React.ComponentPropsWithoutRef<'header'>;

interface TopbarProps extends RootProps {}

export const Topbar = React.forwardRef<TopbarElement, Readonly<TopbarProps>>(
  ({ className, ...props }, forwardedRef) => (
    <header
      ref={forwardedRef}
      className={classnames(
        'flex h-[80px] items-center justify-between md:h-[100px]',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <Link href="/">
          <Logo />
        </Link>
        <Badge>Beta</Badge>
      </div>
      <Menu />
    </header>
  ),
);

Topbar.displayName = 'Topbar';
