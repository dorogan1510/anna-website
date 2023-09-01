import React from 'react'
import email from '@/public/img/footer/email.png'
import vk from '@/public/img/footer/vk.svg'
import telegram from '@/public/img/footer/telegram.svg'
import phone from '@/public/img/footer/phone.svg'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer id='id4' className='py-10'>
            <div className='flex flex-col lg:flex-row lg:justify-center items-center gap-4'>
                <Link
                    href={'https://vk.com/boomer_ang_school'}
                    target='_blank'
                    className='flex justify-center items-center gap-2'
                >
                    <Image src={vk} alt={'vk'} className='w-12 h-12'></Image>
                    <p className='font-bold'>vk.com/boomer_ang_school</p>
                </Link>
                <Link
                    href={'https://t.me/Boomerang_english_bot'}
                    target='_blank'
                    className='flex justify-center items-center gap-2'
                >
                    <Image
                        src={telegram}
                        alt={'vk'}
                        className='w-12 h-12'
                    ></Image>
                    <p className='font-bold'>t.me/Boomerang_english_bot</p>
                </Link>
                <Link
                    href={'tel:+79493780380'}
                    target='_blank'
                    className='flex justify-center items-center gap-2'
                >
                    <Image src={phone} alt={'vk'} className='w-12 h-12'></Image>
                    <p className='font-bold'>+7(949)378-03-80</p>
                </Link>
                <Link
                    href={'mailto:boomerang.online.school@gmail.com'}
                    target='_blank'
                    className='flex justify-center items-center gap-2'
                >
                    <Image src={email} alt={'vk'} className='w-12 h-12'></Image>
                    <p className='font-bold'>
                        boomerang.online.school@gmail.com
                    </p>
                </Link>
            </div>
        </footer>
    )
}
