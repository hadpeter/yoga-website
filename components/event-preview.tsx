import Avatar from './avatar'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import SignupButton from './signup-button'

type Props = {
  key: string
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  signupForm: string
}

const EventPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  signupForm
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        {date}
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
      {signupForm ? (
        <SignupButton url={signupForm}></SignupButton>
        ): <span/>}
    </div>
  )
}

export default EventPreview
