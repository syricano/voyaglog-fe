import about from "../assets/about.jpg"
import voyagStyle from "../style/voyagStyle"

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-10 bg-base-200 rounded shadow-md flex-1/2">
      <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-md animate-bounceOnce">About Voyaglog</h1>
      <p className="mb-4 text-lg leading-relaxed  hover:text-primary transition-colors duration-300 cursor-pointer">
        Welcome to Voyaglog — your go-to travel blog where we share amazing journeys, tips, and stories from around the world.
      </p>
      <p className="mb-4 text-lg leading-relaxed  hover:text-primary transition-colors duration-300 cursor-pointer">
        Our mission is to inspire adventure and provide practical advice for travelers of all kinds. Whether you’re a backpacker, a luxury traveler, or planning your first trip, Voyaglog is here to guide you every step of the way.
      </p>
      <p className="mb-4 text-lg leading-relaxed  hover:text-primary transition-colors duration-300 cursor-pointer">
        Founded by Anass Muhammad Ali, an avid traveler and storyteller, we bring you authentic experiences and useful insights to make your trips unforgettable.
      </p>
      <p className="mb-4 text-lg leading-relaxed  hover:text-primary transition-colors duration-300 cursor-pointer">
        Thank you for joining us on this journey — happy travels!
      </p>
      
      <img src={about} alt="About us" className={voyagStyle.img} />
     
      
    </div>
  )
}

export default About
