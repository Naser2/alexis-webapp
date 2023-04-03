import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import ImageInspiration from '@/images/about-images/alexis5.png'
import flowers from '@/images/marcel-marceaus-100th-birthday.png'
function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

const FoundationIntro = () => {
  return (
    <div className="relative mt-14 bg-white sm:mt-0 ">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {/* <img
              className="h-11"
              src=""
              alt="Your Company"
            /> */}
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                You can securely make donations here.{' '}
                <a
                  href="#"
                  className="whitespace-nowrap font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:mt-24 sm:mt-10 sm:text-6xl">
              Alexis Page Foundation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Alexis Page Foundation goal is to help foster gymnastics in
              circles where it might otherwise be practicaly impossible without
              help. You can securely make donations here to fund kids in need.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={ImageInspiration}
            sizes={ImageInspiration.sizes}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
export default function Foundation() {
  return (
    <>
      <Head>
        <title>Speaking - Alexis Page</title>
        <meta
          name="description"
          content="I’ve thought of other children who may own the situation that was once mine."
        />
      </Head>
      <SimpleLayout
        title="I’ve thought of other children who own the situation that was once mine."
        // intro="One of my favorite ways to share is to create an equal opportunity for those in need. That is why I started the Alexis Page Foundation"
      >
        <Image src={flowers} sizes={flowers.sizes} alt="flowers" />
        <p className="absolute top-40 mx-14 mb-10   mt-8 max-w-xl text-base  text-zinc-600 dark:text-zinc-400 sm:top-64 sm:mb-10 xl:mx-24 ">
          One of my favorite ways to share is to create an equal opportunity for
          those in need. That is why I started the Alexis Page Foundation
        </p>
        <FoundationIntro />
        <h1 className="mx-4 mt-24 mb-4 text-4xl font-bold tracking-tight text-indigo-500 sm:mt-10 sm:text-6xl">
          Become a donnor
        </h1>
        <h1 className="mx-4 mt-4 mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-400 sm:mt-10 sm:text-6xl ">
          Be an agent of change
        </h1>
        <div className="mx-4 space-y-16 ">Recent Donations</div>
        <div className="space-y-20">
          {/* <SpeakingSection title="Conferences">
            <Appearance
              href="#"
              title="In space, no one can watch you stream — until now"
              description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
              event="SysConf 2021"
              cta="Watch video"
            />
            <Appearance
              href="#"
              title="Lessons learned from our first product recall"
              description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
              event="Business of Startups 2020"
              cta="Watch video"
            />
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Bootstrapping an aerospace company to $17M ARR"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
              event="The Escape Velocity Show, March 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Programming your company operating system"
              description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
              event="How They Work Radio, September 2021"
              cta="Listen to podcast"
            />
          </SpeakingSection> */}
        </div>
      </SimpleLayout>
    </>
  )
}
