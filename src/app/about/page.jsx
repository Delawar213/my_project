import Image from "next/image"
import styles from "./about.module.css"

const About = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
      About page  Image <Image src="https://images.pexels.com/photos/18069859/pexels-photo-18069859/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-explores-how-humans-can-creatively-collaborate-with-artificial-general-intelligence-agi-in-the-future-and-how-it-can.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="no" fill></Image>
      </div>
    </div>
  )
}

export default About
