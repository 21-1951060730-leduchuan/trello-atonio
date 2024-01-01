import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ListContainer } from "./_component/list-container";

interface BoardIdProps {
  params: { boardId: string };
}
const BoardIdPage = async ({ params }: BoardIdProps) => {
  const { orgId } = auth();
  if (!orgId) {
    redirect("/select-org");
  }
  const lists = await db.list.findMany({
    where: { boardId: params.boardId, board: { orgId } },
    include: { cards: { orderBy: { order: "asc" } } },
    orderBy:{order:'asc'}
  });
  return (
  <div className="p-4 h-[670px] overflow-x-auto">
    <ListContainer boardId={params.boardId} data={lists}/>
  
  </div>
  )
};
export default BoardIdPage;
