import * as React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { Button, IconArrowRight } from 'design-system';

type MenuElement = React.ElementRef<'nav'>;
type RootProps = React.ComponentPropsWithoutRef<'nav'>;

interface MenuProps extends RootProps {}

const GITHUB_URL = 'https://github.com/zenorocha/react-email';
const DISCORD_URL = 'https://discord.com/invite/n2pWEjjNnD';

export const Menu = React.forwardRef<MenuElement, Readonly<MenuProps>>(
  ({ className, ...props }, forwardedRef) => (
    <nav
      ref={forwardedRef}
      className={classnames('flex items-center gap-6', className)}
      {...props}
    >
      <ul className="flex gap-2">
        <MenuItem href={GITHUB_URL}>GitHub</MenuItem>
        <MenuItem href={DISCORD_URL}>Discord</MenuItem>
      </ul>
      <span
        aria-hidden="true"
        className="bg-slate-6 mr-2 hidden h-5 w-px sm:!inline-block"
      />
      <Button asChild appearance="gradient" size="3">
        <Link href="https://react.email/docs">
          Go to Docs
          <IconArrowRight className="hidden sm:!inline-block" />
        </Link>
      </Button>
    </nav>
  ),
);

Menu.displayName = 'Menu';

type MenuItemElement = React.ElementRef<'li'>;
type ItemProps = React.ComponentPropsWithoutRef<'li'>;

interface MenuItemProps extends ItemProps {
  href: string;
}

const MenuItem = React.forwardRef<MenuItemElement, Readonly<MenuItemProps>>(
  ({ className, children, href, ...props }, forwardedRef) => (
    <li
      ref={forwardedRef}
      className="inline-flex items-center justify-center"
      {...props}
    >
      <Link
        className={classnames(
          'text-slate-12 inline-flex h-10 items-center justify-center rounded-md px-4 text-[14px] font-medium',
          'hover:bg-white/10',
          'outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20',
          className,
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  ),
);

MenuItem.displayName = 'MenuItem';
