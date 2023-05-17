import Icon from './icon'

const excerpt = ""

const ContactPage = () => {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            Contact
          </h3>
          <div className="mb-4 text-lg flex items-center">
            <Icon platform={"Instagram"} picture={"/assets/icons/instagram.png"} /> 
            <a
            href="https://www.instagram.com/yogi_hadley/"
            className="hover:underline color:blue"
            >
            @yogi_hadley
            </a>
          </div>
          <div className="mb-4 text-lg flex items-center">
            <Icon platform={"Email"} picture={"/assets/icons/email.jpeg"} /> 
            yogihadley@gmail.com
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
