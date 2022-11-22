import { Button, Heading, IconArrowRight, Text } from 'design-system';
import { Code } from '../components/code';
import { Footer } from '../components/footer';
import { Pipe } from '../components/pipe';
import { Topbar } from '../components/topbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Web() {
  return (
    <>
      <div className="h-screen-ios relative z-20 mx-auto flex h-screen max-w-7xl flex-col justify-between px-4">
        <Topbar />
        <div className="relative mx-auto flex max-w-3xl flex-col justify-center">
          {/* <Pipe className="absolute left-0 -top-[100px] rotate-90 animate-[dash_10s]" />
          <Pipe className="absolute right-10 -bottom-[150px] rotate-90 animate-[dash_14s]" />
          <Pipe className="absolute -left-[200px] animate-[dash_16s]" />
          <Pipe className="absolute -right-[200px] rotate-45 animate-[dash_8s]" />
          <Pipe className="absolute right-10 -top-[100px] animate-[dash_10s]" />
          <Pipe className="absolute left-0 -bottom-[130px] rotate-45 animate-[dash_12s]" /> */}
          <div className="max-w-[745px] text-center">
            <Heading
              className="before:bg-shine relative mb-8 !text-white/80 before:absolute before:left-0 before:top-0 before:w-full before:animate-[shine_2s_ease-in-out] before:bg-[length:200%] before:bg-clip-text before:text-transparent before:content-['The_next_generation_of_writing_emails'] "
              size="10"
            >
              The next generation of writing emails
            </Heading>
            <Text size="5">
              A collection of high-quality, unstyled components for creating
              beautiful emails. It reduces the pain of coding responsive emails
              with dark mode support.
            </Text>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button asChild size="4">
              <Link href="https://react.email/docs">
                Explore components
                <IconArrowRight />
              </Link>
            </Button>
            <Code language="bash" className="hidden max-w-max md:!inline-flex">
              npm install @react-email/button
            </Code>
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
