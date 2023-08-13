import emoji1 from '@/public/img/2-section/emoji-1.png'
import emoji2 from '@/public/img/2-section/emoji-2.png'
import emoji3 from '@/public/img/2-section/emoji-3.png'
import emoji4 from '@/public/img/2-section/emoji-4.png'
import img1 from '@/public/img/2-section/img1.jpg'
import Image from 'next/image'
import Link from 'next/link'

export const SecondSection = () => {
    return (
        <div className='mb-4 my-0 mx-auto max-w-7xl'>
            <div className='px-4'>
                <div className=' lg:max-w-5xl mx-auto mt-[-2rem] mb-4 px-4 py-6 flex flex-col lg:flex-row justify-between items-center gap-4 bg-sky-400 text-white rounded-3xl border-2 border-white text-center'>
                    <Link
                        className='order-2 lg:order-1 flex-1 p-4 mr-4 bg-green-700 hover:bg-green-600 transition text-2xl rounded-2xl'
                        href={
                            'https://docs.google.com/forms/d/1pFd-eVEa1BKra1vNXVA5ZvFRaeiKQpRC-mJh9m_jAOg/edit?pli=1'
                        }
                        target='_blank'
                    >
                        Оставить заявку
                    </Link>
                    {/* <div className='order-2 hidden lg:block border-2 h-[60px] border-white rounded-sm '></div> */}
                    <div className='order-3 flex-1 text-3xl px-2 '>
                        Сделай вклад в свое будущее уже сейчас
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center gap-4 px-4'>
                <Image
                    src={img1}
                    alt={'image'}
                    className='hidden lg:block'
                ></Image>
                <div className='text-base mx-auto'>
                    <div className='flex justify-start items-center p-1 mb-6 rounded-xl bg-sky-400 text-white'>
                        <Image
                            src={emoji1}
                            alt={''}
                            className='w-16 h-16'
                        ></Image>
                        <p>
                            &quot;Учу английский много лет, но боюсь
                            говорить&quot;
                        </p>
                    </div>
                    <div className='flex justify-start items-center p-1 mb-6 rounded-xl bg-sky-400 text-white'>
                        <Image
                            src={emoji2}
                            alt={''}
                            className='w-16 h-16'
                        ></Image>
                        <p>
                            &quot;Мой ребёнок не хочет заниматься
                            английским!&quot;
                        </p>
                    </div>
                    <div className='flex justify-start items-center p-1 mb-6 rounded-xl bg-sky-400 text-white'>
                        <Image
                            src={emoji3}
                            alt={''}
                            className='w-16 h-16'
                        ></Image>
                        <p>
                            &quot;Занимаемся английским с репетитором, а
                            результата так и нет!&quot;
                        </p>
                    </div>
                    <div className='flex justify-start items-center p-1 mb-6 rounded-xl bg-sky-400 text-white'>
                        <Image
                            src={emoji4}
                            alt={''}
                            className='w-16 h-16'
                        ></Image>
                        <p>
                            &quot;Мы устали делать домашку по английскому до
                            ночи всей семьей!&quot;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
