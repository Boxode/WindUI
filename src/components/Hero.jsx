import { ProductHunt, Boxode, Tailwind, Astro, Stripe } from './Companies'
import '../grid.css'

export default function Hero() {
	return (
		<div
			className='relative overflow-hidden dark:bg-darker lg:overflow-auto magicpattern'
			id='home'
		>
			<div
				aria-hidden='true'
				className='absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'
			>
				<div className='blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700'></div>
				<div className='blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600'></div>
			</div>
			<div className='absolute inset-x-0 top-32 lg:hidden'>
				<div
					aria-hidden='true'
					className='grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-60 2xl:mx-auto 2xl:max-w-6xl'
				>
					<div className='h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700'></div>
					<div className='h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600'></div>
				</div>
			</div>
			<div className='mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0'>
				<div className='relative ml-auto pt-40 xl:pt-48'>
					<div className='gap-12 md:flex md:items-center'>
						<div className='text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2'>
							<h1 className='text-gray-900 dark:text-white font-[GilroyBold] text-4xl md:text-5xl xl:text-6xl'>
								<span className='bg-gradient-to-l from-purple-500 via-blue-500 to-transparent bg-clip-text text-transparent dark:from-white dark:via-cyan-300'>
									Design {''}
								</span>
								and build your next idea more faster and more{' '}
								<span className='bg-gradient-to-r from-blue-950 via-blue-950 to-transparent bg-clip-text text-transparent dark:from-white dark:via-purple-500'>
									beautifully.
								</span>
							</h1>
							<div className='pb-12'>
								<p className='mt-8 text-gray-700 font-[GilroyRegular] dark:text-gray-300 pb-10'>
									Build the perfect starting point to breathe life into your
									next project, an endless source of creativity and stylistic
									perfection.
								</p>
								<a
									href='https://boxode.org'
									target='_blank'
									className='font-[GilroySemiBold] text-base opacity-50 text-white underline'
								>
									Created with ❤ by Boxode Labs
								</a>
							</div>
						</div>
						<div className='relative mt-20 md:mt-0 md:w-2/5 lg:w-3/5 select-none'>
							<div className='-ml-6 md:-mr-72 lg:mr-0'>
								<img
									className='h-full object-cover object-left'
									src='/svg/Design.svg'
									alt='app screenshot'
									width='1628'
									height='1233'
								/>
							</div>
						</div>
					</div>

					<div className='mt-8 text-center md:mt-32 lg:mt-20 xl:mt-24'>
						<span className='text-sm font-[GilroySemiBold] tracking-wider text-gray-800 dark:text-white'>
							TRUSTED BY YOUR FAVORED COMPANIES
						</span>
						<div className='mt-8 flex flex-wrap items-center justify-center gap-6 transition-colors sm:justify-between lg:gap-16'>
							<ProductHunt />
							<Boxode />
							<Tailwind />
							<Astro />
							<Stripe />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
