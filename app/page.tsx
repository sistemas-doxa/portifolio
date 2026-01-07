import { Hero } from "@/components/sections/Hero"
import { Products } from "@/components/sections/Products"
import { Features } from "@/components/sections/Features"
import { About } from "@/components/sections/About"
import { FAQ } from "@/components/sections/FAQ"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Features />
      <About />
      <FAQ />
      <CTA />
    </>
  )
}

