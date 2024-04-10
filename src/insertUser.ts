import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


//Trying to insert the user
const insertUser=async(username:string, password:string, firstname:string, lastname:string)=>{

 try{

  const response=await prisma.user.create({
   data:{
    username,
    password,
    firstname,
    lastname
   }
  })

  console.log(response)

 }catch(err:any){
  console.error(err.message)
 }

}

insertUser("naruto@gmail.com","yuvraj@gmail.com","naruto","Raj")