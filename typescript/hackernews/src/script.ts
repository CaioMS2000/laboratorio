import { PrismaClient } from '@prisma/client'
 
const prisma = new PrismaClient()
 
async function main() {
    // const newLink = await prisma.link.create({
    //     data: {
    //       description: 'Fullstack tutorial for GraphQL',
    //       url: 'www.howtographql.com'
    //     }
    //   })
          
    const newComment = await prisma.comment.create({
        data: {
          body: 'Some comment',
          linkId: 1
        }
      })
      
    const allLinks = await prisma.link.findMany()
    const allComments = await prisma.comment.findMany()
    
    console.log(allLinks)
    console.log(allComments)
}
 
main()
  .finally(async () => {
    await prisma.$disconnect()
  })