import EventPreview from './event-preview'
import type Post from '../interfaces/post'

type Props = {
    posts: Post[]
  }
  
const EventsPage = ({posts}: Props) => {
  return (
    <section>
    <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
      Practice with me
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
      {posts.map((post) => (
        <EventPreview
          key=''
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
          signupForm={post.signupForm}
        />
      ))}
    </div>
  </section>
  )
}

export default EventsPage