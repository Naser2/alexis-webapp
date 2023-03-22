import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import React from 'react'
import ReactPlayer from 'react-player'
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/Alexis-Page-portrait.jpeg'
// import image1 from '@/images/alexis_gymnastics_1.jpeg'
// import image2 from '@/images/alexis_gymnastics_2.jpeg'
import image1 from '@/images/about-images/alexis1.png'
import image2 from '@/images/about-images/alexis2.png'
import image3 from '@/images/about-images/alexis3.png'
import image4 from '@/images/about-images/alexis4.png'
import image5 from '@/images/about-images/alexis5.png'
import image6 from '@/images/about-images/alexis_random_2.jpeg'
// import videoSrc from '../../public/amazing_kids_profile__alexis_page-540p.mp4'
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
]
const interest = {
  text: `<div>
  <h1 class="text-lg font-medium text-gray-500 sm:text-xl">Favorite Event:</h1>
      <p class="mt-1 text-lg text-gray-900 sm:text-xl">Event Ball<p>
       <h1 class="text-lg font-medium text-gray-500 sm:text-xl">Favorite school subject:</h1>
      <p class="mt-1 text-lg text-gray-900 sm:text-xl">Social Studies, Math Hobbies or</p>
      <h1 class="text-lg font-medium text-gray-500 sm:text-xl">favorite activities:</h1>
      <p>Writing Favorite music: Diverse tastes in music</p>
      <h1 class="text-lg font-medium text-gray-500 sm:text-xl">Favorite book(s): </h1>
      <p>So You Think You Can Dance Favorite Food: Sushi</p>
      <h1 class="text-lg font-medium text-gray-500 sm:text-xl> series Favorite TV show(s): </h1>
      <p>Sookie Stackhouse</p>
    </div>`,
}

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const CustomVideoPler = () => (
  <div>
    <video controls autoPlay style={{ width: '500px', height: '500px' }}>
      <source src="/amazing_kids_profile__alexis_page-540p.mp4" />
    </video>
    {/* <video
      src={require('../../public/amazing_kids_profile__alexis_page-540p.mp4')}
    /> */}
  </div>
)

export default function About() {
  const tabs = [
    { name: 'Recognition', href: '#', current: true, content: navigation },
    { name: 'Calendar', href: '#', current: false, content: navigation },
    { name: 'Interests', href: '#', current: false, content: interest },
  ]
  const files = [
    {
      name: 'coach alexis image',
      size: '3.9 MB',
      source: image2,
      current: true,
    },
    {
      name: 'coach alexis image',
      size: '3.9 MB',
      source: image3,
      current: true,
    },
    {
      name: 'coach alexis image',
      size: '3.9 MB',
      source: image4,
      current: true,
    },
    {
      name: 'coach alexis image',
      size: '3.9 MB',
      source: image5,
      current: true,
    },
    // More files...
  ]
  const inspiredFiles = [
    {
      name: 'coach alexis image',
      size: '3.9 MB',
      source: image1,
      current: true,
    },
    {
      name: 'coach alexis image',
      size: '3.9 MB',
      source: image6,
      current: true,
    },
  ]
  return (
    <>
      <Head>
        <title>About - Alexis Page</title>
        <meta
          name="description"
          content="I’m Alexis Page. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 gap-x-2 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-12  xl:gap-x-20">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
            <div
              id="about-name-wrap"
              className="mt-10 border-b border-slate-300 px-4 py-4"
            >
              <h1 class=" inline-flex truncate text-2xl font-bold text-gray-900 dark:text-white">
                Alexis Page
                <svg
                  class="ml-2 mr-1.5 mt-2 h-5 w-5 flex-shrink-0 text-blue-400"
                  x-description="Heroicon name: mini/check-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </h1>
              <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <dt class="text-sm font-medium text-gray-500">Location</dt>
                <span class="ml-3">New York, NY</span>
              </h2>{' '}
              <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="h-6 w-6 flex-none"
                >
                  <path
                    d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                    class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                  ></path>
                  <path
                    d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                    class="stroke-zinc-400 dark:stroke-zinc-500"
                  ></path>
                </svg>
                <span class="ml-3">Manager / Gymnastic Head Coach</span>
              </h2>
            </div>
          </div>
          <div className="-mt-14 max-w-xl sm:mx-6 sm:mt-2 xl:mx-0 2xl:mt-5">
            <div className="w-100 mb-4 rounded-md border-b border-gray-200 dark:bg-slate-300 sm:ml-10">
              <div className="mx-auto max-w-5xl px-4  sm:px-6 lg:px-8">
                <nav
                  className="-mb-px flex space-x-4  sm:space-x-4 "
                  aria-label="Tabs  "
                >
                  {tabs.map((tab) => (
                    <TabsModal
                      tab={tab}
                      content={tab.content}
                      key={tab.name}
                      tabName={tab.name}
                      href={tab.href}
                    />
                  ))}
                </nav>
              </div>
            </div>

            <div className="mt-10 lg:pl-20">
              <ul role="list">
                <SocialLink href="https://twitter.com" icon={TwitterIcon}>
                  Follow on Twitter
                </SocialLink>
                <SocialLink
                  href="https://instagram.com"
                  icon={InstagramIcon}
                  className="mt-4"
                >
                  Follow on Instagram
                </SocialLink>

                <SocialLink
                  href="https://linkedin.com"
                  icon={LinkedInIcon}
                  className="mt-4"
                >
                  Follow on LinkedIn
                </SocialLink>
                <SocialLink
                  href="mailto:alexis@page.gym"
                  icon={MailIcon}
                  className="mt-8 border-t border-zinc-100 pt-2 dark:border-zinc-700/40"
                >
                  alexis@page.gym
                </SocialLink>
              </ul>
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-slate-100 sm:text-5xl">
              I’m Alexis I live in New York City, where I design the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-slate-300">
              <p>
                I’ve loved athletism and gymnastics for as long as I can
                remember, and started my first program when I was 7 years old,
                just two weeks after I saw the US Openings...
              </p>
              <p>
                The only thing I loved more than gymnastics as a kid was my mom.
                When I was 8, I started practicing serioussly with a
                proffesional goal in mind. Jumping up and down doing handstands
                — hoping etc... It was a fun time but also challenging.
              </p>
              <ul
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8"
              >
                {files.map((file) => (
                  <li key={file.name} className="relative">
                    <div
                      className={clsx(
                        file.current
                          ? 'ring-2 ring-indigo-500 ring-offset-2'
                          : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                        'aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100'
                      )}
                    >
                      <Image
                        alt={file.name}
                        key={file.name}
                        size={file.size}
                        src={file.source}
                        optimized={true}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <p>
                As a child, I spent the next few summers indoors working on
                getting my skills together. I practiced intensily while taking
                gymnastic courses. I recovered from the multiple surgeries in
                the process but in the end it was all worthy. I can&lsq;t be
                thankfull enough to my mom who was constantly driving me to
                practice and taking time off work to drive me to practices and
                competitions.
              </p>
              <p>
                Today, I’m the founder of Alexis Page Gymnastics, and the head
                coach at the Wendy hillard Foundation where we’re working with
                gymnasts of all age range.. I have won several National and
                iternational Competitions and this reminds me that as long as
                there is a will you <em>can</em> make it.{' '}
              </p>
            </div>
          </div>
        </div>
        <div
          id="as-a-kid"
          className="relative mx-auto mt-10 max-w-7xl px-6 sm:mt-20 lg:px-2 "
        >
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl">
              Watch me as a kid
            </h2>
            <div className="mt-6 flex flex-col gap-y-20 gap-x-8 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600 dark:text-slate-300">
                  This is a video ofme preforming when she was 11 years old.{' '}
                  <br />
                  <br />
                  As much work as it took, I was always willing to put in the
                  effort and always enjoyed perfoming. I really enjoyed it.
                  <h4 className="hidden pt-10  text-base tracking-tight text-gray-500 dark:text-slate-200 sm:flex sm:text-xl">
                    Watch More videos on the videos page{' '}
                    <Link
                      class="group ml-4 mt-2 inline-flex h-9 items-center whitespace-nowrap rounded-full 
                      bg-black px-3 text-sm font-semibold
                       text-white hover:bg-slate-400 focus:outline-none focus:ring-2 
                       focus:ring-indigo-500 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-600 dark:hover:text-white
                        dark:focus:ring-slate-500"
                      href="/videos"
                    >
                      See Videos
                      <span class="sr-only">Visit the videos page</span>
                      <svg
                        class="ml-3 overflow-visible text-white group-hover:text-white dark:text-black dark:group-hover:text-slate-400"
                        width="3"
                        height="6"
                        viewBox="0 0 3 6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M0 0L3 3L0 6"></path>
                      </svg>
                    </Link>
                  </h4>
                </p>
                <div id="watch-more" className="min-[700px]:hidden"></div>
              </div>
              <div className="m:max-w-2xl -mt-20 hidden  sm:flex">
                <div className="player-wrapper  rounded-md">
                  <video
                    className="player-wrapper mr-4 rounded-md"
                    controls
                    src={'/amazing_kids_profile__alexis_page-540p.mp4'}
                    style={{ minWidth: 560, height: '400px' }}
                  />
                </div>

                <h4 className="mt-2 text-base  tracking-tight text-gray-500 dark:text-slate-200 sm:hidden sm:text-2xl">
                  {/* Watch More videos on the Videos page{' '} */}
                  <Link
                    class="group mx-2 mt-4 inline-flex h-9 items-center whitespace-nowrap rounded-full bg-black px-3 text-sm font-semibold 
                    text-white hover:bg-slate-400 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 xl:bg-transparent"
                    href="/videos"
                  >
                    See Videos
                    <span class="sr-only">Visit the videos page</span>
                    <svg
                      class="ml-3 overflow-visible text-white group-hover:text-white dark:text-black dark:group-hover:text-slate-400"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </Link>
                </h4>
              </div>
              <div
                id="mobile-video"
                className="player-wrapper -mt-20 rounded-md sm:hidden"
              >
                <video
                  className="player-wrapper mr-4 rounded-md"
                  controls
                  src={'/amazing_kids_profile__alexis_page-540p.mp4'}
                  style={{ minWidth: '320px', height: '330px' }}
                />
                <h4 className="text-basetracking-tight mt-2 hidden  text-gray-500 dark:text-slate-200 sm:text-2xl">
                  Watch More videos on the Videos page{' '}
                  <Link
                    class="group mx-2 mt-4 inline-flex h-9 items-center whitespace-nowrap rounded-full bg-black px-3 text-sm font-semibold text-white hover:bg-slate-400 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 xl:bg-transparent"
                    href="/videos"
                  >
                    See Videos
                    <span class="sr-only">Visit the videos page</span>
                    <svg
                      class="ml-3 overflow-visible text-white group-hover:text-white dark:text-black dark:group-hover:text-slate-400"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div
          id="mission"
          className="lg:mt-34 relative mx-auto mt-10  max-w-7xl px-6 sm:mt-20 lg:px-8 "
        >
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl">
              My mission
            </h2>
            <p className="text-xl leading-8 text-gray-600  dark:text-slate-300">
              my mission is to spread rhythmic gymnastic to children all over
              the world.
            </p>
            {/* <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8"
            > */}
            {/* {inspiredFiles.map((file) => ( */}
            <div
              key={inspiredFiles[1].name}
              className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            >
              <div
                className={clsx(
                  // inspiredFiles[1].current
                  //   ? 'ring-2 ring-indigo-500 ring-offset-2'
                  //   : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                  'aspect-w-12 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100'
                )}
              >
                <Image
                  alt={inspiredFiles[1].name}
                  key={inspiredFiles[1].name}
                  // size={inspiredFiles[1].size}
                  src={inspiredFiles[1].source}
                  optimized={true}
                />
              </div>
            </div>
            {/* ))} */}
            {/* </ul> */}
            <div className="mt-6 flex flex-col gap-y-20 gap-x-8 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600  dark:text-slate-300">
                  The practice of discipline transcends into characther and
                  character does indeed determine destiny. I want to train these
                  children an4 inspired to reach out for their highest
                  potential.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
          {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl">
            Thank you
          </h2> */}
        </div>
      </Container>
    </>
  )
}

const TabsModal = ({ content, href, tabName, tab }) => {
  console.log('content--', content.text)
  return (
    <>
      <Popover className="flex h-16 justify-between rounded-t-[10px]">
        <div className="flex items-center ">
          <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            <span
              key={tab.name}
              href={href}
              className={clsx(
                tab.current
                  ? 'border-pink-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium dark:text-slate-800 dark:text-slate-800'
              )}
            >
              {tabName}
            </span>
            {/* <Bars3Icon className="block h-6 w-6" aria-hidden="true" /> */}
          </Popover.Button>
        </div>
        <Transition.Root as={Fragment}>
          <div className="hidden:false ">
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay
                className="fixed inset-0 z-20 bg-black bg-opacity-25"
                aria-hidden="true"
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute top-0 right-0 z-30 w-full max-w-none origin-top transform p-2 transition"
              >
                <div className="divide-y divide-gray-200 rounded-lg rounded-lg rounded-t-[10px] bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="pb-2">
                    <div className="flex items-center justify-between bg-sky-100 px-4">
                      <div>{tabName}</div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                          <span className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                            Close
                          </span>
                          {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                        </Popover.Button>
                      </div>
                    </div>
                    <div
                      className="mt-3 min-h-[400px] space-y-1 py-10 px-4 sm:px-10 "
                      dangerouslySetInnerHTML={{
                        __html: content.text,
                      }}
                    >
                      {/* {content.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                        >
                          {item.name}
                        </a>
                      ))} */}
                    </div>
                  </div>
                  <div className="pt-4 pb-2">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={portraitImage}
                          alt="alexis-avatar"
                          height={200}
                          width={200}
                        />
                      </div>
                      {/* <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div> */}
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                        {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                      </button>
                    </div>
                    {/* <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div> */}
                  </div>
                </div>
              </Popover.Panel>
            </Transition.Child>
          </div>
        </Transition.Root>
      </Popover>
    </>
  )
}
