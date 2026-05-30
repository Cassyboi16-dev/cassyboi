"use client"

import Image from "next/image"

export default function About() {
  return (
    <main>
      <Image
       src="/Abstract.jpg"
       width={300}
       height={300}
       alt="A Pic of Me"
       className="flex items-center justify-center rounded-md"
      />
    </main>
  )
}