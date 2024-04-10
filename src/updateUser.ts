import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type updateParams={
 firstname:string,
 lastname?:string
}

const updateUser=async(username:string,{
 firstname
}:updateParams)=>{
 try{

  const response =await prisma.user.update({
   where: {
    username
  },
  data: {
    firstname,

  }
  })

  console.log(response)

 }catch(err:any){
  console.error(err.message)
 }

}

updateUser("yuvraj@gmail.com",{
 firstname:"Signham"
})