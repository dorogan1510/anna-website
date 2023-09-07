import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'

const inter = Roboto_Slab({
    weight: ['300', '400', '500', '700'],
    subsets: ['cyrillic', 'latin'],
})

export const metadata: Metadata = {
    title: 'Заговори на английском и немецком вместе с Boomerang',
    description:
        'Боитесь, что online обучение — деньги на ветер? Мы обучаем по уникальной программе, с которой наши студенты всех возрастов говорят на английском и немецком языках!',
    generator: 'Next.js',
    applicationName: 'Next.js',
    keywords: [
        'онлайн школа',
        'учить английский',
        'учить немецкий',
        'online обучение',
        'boomerang',
        'бумеранг',
    ],
    authors: [{ name: 'Danila Frolov', url: 'https://danfrolov.com' }],
    creator: 'Danila Frolov',
    openGraph: {
        title: 'Заговори на английском и немецком вместе с Boomerang',
        description:
            'Боитесь, что online обучение — деньги на ветер? Мы обучаем по уникальной программе, с которой наши студенты всех возрастов говорят на английском и немецком языках!',
        siteName: 'Онлайн школа Boomerang',
        locale: 'ru-RU',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
