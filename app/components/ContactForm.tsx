"use client";
import { useEffect, useRef } from "react";

export default function AmoForm() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Проверка, чтобы скрипт не добавлялся дважды при перерендере в React
    if (
      formContainerRef.current &&
      formContainerRef.current.children.length === 0
    ) {
      // 1. Создаем inline-скрипт настроек
      const inlineScript = document.createElement("script");
      inlineScript.innerHTML = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1665974",hash:"350f05c45923f19c2f669fef8377fcd0",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;

      // 2. Создаем внешний скрипт
      const externalScript = document.createElement("script");
      externalScript.id = "amoforms_script_1665974";
      externalScript.async = true;
      externalScript.charset = "utf-8";
      externalScript.src =
        "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1775472238";

      // Внедряем скрипты в наш конкретный div-контейнер
      formContainerRef.current.appendChild(inlineScript);
      formContainerRef.current.appendChild(externalScript);
    }
  }, []);

  return (
    <div className="w-full flex justify-center">
      {/* Контейнер, внутри которого отрисуется форма из amoCRM */}
      <div
        ref={formContainerRef}
        className="w-full max-w-md min-h-[400px]"
      ></div>
    </div>
  );
}
