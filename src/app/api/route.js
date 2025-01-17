import dbConnect from "@/lib/dbConnections"
import Link from "@/Models/linkModel"
import { NextResponse } from "next/server"


export const POST=async(req)=>{

  try {
    const body=await req.json()
    await dbConnect()
  
    const userData=await new Link(body);
    await userData.save()
      return NextResponse.json(
          {
            message: "data saved successfully",
            success: true,
            data:userData
          },
      )   
  
    
  } catch (error) {
    return NextResponse.json(
      {
        message: "failed to save data",
        success:false,

      },
  ) 
    
  }
 
}