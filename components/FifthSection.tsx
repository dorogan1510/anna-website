import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './FifthSection.module.scss'
import { Footer } from './Footer'

export const FifthSection = () => {
    return (
        <div className='max-w-7xl mx-auto relative'>
            <div className={style.fifthSection}></div>
            <div className='px-4'>
                <div className='mb-4 p-4 lg:p-2 flex flex-col lg:flex-row justify-between items-center gap-4 bg-sky-400 text-white rounded-xl'>
                    <p className='text-3xl text-center'>
                        Узнай свой уровень английского уже сейчас
                    </p>
                    <Link
                        href={'https://www.testwizard.ru/test.php?id=155026'}
                        target='_blank'
                        className='px-20 py-2 text-center font-bold bg-green-700 hover:bg-green-600 transition border-2 border-white text-2xl rounded-xl'
                    >
                        Пройти тест!
                    </Link>
                </div>
                <div id='id3' className='mb-10 text-center'>
                    <h2 className='mb-2 text-green-700 uppercase font-bold text-4xl'>
                        Тарифы
                    </h2>
                    <p className='text-green-700 text-xl'>
                        <span className='text-sky-400 font-bold'>
                            с доступом 24/7
                        </span>{' '}
                        <br />с любого устройства
                    </p>
                </div>
                <div className='mb-16 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-10'>
                    <div className='p-4 bg-sky-400/60 rounded-3xl max-w-md'>
                        <h3 className='mb-2 uppercase text-5xl font-bold text-white text-center drop-shadow-lg'>
                            Starter
                        </h3>
                        <p className='mb-4 text-center'>
                            Комплексная подготовка к началу курса английского в
                            школе
                        </p>
                        <p className='mb-4 text-lg text-green-700 font-bold'>
                            Возраст: 6-8 лет
                        </p>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>индивидуальное обучение с 0</p>
                        </div>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>
                                обучение основным навыкам: чтение, письмо,
                                говорение
                            </p>
                        </div>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>набор базового словарного запаса</p>
                        </div>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>введение основных грамматических конструкций </p>
                        </div>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>подключение к уроку в один клик</p>
                        </div>
                        <div className='py-4 max-w-xs mb-[-3rem] mx-auto bg-white text-sky-400 border-sky-400 border text-center rounded-xl font-bold text-xl'>
                            50 мин — 1500 рублей
                        </div>
                    </div>
                    <div className='p-4 lg:mt-[-3rem] border-2 border-green-700 bg-sky-400/60 rounded-3xl max-w-md'>
                        <div className='px-6 mb-2 w-fit bg-white text-sky-400 uppercase text-center text-xl mt-[-2rem] mx-auto rounded-md border border-green-700 font-semibold'>
                            Популярный
                        </div>
                        <h3 className='mb-2 uppercase text-5xl font-bold text-white text-center drop-shadow-lg'>
                            General
                        </h3>
                        <p className='mb-4 text-center'>
                            Курс общего английского и немецкого
                        </p>
                        <p className='mb-4 text-lg text-green-700 font-bold'>
                            Возраст: 9-15 лет
                        </p>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>индивидуальное обучение</p>
                        </div>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>
                                программа на основе учебников международного
                                образца
                            </p>
                        </div>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>повышаем средний балл за 3 месяца</p>
                        </div>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>развиваем все навыки</p>
                        </div>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>наглядный процесс в личном кабинете</p>
                        </div>
                        <div className='py-4 max-w-xs mb-[-3rem] mx-auto bg-white text-sky-400 border-sky-400 border text-center rounded-xl font-bold text-xl'>
                            50 мин — 1500 рублей
                        </div>
                    </div>
                    <div className='p-4 bg-sky-400/60 rounded-3xl max-w-md'>
                        <h3 className='mb-2 uppercase text-5xl font-bold text-white text-center drop-shadow-lg'>
                            Pump up
                        </h3>
                        <p className='mb-4 text-center'>
                            Курс повышения уровня английского
                        </p>
                        <p className='mb-4 text-lg text-green-700 font-bold'>
                            Возраст: 18+ лет
                        </p>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>индивидуальное/групповое обучение</p>
                        </div>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>подбор программы с учетом целей и желаний</p>
                        </div>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>работа со всеми навыками</p>
                        </div>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>говорим на английском с первых уроков</p>
                        </div>
                        <div className='mb-4 flex justify-start items-center'>
                            <p>💥</p>
                            <p>
                                учебные материалы в одном месте с любого
                                устройства
                            </p>
                        </div>
                        <div className='py-4 max-w-xs mb-[-3rem] mx-auto bg-white text-sky-400 border-sky-400 border text-center rounded-xl font-bold text-xl'>
                            50 мин — 1500 рублей
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-6 mb-6 mx-auto text-center'>
                    <h3 className='inline-block text-2xl text-sky-400 font-bold '>
                        РАЗГОВОРНЫЕ КЛУБЫ для ПОДРОСТКОВ{' '}
                        <br className='md:hidden' />
                        от 500 рублей
                    </h3>
                    <Link
                        href={'https://vk.com/uslugi-219355832?screen=group'}
                        target='_blank'
                        className='inline-block p-4 text-center bg-sky-400 hover:bg-sky-300 transition text-white text-2xl font-semibold rounded-xl'
                    >
                        Смотреть еще ➡
                    </Link>
                </div>
                <Link
                    href={'https://t.me/Boomerang_english_bot'}
                    className='px-4 md:px-10 py-4 text-center block rounded-xl w-fit mx-auto  bg-green-700 hover:bg-green-600 transition text-2xl text-white font-bold'
                >
                    Записаться на пробный урок
                </Link>
                <Footer />
            </div>
        </div>
    )
}
