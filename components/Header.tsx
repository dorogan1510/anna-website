'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '@/public/img/logo.png'

export const Header = () => {
    const headerLinks = [
        {
            id: 1,
            name: 'Отзывы',
            href: '#id1',
        },
        {
            id: 2,
            name: 'Преподаватели',
            href: '#id2',
        },
        {
            id: 3,
            name: 'Курcы и цена',
            href: '#id3',
        },
        {
            id: 4,
            name: 'Контакты',
            href: '#id4',
        },
        {
            id: 5,
            name: 'О школе',
            href: '#id5',
        },
    ]

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <header className=' mx-4 bg-white rounded-xl'>
            <Disclosure as='nav' className='text-black'>
                {({ open }) => (
                    <>
                        <div className='mx-auto max-w-7xl px-2 md:px-6 lg:px-8'>
                            <div className='relative flex h-16 items-center justify-between'>
                                <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 '>
                                        <span className='absolute -inset-0.5' />

                                        {open ? (
                                            <XMarkIcon
                                                className='block h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className='block h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className='flex flex-1 items-center justify-end md:items-stretch md:justify-between'>
                                    <div className='flex flex-shrink-0 items-center'>
                                        <Link href={'/'}>
                                            <Image
                                                src={logo}
                                                alt={'logo'}
                                                className='w-[5rem] lg:w-[8rem] h-auto'
                                            ></Image>
                                        </Link>
                                    </div>
                                    <div className='hidden md:ml-6 md:flex md:justify-center md:items-center'>
                                        <div className='flex justify-between items-center gap-10 text-lg'>
                                            {headerLinks.map((data: any) => (
                                                <Link
                                                    key={data.id}
                                                    href={data.href}
                                                    className='font-bold hover:text-black/70 transition'
                                                >
                                                    {data.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <Link
                                        href={'tel:+79493780380'}
                                        target='_blank'
                                        className='hidden text-lg lg:block p-2 bg-sky-400 hover:bg-sky-300 transition text-white font-semibold rounded-md'
                                    >
                                        +7(949)378-03-80
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className='md:hidden'>
                            <div className='space-y-1 px-2 pb-3 pt-2'>
                                {headerLinks.map(data => (
                                    <Disclosure.Button
                                        key={data.name}
                                        as='a'
                                        href={data.href}
                                        className={classNames(
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                    >
                                        {data.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </header>
    )
}
