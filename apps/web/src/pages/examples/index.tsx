import { Heading } from 'design-system';
import { Example } from '../../components/example';
import { Footer } from '../../components/footer';
import { Topbar } from '../../components/topbar';
import Image from 'next/image';

const items = [
  {
    id: 'notion-magic-link',
    name: 'Notion Magic Link',
  },
  {
    id: 'plaid-verify-identity',
    name: 'Plaid Verify Identity',
  },
  {
    id: 'stripe-welcome',
    name: 'Stripe Welcome',
  },
  {
    id: 'vercel-invite-user',
    name: 'Vercel Invite User',
  },
];

export default function Examples() {
  return (
    <>
      <div className="h-screen-ios relative z-20 mx-auto flex h-screen max-w-7xl flex-col px-4">
        <Topbar />
        <div className="relative mx-auto flex max-w-3xl flex-col justify-center">
          <div className="max-w-[745px] text-center">
            <Heading size="9" className="relative mb-2 text-white">
              Examples
            </Heading>
            <Heading size="4" className="text-slate-11 relative mb-8">
              Open source templates built with React Email
            </Heading>
          </div>

          <div className="mt-10 columns-1 gap-8 sm:columns-2">
            {items.map((item) => (
              <Example key={item.id} {...item} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
      <Image
        className="absolute top-[220px] left-0 z-[10] h-full w-full select-none md:top-0"
        fill
        priority
        src="/static/bg.png"
        alt={''}
        style={{ position: 'absolute' }}
      />
    </>
  );
}
