import CoverImage from './cover-image'

const HomePage = () => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug ="assets/pictures/home.JPEG" title={"About"} src={"/assets/pictures/home.JPEG"}/>
      </div>
    </section>
  )
}

export default HomePage
