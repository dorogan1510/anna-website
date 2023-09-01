import review1 from '@/public/img/3-section/reviews/1.jpg'
import review2 from '@/public/img/3-section/reviews/2.jpg'
import review3 from '@/public/img/3-section/reviews/3.jpg'
import Image from 'next/image'
import Link from 'next/link'
import style from './ThirdSection.module.scss'
import img1 from '@/public/img/4-section/1.jpg'
import img2 from '@/public/img/4-section/2.jpg'
import img3 from '@/public/img/4-section/3.jpg'
import img4 from '@/public/img/4-section/4.jpg'
import img5 from '@/public/img/4-section/5.jpg'
import img6 from '@/public/img/4-section/6.jpg'

export const ThirdSection = () => {
    return (
        <div className='mb-4 '>
            <div id='id1' className='px-4 max-w-7xl my-0 mx-auto'>
                <h2 className='mb-4 text-3xl text-sky-400 uppercase text-center font-semibold'>
                    Учи английский с{' '}
                    <span className='text-green-700'>результатом</span>, как и
                    наши ученики
                </h2>
                <div className='mb-4 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4'>
                    <div className='max-w-md flex-1'>
                        <Image
                            className='border-2 border-green-600 rounded-3xl w-full h-auto'
                            src={review1}
                            alt={''}
                        ></Image>
                    </div>
                    <div className='max-w-md flex-1'>
                        <Image
                            className='border-2 border-green-600 rounded-3xl w-full h-auto'
                            src={review2}
                            alt={''}
                        ></Image>
                    </div>
                    <div className='flex flex-1 flex-col justify-between gap-4'>
                        <div className='max-w-md'>
                            <Image
                                className='border-2 border-green-600 rounded-3xl w-full h-auto'
                                src={review3}
                                alt={''}
                            ></Image>
                        </div>
                        <Link
                            className='p-2 bg-sky-400 hover:bg-sky-300 transition text-white text-center text-xl rounded-xl'
                            href={
                                'https://vk.com/boomer_ang_school?w=app6326142_-219355832'
                            }
                            target='_blank'
                        >
                            Смотреть все отзывы ➡
                        </Link>
                    </div>
                </div>
            </div>
            <div id='id5' className='relative'>
                <div className={style.thirdSection}></div>
                <div className='px-4'>
                    <div className='max-w-7xl mx-auto p-4 flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-4'>
                        <div className='max-w-lg flex flex-col gap-4 justify-between '>
                            <div className='p-8  rounded-3xl bg-sky-400/80 text-left text-white'>
                                <h3 className='uppercase mb-4 text-xl lg:text-2xl font-bold'>
                                    Индивидуальная программа
                                </h3>
                                <div className='text-lg lg:text-xl'>
                                    Подберем программу лично под ваши цели и
                                    желания
                                </div>
                            </div>
                            <div className='p-8  rounded-3xl bg-sky-400/80 text-left text-white'>
                                <h3 className='uppercase mb-4 text-xl lg:text-2xl font-bold'>
                                    Учеба всегда под рукой
                                </h3>
                                <div className='text-lg lg:text-xl'>
                                    Личный кабинет позволяет выполнять задания с
                                    любого устройства
                                </div>
                            </div>
                        </div>
                        <div className='max-w-lg lg:max-w-2xl p-8  rounded-3xl bg-sky-400/80 text-left text-white'>
                            <h3 className='uppercase mb-4 text-xl md:text-2xl font-bold'>
                                Подключение <br /> в один клик
                            </h3>
                            <div className='text-lg md:text-xl'>
                                Вам больше не нужно устанавливать дополнительные
                                приложения и переключаться между вкладками.
                                Интерактивная платформа обеспечивает подключение
                                к уроку прямо из вашего личного кабинета.
                                Нажимай на кнопку и попадай на индивидуальный
                                урок с твоим лучшим учителем. Любое устройство
                                (телефон, планшет, ноутбук, компьютер), наушники
                                и интернет – всё, что нужно для урока! Мы ждём
                                именно тебя!
                            </div>
                        </div>
                    </div>
                    <div id='id2' className='max-w-7xl mx-auto '>
                        <h3 className='mb-2 bg-sky-400 p-4 text-center text-3xl font-semibold text-white uppercase rounded-xl border-2 border-white'>
                            Учись только у{' '}
                            <span className='text-green-700'>
                                профессионалов
                            </span>
                        </h3>
                        <div className='mb-2 p-4 flex flex-col lg:flex-row justify-between items-start gap-4 lg:items-center bg-white rounded-2xl border-2 border-green-600 '>
                            <div className='mx-auto w-full lg:m-0 flex flex-col lg:flex-row justify-between items-center gap-4'>
                                <div className='max-w-[150px] lg:max-w-[100px]'>
                                    <Image
                                        src={img1}
                                        alt={''}
                                        className='w-full h-auto rounded-full'
                                    ></Image>
                                </div>
                                <div className='w-full'>
                                    <h4 className='text-center lg:text-left text-xl font-bold'>
                                        Анна Устинова
                                    </h4>
                                    <p className='mb-2 text-lg text-sky-400 font-semibold text-center lg:text-left'>
                                        Руководитель и старший преподаватель
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Опыт:{' '}
                                        </span>
                                        7 лет
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Образование:{' '}
                                        </span>
                                        бакалавр «Учитель начальных классов»,
                                        бакалавр «Филология», магистр
                                        «Лингвистика»
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Особые отметки:{' '}
                                        </span>
                                        все дипломы с отличием, сертификат CAE
                                    </p>
                                </div>
                            </div>
                            <p className='lg:max-w-md italic'>
                                &quot;Иностранные языки – это удивительный мир,
                                который открывает все двери! Своей миссией, как
                                педагога, я считаю, не просто заучить и выучить,
                                а помочь понять язык. На занятиях мы не только
                                учимся, но и познаем этот мир. Я жду тебя в
                                нашей школе. Присоединяйся к нашей онлайн-семье!
                                &quot;
                            </p>
                        </div>
                        <div className='mb-2 p-4 flex flex-col lg:flex-row justify-between items-start gap-4 lg:items-center bg-white rounded-2xl border-2 border-green-600 '>
                            <div className='mx-auto w-full lg:m-0 flex flex-col lg:flex-row justify-between items-center gap-4'>
                                <div className='max-w-[150px] lg:max-w-[100px]'>
                                    <Image
                                        src={img2}
                                        alt={''}
                                        className='w-full h-auto rounded-full'
                                    ></Image>
                                </div>
                                <div className='w-full'>
                                    <h4 className='text-center lg:text-left text-xl font-bold'>
                                        Лилия Терентьева
                                    </h4>
                                    <p className='mb-2 text-lg text-sky-400 font-semibold text-center lg:text-left'>
                                        Преподаватель (6-15 лет)
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Опыт:{' '}
                                        </span>
                                        4 года
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Образование:{' '}
                                        </span>
                                        бакалавр «Филолог английского языка»,
                                        магистр «Лингвистика»
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Особые отметки:{' '}
                                        </span>
                                        все дипломы с отличием
                                    </p>
                                </div>
                            </div>
                            <p className='lg:max-w-md italic'>
                                &quot;Изучение Английского языка - это дело,
                                которое нужно доводить до конца. И я помогу вам
                                не останавливаться перед преградами. Думаю,
                                главное в обучении - добиться поставленной цели
                                в течении совместной работы! Жду тебя на
                                занятии! &quot;
                            </p>
                        </div>
                        <div className='mb-2 p-4 flex flex-col lg:flex-row justify-between items-start gap-4 lg:items-center bg-white rounded-2xl border-2 border-green-600 '>
                            <div className='mx-auto w-full lg:m-0 flex flex-col lg:flex-row justify-between items-center gap-4'>
                                <div className='max-w-[150px] lg:max-w-[100px]'>
                                    <Image
                                        src={img3}
                                        alt={''}
                                        className='w-full h-auto rounded-full'
                                    ></Image>
                                </div>
                                <div className='w-full'>
                                    <h4 className='text-center lg:text-left text-xl font-bold'>
                                        Дарья Твердохлеб
                                    </h4>
                                    <p className='mb-2 text-lg text-sky-400 font-semibold text-center lg:text-left'>
                                        Преподаватель (7-15 лет)
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Опыт:{' '}
                                        </span>
                                        6 лет
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Образование:{' '}
                                        </span>
                                        бакалавр «Филолог английского языка»,
                                        магистр «Лингвистика»
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Особые отметки:{' '}
                                        </span>
                                        действующий школьный учитель
                                    </p>
                                </div>
                            </div>
                            <p className='lg:max-w-md italic'>
                                &quot;Главное в изучении иностранного языка -
                                наслаждаться процессом. И тогда результат не
                                заставит себя долго ждать. Делаю свои уроки не
                                только полезными, но и увлекательными. Давай
                                вместе погрузимся в удивительный мир английского
                                и сделаем его приятной частью своей жизни.
                                Welcome aboard! &quot;
                            </p>
                        </div>
                        <div className='mb-2 p-4 flex flex-col lg:flex-row justify-between items-start gap-4 lg:items-center bg-white rounded-2xl border-2 border-green-600 '>
                            <div className='mx-auto w-full lg:m-0 flex flex-col lg:flex-row justify-between items-center gap-4'>
                                <div className='max-w-[150px] lg:max-w-[100px]'>
                                    <Image
                                        src={img4}
                                        alt={''}
                                        className='w-full h-auto rounded-full'
                                    ></Image>
                                </div>
                                <div className='w-full'>
                                    <h4 className='text-center lg:text-left text-xl font-bold'>
                                        Виктория Дрипан
                                    </h4>
                                    <p className='mb-2 text-lg text-sky-400 font-semibold text-center lg:text-left'>
                                        Преподаватель (15-18+ лет)
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Опыт:{' '}
                                        </span>
                                        4 года
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Образование:{' '}
                                        </span>
                                        бакалавр «Филолог английского языка»,
                                        магистр «Лингвистика»
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Особые отметки:{' '}
                                        </span>
                                        все дипломы с отличием, место жительства
                                        – Израиль
                                    </p>
                                </div>
                            </div>
                            <p className='lg:max-w-md italic'>
                                &quot;Начинать беседу на английском в
                                путешествии, находить друзей заграницей,
                                переехать в другую страну и даже устроиться там
                                на работу - всё это реально, и я помогу тебе в
                                этом убедиться и поверить в свои силы.
                                Разговорная практика, просмотр фильмов,
                                прослушивание песен и индивидуальный подход уже
                                ждут тебя. Давай вместе сразимся с твоим страхом
                                и наконец-то выучим этот английский! &quot;
                            </p>
                        </div>
                        <div className='mb-2 p-4 flex flex-col lg:flex-row justify-between items-start gap-4 lg:items-center bg-white rounded-2xl border-2 border-green-600 '>
                            <div className='mx-auto w-full lg:m-0 flex flex-col lg:flex-row justify-between items-center gap-4'>
                                <div className='max-w-[150px] lg:max-w-[100px]'>
                                    <Image
                                        src={img5}
                                        alt={''}
                                        className='w-full h-auto rounded-full'
                                    ></Image>
                                </div>
                                <div className='w-full'>
                                    <h4 className='text-center lg:text-left text-xl font-bold'>
                                        Татьяна Грудина
                                    </h4>
                                    <p className='mb-2 text-lg text-sky-400 font-semibold text-center lg:text-left'>
                                        Преподаватель (7-15 лет)
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Опыт:{' '}
                                        </span>
                                        8 лет
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Образование:{' '}
                                        </span>
                                        высшее, специалист &quot;Учитель
                                        английского языка, испанского языка и
                                        зарубежной литературы&quot;
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Особые отметки:{' '}
                                        </span>
                                        подготовка к ЕГЭ; «Лучший инновационный
                                        проект 2023» в конкурсе
                                        профессионального мастерства
                                    </p>
                                </div>
                            </div>
                            <p className='lg:max-w-md italic'>
                                &quot;Я уверена, что пользу иностранных языков
                                сложно переоценить. Изучая иностранные языки, мы
                                также познаём себя, этот мир и расширяем
                                кругозор. Мои ученики ежедневно погружаются в
                                увлекательнейший мир английского языка. А уже
                                жду вас для новых путешествий!&quot;
                            </p>
                        </div>
                        <div className='mb-2 p-4 flex flex-col lg:flex-row justify-between items-start gap-4 lg:items-center bg-white rounded-2xl border-2 border-green-600 '>
                            <div className='mx-auto w-full  lg:m-0 flex flex-col lg:flex-row justify-between items-center gap-4'>
                                <div className='max-w-[150px] lg:max-w-[100px]'>
                                    <Image
                                        src={img6}
                                        alt={''}
                                        className='w-full h-auto rounded-full'
                                    ></Image>
                                </div>
                                <div className='w-full'>
                                    <h4 className='text-center lg:text-left text-xl font-bold'>
                                        Полина Трюхан
                                    </h4>
                                    <p className='mb-2 text-lg text-sky-400 font-semibold text-center lg:text-left'>
                                        Преподаватель (6-15 лет)
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Опыт:{' '}
                                        </span>
                                        5 лет
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Образование:{' '}
                                        </span>
                                        лингвист-переводчик (перевод и
                                        переводоведение){' '}
                                    </p>
                                    <p className='mb-1'>
                                        <span className='font-semibold text-green-700'>
                                            Особые отметки:{' '}
                                        </span>
                                        диплом с отличием, международный экзамен
                                        DSD Zweite Stufe (уровень C1 шкалы
                                        Совета Европы)
                                    </p>
                                </div>
                            </div>
                            <p className='lg:max-w-md italic'>
                                &quot;Немецкий язык – это структура и
                                лаконичность. А его изучение откроет для вас
                                безграничные возможности. Уверена, освоение
                                немецкого языка станет увлекательным процессом,
                                наполненным множеством интересных открытий. А я
                                с удовольствием помогу вам в этом! &quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
