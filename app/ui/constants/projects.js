import {
  jolcIcon,
  koloEmpresasIcon,
  miniTranslatorIcon,
  quizGameIcon
} from '#/constants/icons'
import images from '#/constants/images'

const projects = [
  {
    name: 'KOLO Empresas',
    year: 2023,
    web: 'https://info.kolo-app.com',
    code: null,
    technologies: ['ReactJS', 'Redux', 'Java', 'MySQL', 'AWS'],
    icon: koloEmpresasIcon,
    images: images.projects.koloEmpresas
  },
  {
    name: 'Quiz Game',
    year: 2023,
    web: 'https://quiz.nanndo54.dev/',
    code: 'https://github.com/nanndo54/quiz-game',
    technologies: ['ReactJS', 'Redux', 'HTML', 'CSS'],
    icon: quizGameIcon,
    images: images.projects.quizGame
  },
  {
    name: 'Mini Translator',
    year: 2022,
    web: 'https://translator.nanndo54.dev/',
    code: 'https://github.com/nanndo54/mini-translator',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    icon: miniTranslatorIcon,
    images: images.projects.miniTranslator
  },
  {
    name: 'JOLC',
    year: 2022,
    web: 'https://jolc.nanndo54.dev/',
    code: 'https://github.com/nanndo54/jolc',
    technologies: ['ReactJS', 'Redux', 'Python', 'HTML', 'CSS'],
    icon: jolcIcon,
    images: images.projects.jolc
  }
]

export default projects
