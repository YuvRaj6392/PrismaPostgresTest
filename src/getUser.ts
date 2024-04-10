import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

const getUser=async(username:string)=>{
 try{

  const response=await prisma.user.findFirst({
   where: {
   username
  }
  })
  console.log(response)
 }catch(err:any){
  console.error(err.message)
 }
}

getUser("naruto@gmail.com")