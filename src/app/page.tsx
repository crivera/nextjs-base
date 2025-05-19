import Image from 'next/image'
import { client } from '~/lib/orpc'

export default async function Page() {
  const data = await client.login.getUsers({ name: 'John Doe' })
  return (
    <main className="flex-1 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">
        Welcome to MyWebsite
      </h1>
      {data.map((user) => (
        <p key={user}>{user}</p>
      ))}
      <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        This is a simple welcome page. You can add more content here to
        introduce your website or showcase important features.
      </p>
      <div className="flex justify-center">
        <Image
          src="/images/placeholder.svg?height=400&width=600"
          alt="Placeholder Image"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>
    </main>
  )
}
