import {Card , List} from "@prisma/client"
export type ListWithCardS = List & {cards : Card[]}
export type CardWithList = Card & {list : List}