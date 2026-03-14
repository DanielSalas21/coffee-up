'use client'

import BuildDrink from "@/components/build_drink";
import Identify from "@/components/identify";
import Start from "@/components/start";
import { useState } from "react";

export default function Home() {
  const [isOrdering, setIsOrdering] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  return (
    <div className='h-svh flex items-center justify-center'>
      {isOrdering && !name && <Identify setName={setName} />}

      {name && <BuildDrink name={name} />}

      {!isOrdering && <Start setIsOrdering={setIsOrdering} />}
    </div>

  )

}
