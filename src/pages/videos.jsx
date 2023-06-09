import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function Coaching() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Alexis Page</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>
      <SimpleLayout
        title="Thanks for subscribing."
        intro="I’ll send you an email any time I publish a new blog post, release a new Video or article, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
