import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logo from '@/images/wendyLogo.jpeg'

const international = [
  {
    name: "Kellogg's Pacific Rim Championships Everett, Wash",
    description: 'Result: ',
    result: '1st-Team; 2nd-RB',
    link: {
      href: 'https://usagym.org/pages/athletes/athleteListDetail.html?id=156422',
      label: 'usagym',
    },
    logo: logo,
  },
  {
    name: '24th International Tournament of Pas-de-Calai France',
    description: 'Result: ',
    result: ' 7th-AA',
    link: { href: '#', label: 'France' },
    logo: logo,
  },
  {
    name: 'Montreal International Invitational',
    description: 'Result: ',
    result: '1st-AA, CL; 2nd-BA, RB; 3rd-HP',
    link: { href: '#', label: 'Canada' },
    logo: logo,
  },
  {
    name: 'Junior Pan American Championships, Havana, Cuba',
    description: 'Result: ',
    result: '1st-Team; 4th-AA; 5th-BA, CL',
    link: { href: '#', label: ' Havana, Cuba' },
    logo: logo,
  },
  {
    name: '7th International Tournament, Espinho, Portugal',
    description: 'Result: ',
    result: '3rd-RP; 6th-AA (Jr. Div.)',
    link: { href: '#', label: 'Portugal' },
    logo: logo,
  },
  {
    name: 'Pan American Club Championships, San Juan, Puerto Rico',
    description: 'Result: ',
    result: '1st-BA, RB; 6th-HP; 7th-AA (Jr. Div.)',
    link: { href: '#', label: 'Puerto Rico' },
    logo: logo,
  },
]

const national = [
  {
    name: 'Rhythmic Invitational',
    description: 'Lake Buena Vista, Fla;',
    result: '5th-CL, RB; 8th-AA, BA',
    link: {
      href: 'https://usagym.org/pages/athletes/athleteListDetail.html?id=156422',
      label: 'usagym',
    },
    logo: logo,
  },
  {
    name: 'Rhythmic Challenge, Colorado Springs',
    description: 'Result: ',
    result: '4th-BA; 5th-HP, RB; 7th-AA',
    link: {
      href: 'https://usagym.org/pages/athletes/athleteListDetail.html?id=156422',
      label: 'Colorado',
    },
    logo: logo,
  },
  {
    name: 'Visa Championships, Saint Paul, Minn',
    description: 'Result: ',
    result: '2nd-BA, CL, RB; 3rd-AA; 4th-HP',
    link: { href: '#', label: 'Saint Paul, Minn' },
    logo: logo,
  },
  {
    name: 'National Qualifier, Downers Grove, Ill',
    description: 'Result: ',
    result: '3rd-AA, HP, RB; 4th-BA',
    link: { href: '#', label: 'Chicago' },
    logo: logo,
  },
  {
    name: 'Rhythmic Challenge, Colorado Springs, Colo',
    description: 'Result: ',
    result: '3rd-AA, HP, RB; 4th-CL; 6th-BA',
    link: { href: '#', label: 'Colorado' },
    logo: logo,
  },
  {
    name: 'Visa Championships, Hartford, Conn',
    description: 'Result: ',
    result: '1st-HP; 2nd-BA; 3rd-AA, RP, CL (Jr. Div.)',
    link: { href: '#', label: 'Conn' },
    logo: logo,
  },
  {
    name: 'National Qualifier, Detroit, Mich',
    description: 'Result: ',
    result: '1st-AA (Jr. Div.)',
    link: { href: '#', label: 'Michigan' },
    logo: logo,
  },
  {
    name: 'Visa Championships, Dallas, Texas',
    description: 'Result: ',
    result: '2nd-HP; 4th-CL; 5th-AA, RP (Jr. Div.)',
    link: { href: '#', label: 'Texas' },
    logo: logo,
  },
  {
    name: 'National Qualifier, Plainfield, Ind',
    description: 'Result: ',
    result: '1st-CL; 2nd-AA; 3rd-HP; 4th-RP; 5th-BA (Jr. A) (Jr. Div.)',
    link: { href: '#', label: ' Ind' },
    logo: logo,
  },
  {
    name: 'Junior Olympic Optional Championships, Chicago, Ill',
    description: 'Result: ',
    result: '1st-AA, BA, RP, CL; 2nd-HP(T) (L-10) (Jr. Div.)',
    link: { href: '#', label: 'Chicago, Ill' },
    logo: logo,
  },
  {
    name: 'Rhythmic Invitational, Colorado Springs, Col',
    description: 'Result: ',
    result: '1st-AA, BA; 2nd-HP; 3rd-CL; 7th-RP (Jr. Div.)',
    link: { href: '#', label: 'Colo' },
    logo: logo,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Competitions() {
  return (
    <>
      <Head>
        <title>Projects - Alexis Page</title>
        <meta
          name="description"
          content="Things I’ve done trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve done trying to put my dent in the universe."
        intro="I’ve worked on tons of little competition
s over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            International Competition Results
          </h1>
          {international.map((competition) => (
            <Card as="li" key={competition.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 shadow-md shadow-indigo-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={competition.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={competition.link.href}>
                  {competition.name}
                </Card.Link>
              </h2>
              <div id="details" className="inline-block sm:inline-flex">
                <Card.Description>{competition.description}</Card.Description>
                <Card.Detail>{competition.result}</Card.Detail>
              </div>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{competition.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            National Competition Results
          </h1>
          {national.map((competition) => (
            <Card as="li" key={competition.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={competition.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={competition.link.href}>
                  {competition.name}
                </Card.Link>
              </h2>
              <div id="details" className="inline-flex space-x-2 ">
                <Card.Description>{competition.description}</Card.Description>
                <Card.Detail>{competition.result}</Card.Detail>
              </div>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{competition.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
