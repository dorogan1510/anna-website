import { Header } from '@/components/Header'
import style from './HeroSection.module.scss'

export const HeroSection = () => {
    return (
        <div className={style.heroSection}>
            <div className='max-w-7xl my-0 pt-4 mx-auto pb-10 2xl:h-[60rem]'>
                <Header />
                <div className='pt-12 px-12 text-white'>
                    <div className='text-3xl lg:text-5xl 2xl:text-7xl'>
                        Заговори на <br /> английском и немецком вместе с
                    </div>
                    <div className='text-5xl lg:text-7xl drop-shadow-[0_2px_2px_rgba(56,189,248,1)]'>
                        Boomerang
                    </div>
                    <hr className='h-2 w-80 mt-4 mb-10 bg-white rounded-sm' />
                    <div className='mb-4 text-xl lg:text-3xl 2xl:text-5xl font-bold max-w-2xl 2xl:max-w-5xl'>
                        <div>
                            Боитесь, что online обучение <br /> — деньги на
                            ветер?
                        </div>
                        <div>
                            Мы обучаем по уникальной программе, с которой наши
                            студенты всех возрастов говорят на английском и
                            немецком языках!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
