import Helverse from "./Helverse.png";
import Gerich from "./Gerich.png";
import AI from "./GPT.png";

const header = {
  homepage: '/',
  title: 'DP.',
}

const about = {
  name: 'Dhruv Parmar',
  role: 'Front End Developer',
  description:
    'Hey, I am Dhruv! 🚀 I am a passionate React JS frontend developer who crafts sleek websites that blend creativity with functionality. With a love for clean code and user-friendly designs, I thrive on transforming complex ideas into intuitive digital experiences.',
  resume: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:400e1d9e-5f1c-441e-9381-fd7bb5f1ffb5',
  social: {
    linkedin: 'https://www.linkedin.com/in/dhruv-parmar-459289255',
    github: 'https://github.com/dparmar04',
  },
}

const projects = [
  {
    name: 'Helverse',
    img: Helverse,
    stack: ['ReactJS', 'CSS', 'Redux'],
    sourceCode: 'https://github.com/dparmar04/Helverse',
    livePreview: 'https://helverse.netlify.app',
  },
  {
    name: 'Gerich Restaurant',
    img: Gerich,
    stack: ['ReactJS', 'Tailwind'],
    sourceCode: 'https://github.com/dparmar04/GerichRestaurant',
    livePreview: 'https://gerich-restuarant-bydhruv.netlify.app/',
  },
  {
    name: 'GPT3',
    img: AI,
    stack: ['ReactJS', 'Tailwind', 'Framer-motion'],
    sourceCode: 'https://github.com/dparmar04/gpt3',
    livePreview: 'https://gpt3bydhruv.netlify.app/',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Figma',
  'React',
  'Redux',
  'Tailwind',
  'Material UI',
  'GitHub'
]

const contact = {
  email: 'dronix.dev@gmail.com',
}

export { header, about, projects, skills, contact }
