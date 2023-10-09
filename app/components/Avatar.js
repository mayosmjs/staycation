'use client'
import Image from "next/image"
import { useSession } from "next-auth/react";
const Avatar = () => {
const { data: session } = useSession();

  return (
    <div>
        <Image src={session?.user.image == null || undefined ? '/avatar.jpg' : session?.user.image} alt='avatar' width={30} height={30} className="rounded-full"></Image>
    </div>
  )
}

export default Avatar