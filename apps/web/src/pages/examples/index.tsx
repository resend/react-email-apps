import { Heading, Text } from 'design-system';
import { Example } from '../../components/example';
import { Footer } from '../../components/footer';
import { Topbar } from '../../components/topbar';
import Head from 'next/head';
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
  const title = 'Examples — React Email';
  const description = 'Open source templates built with React Email';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="h-screen-ios relative z-20 mx-auto flex max-w-7xl flex-col px-4">
        <Topbar />
        <div className="relative mx-auto flex max-w-3xl flex-col justify-center py-10">
          <div className="mb-12 max-w-[745px] text-center">
            <Heading size="8" className="mb-2 text-white">
              Examples
            </Heading>
            <Text size="4" className="text-slate-11">
              {description}
            </Text>
          </div>

          <div className="grid grid-cols-2 gap-8">
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
