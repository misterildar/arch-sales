import Image from "next/image";
import Link from "next/link";
import AmoForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d12] text-white font-sans overflow-x-hidden">
      <nav className="w-full flex justify-center py-6 bg-[#15151e] border-b border-gray-800">
        <ul className="flex gap-12 text-sm uppercase tracking-wider text-gray-300">
          <li className="hover:text-white cursor-pointer transition-colors">
            Статьи
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            Наши работы
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            Контакты
          </li>
        </ul>
      </nav>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20 flex flex-col items-center">
        <div className="text-center mb-16 space-y-8">
          <h1 className="text-4xl md:text-7xl font-bold text-blue-400 tracking-tight bg-clip-text">
            Архитектура Продаж
          </h1>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Внедряем amoCRM
          </h2>
        </div>

        <div className="w-full max-w-6xl relative mb-24 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)] border border-gray-800">
          <div className="w-full aspect-video bg-[#1a1a24] flex items-center justify-center">
            <span className="text-gray-500">
              <Image
                width={1500}
                height={1500}
                alt="background"
                src={"/background.png"}
                loading="eager"
              />
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mb-24 ">
          <div className="flex flex-col md:flex-1 mb-4">
            <h3 className="text-2xl md:text-5xl font-semibold  text-center md:text-left">
              Помогаем навести порядок в продажах и вернуть упущенных клиентов
              из недозвонов, текущей базы и старых обращений.
            </h3>
          </div>

          <div className="max-w-xs md:max-w-md rounded-2xl overflow-hidden  flex items-center justify-center border border-gray-800 md:flex-1">
            <Image
              width={500}
              height={500}
              alt="certificate"
              src={"/certificate.jpeg"}
              loading="eager"
            />
          </div>
        </div>

        <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 bg-[#15151e] p-8 md:p-16 rounded-3xl border border-gray-800">
          <div className="space-y-8 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold mb-6">Контакты</h3>

            <div>
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                Телефон
              </p>
              <p className="text-2xl font-medium">+7 917 394 00 93</p>
            </div>

            <div className="pt-6 flex gap-6">
              <Link
                href={
                  "https://max.ru/u/f9LHodD0cOIjhrrIG_UVc7EmZOeMITpQXEQlBDH_5LZ3qcF0qEidlxI3fDw"
                }
              >
                <Image src="/max-logo.svg" width={48} height={48} alt="max" />
              </Link>
              <Link href={"https://t.me/mister_ildar"}>
                <Image
                  src="/telegram-logo.png"
                  width={48}
                  height={48}
                  alt="telegram"
                />
              </Link>
              <Link href={"https://wa.me/79173940093"}>
                <Image
                  src="/whatsapp.svg"
                  width={48}
                  height={48}
                  alt="whatsapp"
                />
              </Link>
              <Link href={"https://vk.com/arch_sales"}>
                <Image
                  src="/vk-logo.svg.webp"
                  width={48}
                  height={48}
                  alt="vk"
                />
              </Link>
            </div>
          </div>

          <AmoForm />
        </section>
      </main>
    </div>
  );
}
