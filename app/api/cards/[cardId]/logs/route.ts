import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { ENTITY_TYPE } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(
    request:Request,
    {params}:{params:{cardId:string}}//[cardId] route
){
    try {
        const {userId,orgId} = auth()
        if(!userId || !orgId){
            return new NextResponse("unauthorized")
        }
        const auditLogs = await db.auditLog.findMany({
            where:{
                orgId,
                entityId:params.cardId,
                entityType:ENTITY_TYPE.CARD,

            },
            orderBy:{
                createdAt:'desc'
            },
            take:3,
        })
        return NextResponse.json(auditLogs)
    } catch (error) {
        return new NextResponse("Internal Error",{status:500})
    }
}