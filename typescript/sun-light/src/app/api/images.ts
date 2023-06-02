import fs from 'fs'
import path from 'path'

interface ImageData {
  name: string;
  path: string;
}

interface SliderData {
  [sliderDirectory: string]: ImageData[];
}

function getImagesData(): SliderData {
  const imagesPath = path.join(process.cwd(), 'public', 'images')

  const sliderDirectories = fs.readdirSync(imagesPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  const imagesData: SliderData = {}

  for (const sliderDirectory of sliderDirectories) {
    const sliderPath = path.join(imagesPath, sliderDirectory)
    const imageNames = fs.readdirSync(sliderPath)

    imagesData[sliderDirectory] = imageNames.map(imageName => ({
      name: imageName,
      path: path.join(sliderDirectory, imageName),
    }))
  }

  return imagesData
}
 console.log(getImagesData())