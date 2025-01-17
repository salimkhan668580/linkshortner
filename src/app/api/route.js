import dbConnect from "@/lib/dbConnections"
import Link from "@/Models/linkModel"
import { NextResponse } from "next/server"



export const GET=async(req)=>{

  return NextResponse.json({

      message: "get form next response",
      success: true,
    
   
  })
}


export const POST=async(req)=>{

  try {
    // const body=await req.json()
    const body=await req.body;
    await dbConnect()
  
    const userData=await new Link(body);
    await userData.save()
      return NextResponse.json(
          {
            message: "data saved successfully",
            success: true,
            // data:userData
            data:body
 
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