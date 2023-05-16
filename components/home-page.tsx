import CoverImage from './cover-image'

const HomePage = () => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={"About"} src={"../public/assets/pictures/about.JPEG"}/>
      </div>
    </section>
  )
}

export default HomePage
