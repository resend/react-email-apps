import * as React from 'react';
import { Logo } from 'design-system';
import classnames from 'classnames';
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
      <Logo />
      <Menu />
    </header>
  ),
);

Topbar.displayName = 'Topbar';
