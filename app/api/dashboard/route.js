import dbConnect from "@/config/db";
import { doctorsModel } from "@/modal/doctor";
import { NextResponse } from "next/server";

dbConnect();

export const POST = async (req)=>{
    try {
        const body = await req.json();
        console.log("body", body);
        if(body.name && body.speciality && body.hospital && body.location && body.experience && body.schedule){
           const data = await doctorsModel.create(body);
           return NextResponse.json({message: "Doctor successfully added", data})
        }
        return NextResponse.json({message: "Please fill all the fields"});
    } catch (error) {
        return NextResponse.json({message: "Something went wrong", error: JSON.stringify(error)});
        
    }
}