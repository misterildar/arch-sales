import Image from "next/image";
import Link from "next/link";
import AmoForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d12] text-white font-sans overflow-x-hidden">
      {/* Навигация */}
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

      {/* Главный блок (Hero) */}
      <main className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center">
        {/* Заголовок и подзаголовок */}
        <div className="text-center mb-16 space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-blue-400 tracking-widest uppercase">
            Архитектура Продаж
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Внедряем amoCRM
          </h1>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Настраиваем воронки, боты и интеграции. Ваши менеджеры работают в
            единой системе, а не теряют клиентов в мессенджерах.
          </p>
        </div>

        {/* Изображение Дашборда (Слот для generated-image-1.jpg) */}
        <div className="w-full max-w-6xl relative mb-24 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)] border border-gray-800">
          {/* Заглушка, замени на свой Image */}
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

        {/* Блок Контактов и Форма (Разделен на 2 колонки) */}
        <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 bg-[#15151e] p-10 md:p-16 rounded-3xl border border-gray-800">
          {/* Контактная информация */}
          <div className="space-y-8 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold mb-6">Контакты</h3>

            <div>
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                Телефон
              </p>
              <p className="text-2xl font-medium">+7 (919) 123-4567</p>
            </div>

            {/* Социальные сети */}
            <div className="pt-6 flex gap-6">
              {/* Слот для Telegram (примерная заглушка) */}
              <Link href={"https://max.ru/"}>
                <Image src="/max-logo.svg" width={48} height={48} alt="max" />
              </Link>
              {/* Слот для VK_Compact_Logo */}
              <Link href={"https://vk.com/"}>
                <Image
                  src="/vk-logo.svg.webp"
                  width={48}
                  height={48}
                  alt="vk"
                />
              </Link>
            </div>
          </div>

          {/* Форма обратной связи */}
          <AmoForm />
        </section>
      </main>
    </div>
  );
}
