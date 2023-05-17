import Avatar from './avatar'


const excerpt1 = "I'm Hadley Peterson, a practicing yogi of 10 years. I primarily teach vinyasa, with training in vinyasa, \
restorative, ashtanga, trauma informed, and prenatal yoga. I am also trained in pranayama, use of mudras, activation of bandhas, \
meditation and the chakras.  \n I found yoga in Fall of 2013. Yoga has supported me through many phases of life and made me the \
woman I am today. To pay it forward, I pursued a 200 hour training through " 

const excerpt2 = " in Spring of 2023. Since then I aim to share my \
teachings with those around me to help others find yoga."

const AboutPage = () => {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            About
          </h3>
          <div className="mb-4 text-lg flex items-center">
            <Avatar name="Hadley Peterson" picture="/assets/pictures/profile.jpeg" />
            , RYT 200 Hours
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">
              {excerpt1}
              <a href="https://www.y7-studio.com/" className="hover:underline color:blue">Y7 Studios</a>
              {excerpt2}
            </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
