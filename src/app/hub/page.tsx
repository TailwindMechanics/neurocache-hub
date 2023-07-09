//path: src\app\hub\page.tsx

"use client"

import { useRouter } from 'next/router';
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
    const router = useRouter();
  return <div>page</div>
}

export default page