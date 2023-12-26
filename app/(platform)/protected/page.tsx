/* eslint-disable @next/next/no-async-client-component */
'use client'
import { UserButton } from "@clerk/nextjs"

const ProtectedPage =  () => {

    return (
        <div>
          <UserButton afterSignOutUrl="/"/>
        </div>
    )
}
export default ProtectedPage