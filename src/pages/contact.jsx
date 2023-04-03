import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import avatarImage from '@/images/Alexis-Page-headshot.jpeg'
import clsx from 'clsx'
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
const ChoachingForm = () => {
  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Feel free to reach out
            </h3>
          </div>

          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-300 sm:pt-1.5"
              >
                First Name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 dark:bg-gray-400 dark:text-slate-700 sm:text-sm">
                    Jhon
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-300 sm:pt-1.5"
              >
                Last Name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 dark:bg-gray-400 dark:text-slate-700 sm:text-sm">
                    Kwame
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-300 sm:pt-1.5"
              >
                Email
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 dark:bg-gray-400 dark:text-slate-700 sm:text-sm">
                    jhonkwame@gm..
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-300 sm:pt-1.5"
              >
                About
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full max-w-lg rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
                <p className="mt-2 text-sm text-gray-400/90">
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
          <div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
            <div className="pt-6 sm:pt-5">
              <div role="group" aria-labelledby="label-email"></div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
export default function coaching() {
  return (
    <>
      <Head>
        <title>Speaking - Alexis Page</title>
        <meta
          name="description"
          content="I’ve coached in gimnastics all of my adult life all around the world and always gave my best to many athletes/students."
        />
      </Head>
      <SimpleLayout
        title="Contact Page"
        // intro="Gymnastics is a challenging and rewarding sport that requires dedication, discipline, and a passion for excellence. For young athletes and gymnasts, having a knowledgeable and experienced coach can make all the difference in achieving their goals and reaching their full potential. Coaching is essential in providing the guidance, support, and feedback necessary to develop proper techniques, improve strength and flexibility, and refine skills. Through personalized training and mentorship, coaches help young gymnasts build confidence, resilience, and a strong work ethic that will benefit them both in and out of the gym. A great coach inspires and motivates their athletes to strive for excellence, and helps them unlock their full potential in the sport they love."
      >
        <div className="space-y-20">
          <div className="space-y-20">
            <ChoachingForm />
          </div>
          <SpeakingSection title="">
            <figcaption class="mt-6 flex gap-x-4">
              <Image
                src={avatarImage}
                alt=""
                sizes={avatarImage.sizes ? '4rem' : '2.25rem'}
                className={clsx(
                  'h-9 w-9  rounded-full  bg-zinc-100 object-cover dark:bg-zinc-800 sm:h-16'
                )}
                priority
              />
              <div class="text-sm leading-6 dark:text-slate-400">
                <strong class="font-semibold text-gray-900 dark:text-slate-300">
                  Coach Alexis
                </strong>{' '}
                – Head Coach
              </div>
            </figcaption>

            <figure class="mt-16">
              <i
                class="aspect-video rounded-xl bg-gray-50 object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;w=1310&amp;h=873&amp;q=80&amp;facepad=3"
                alt=""
              />
              <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                <svg
                  class="mt-0.5 h-5 w-5 flex-none text-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Coach Alexis
              </figcaption>
            </figure>
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
