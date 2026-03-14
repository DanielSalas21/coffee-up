'use client'

import Identify from "@/components/identify";
import Start from "@/components/start";
import { useState } from "react";

export default function Home() {
  const [isOrdering, setIsOrdering] = useState<boolean>(false);
  // const [isIdentified, setIsIdentified] = useState<boolean>(false);
  // const [name, setName] = useState<string | null>(null);

  return (
    <div className='h-screen flex items-center justify-center'>
      {isOrdering && <Identify />}

      {!isOrdering && <Start setIsOrdering={setIsOrdering} />}
    </div>

  )

}
