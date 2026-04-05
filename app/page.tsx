import Image from 'next/image';
import ContactForm from './components/ContactForm';

const svg = {
  bloom: '/svg/bg-bloom.svg',
  warp: '/svg/bg-warp-lines.svg',
  particles: '/svg/deco-particles.svg',
  logo: '/svg/logo-b2b.svg',
  search: '/svg/icon-search.svg',
  crm: '/svg/icon-crm.svg',
  floatTL: '/svg/float-top-left.svg',
  floatTR: '/svg/float-top-right.svg',
  floatMR: '/svg/float-mid-right.svg',
  floatBL: '/svg/float-bottom-left.svg',
  floatBR: '/svg/float-bottom-right.svg',
  dashboard: '/svg/dashboard-tablet.svg',
} as const;

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-x-hidden bg-black text-white'>
      {/* Фон: bloom + перспективные линии + частицы */}
      <div className='pointer-events-none absolute inset-0 z-0' aria-hidden>
        <Image
          src={svg.bloom}
          alt=''
          fill
          className='object-cover'
          sizes='100vw'
          priority
        />
      </div>
      <div
        className='pointer-events-none absolute inset-0 z-[1] mix-blend-screen opacity-[0.72]'
        aria-hidden
      >
        <Image
          src={svg.warp}
          alt=''
          fill
          className='object-cover'
          sizes='100vw'
          priority
        />
      </div>
      <div
        className='pointer-events-none absolute inset-0 z-[2] opacity-50'
        aria-hidden
      >
        <Image
          src={svg.particles}
          alt=''
          fill
          className='object-cover'
          sizes='100vw'
        />
      </div>

      {/* Плавающие 3D-объекты */}
      <div
        className='pointer-events-none absolute inset-0 z-[3] overflow-hidden'
        aria-hidden
      >
        <Image
          src={svg.floatTL}
          alt=''
          width={160}
          height={160}
          className='absolute left-[2%] top-[10%] w-[min(10rem,24vw)] max-w-[160px] select-none drop-shadow-[0_0_32px_rgba(189,0,255,0.5)]'
        />
        <Image
          src={svg.floatTR}
          alt=''
          width={120}
          height={120}
          className='absolute right-[6%] top-[14%] w-[min(7.5rem,18vw)] max-w-[120px] select-none drop-shadow-[0_0_24px_rgba(189,0,255,0.4)]'
        />
        <Image
          src={svg.floatMR}
          alt=''
          width={100}
          height={100}
          className='absolute right-[8%] top-[38%] w-[min(6.25rem,16vw)] max-w-[100px] select-none drop-shadow-[0_0_22px_rgba(0,163,255,0.5)]'
        />
        <Image
          src={svg.floatBL}
          alt=''
          width={160}
          height={160}
          className='absolute bottom-[18%] left-[3%] w-[min(10rem,24vw)] max-w-[160px] select-none drop-shadow-[0_0_20px_rgba(255,255,255,0.12)]'
        />
        <Image
          src={svg.floatBR}
          alt=''
          width={160}
          height={140}
          className='absolute bottom-[14%] right-[2%] w-[min(10rem,22vw)] max-w-[160px] select-none drop-shadow-[0_0_26px_rgba(0,163,255,0.35)]'
        />
      </div>

      <header className='relative z-40 border-b border-white/[0.04] bg-black/35 backdrop-blur-sm'>
        <div className='mx-auto flex min-h-[64px] max-w-[1200px] items-center justify-between px-5 py-3 md:px-8'>
          <nav className='absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex'>
            <a
              href='#hero'
              className='border-b-2 border-[#00A3FF] pb-0.5 text-[15px] font-medium tracking-wide text-white'
            >
              Hero
            </a>
            <a
              href='#crm'
              className='flex items-center gap-2 text-[15px] text-white transition hover:opacity-90'
            >
              <Image
                src={svg.crm}
                alt=''
                width={20}
                height={20}
                className='h-[18px] w-[18px]'
              />
              CRM
            </a>
            <a
              href='#integration'
              className='text-[15px] text-white transition hover:opacity-90'
            >
              Integration
            </a>
            <a
              href='#agency'
              className='text-[15px] text-white transition hover:opacity-90'
            >
              Agency
            </a>
          </nav>
        </div>
      </header>

      <main
        id='hero'
        className='relative z-20 mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 pb-28 pt-4 md:px-8 md:pt-8'
      >
        <h1 className='max-w-[22ch] text-center text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.12] tracking-[-0.02em] text-balance'>
          Архитектура Продаж
        </h1>

        <div className='relative mt-12 w-full max-w-[920px] md:mt-14'>
          <div
            className='pointer-events-none absolute -inset-12 rounded-[3rem] bg-[radial-gradient(ellipse_85%_55%_at_50%_45%,rgba(0,163,255,0.18),transparent_55%),radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(189,0,255,0.16),transparent_60%)] blur-3xl'
            aria-hidden
          />
          <div
            className='relative mx-auto w-full [perspective:1800px]'
            style={{ perspectiveOrigin: '50% 35%' }}
          >
            <div className='origin-center will-change-transform [transform:rotateX(7deg)]'>
              <Image
                src={svg.dashboard}
                alt='Интерфейс Архитектор: CRM и аналитика'
                width={920}
                height={540}
                className='h-auto w-full select-none rounded-[2px] drop-shadow-[0_20px_70px_rgba(0,163,255,0.42),0_8px_32px_rgba(0,0,0,0.85)]'
                priority
              />
            </div>
          </div>
        </div>

        <div className='w-full flex justify-center mt-12'>
          <ContactForm />
        </div>
      </main>

      {/* Мобильная навигация */}
      <nav className='relative z-30 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/[0.04] bg-black/35 px-4 py-4 md:hidden'>
        <a
          href='#hero'
          className='border-b-2 border-[#00A3FF] pb-0.5 text-sm font-medium text-white'
        >
          Hero
        </a>
        <a href='#crm' className='flex items-center gap-1.5 text-sm text-white'>
          <Image src={svg.crm} alt='' width={18} height={18} />
          CRM
        </a>
        <a href='#integration' className='text-sm text-white'>
          Integration
        </a>
        <a href='#agency' className='text-sm text-white'>
          Agency
        </a>
      </nav>
    </div>
  );
}
