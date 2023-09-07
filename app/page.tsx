import { FifthSection } from '@/components/FifthSection'
import { Footer } from '@/components/Footer'
import { FourthSection } from '@/components/FourthSection'
import { HeroSection } from '@/components/HeroSection'
import { SecondSection } from '@/components/SecondSection'
import { ThirdSection } from '@/components/ThirdSection'
import { Metadata } from 'next'

export default function Home() {
    return (
        <main>
            <HeroSection />
            <SecondSection />
            <ThirdSection />
            <FifthSection />
        </main>
    )
}
