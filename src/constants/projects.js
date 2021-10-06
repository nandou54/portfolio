import typestyImg1 from '@img/typesty-img1.jpg'
import typestyImg2 from '@img/typesty-img2.jpg'

import translatorImg1 from '@img/translator-img1.jpg'
import translatorImg2 from '@img/translator-img2.jpg'

import regexiveImg1 from '@img/regexive-img1.jpg'
import regexiveImg2 from '@img/regexive-img2.jpg'

import jolcImg1 from '@img/jolc-img1.jpg'
import jolcImg2 from '@img/jolc-img2.jpg'

const projects = [
  {
    name: 'Typesty',
    description:
      'Interfaz web para ejecución de un lenguaje parecido a JavaScript. Facilita el manejo de varios archivos y el debug del lenguaje.',
    url: 'https://pabloc54.github.io/typesty/',
    technologies: ['ReactJS'],
    images: [typestyImg1, typestyImg2]
  },
  {
    name: 'Mini Translator',
    description:
      'Traductor en línea en tiempo real. Facilita la traducción entre más de 100 lenguajes, así como el dictado del texto, todo desde una interfaz de usuario minimalista e intuitiva.',
    url: 'https://pabloc54.github.io/translator/',
    technologies: ['JavaScript'],
    images: [translatorImg1, translatorImg2]
  },
  {
    name: 'Regexive',
    description:
      'Interfaz de escritorio para el testing de expresiones regulares. Facilita el manejo de varios archivos y el debug de expresiones regulares.',
    url: 'https://pabloc54.github.io/regexive/',
    technologies: ['Java'],
    images: [regexiveImg1, regexiveImg2]
  },
  // {
  //   name: 'Quiniela APP',
  //   description: 'Página web para un negocio de quinielas',
  //   url: 'https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/https://pabloc54.github.io/regexive/',
  //   technologies: ['ReactJS', 'Go', 'PL/SQL', 'Oracle Cloud'],
  //   images: [jolcImg1, jolcImg2]
  // },
  {
    name: 'JOLC',
    description:
      'Intérprete de un lenguaje de programación derivado de Julia, ejecutable en la web. Facilita el debug del lenguaje mediante reportes.',
    url: 'https://jolc2.herokuapp.com/',
    technologies: ['ReactJS', 'Redux', 'Python'],
    images: [jolcImg1, jolcImg2]
  }
]

export default projects
