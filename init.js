import fs from 'fs'
import { getPlaceholder } from './lib/get-placeholder.js'

import en from './i18n/locales/en/dictionary.json' assert { type: 'json' }
import es from './i18n/locales/es/dictionary.json' assert { type: 'json' }

export const dictionaries = {
  en,
  es
}

const treatImages = async (dictionary) => {
  if (Array.isArray(dictionary)) {
    return await Promise.all(dictionary.map(treatImages))
  } else if (typeof dictionary === 'object') {
    const { image, images, ...newDictionary } = dictionary
    for (let key in newDictionary) {
      newDictionary[key] = await treatImages(newDictionary[key])
    }

    if (image)
      if (image.ignorePlaceholder) {
        delete image.ignorePlaceholder
        newDictionary.image = image
      } else newDictionary.image = await getPlaceholder(image)
    if (images) {
      images[0] = await getPlaceholder(images[0])
      newDictionary.images = images
    }

    return newDictionary
  }

  return dictionary
}

const init = async () => {
  for (const locale in dictionaries) {
    const treatedDictionary = await treatImages(dictionaries[locale])
    fs.writeFile(
      `./i18n/locales/${locale}/transpiled-dictionary.json`,
      JSON.stringify(treatedDictionary, null, 2),
      (err) => {
        if (err) console.log(err)
      }
    )
  }
}

init()
