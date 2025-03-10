# Проект "Чайная подписка"

## Цель проекта

Проект создан для удобного рассчета стоимости чая в Чайной Подписке. Каждый участник может в реальном времени видеть итоговую стоимость чая, которая зависит от выбранного им количества.

## Технологии

- В качестве основного языка программирования выбран TypeScript
- Весь функционал написан на React
- Для работы с данными используется стэйт-менеджер Redux (RTK)
- Сборка осуществляется посредством Vite
  - `npm run dev` для запуска в режиме разработчика
  - `npm run build` для компиляции продакшн-версии
- В секции вопросов-ответов и некоторых кнопках применены решения из [React Suite](https://rsuitejs.com/)

## Особенности

- Классы именованы по методологии БЭМ
- DRY - утилиты вынесены в отдельные файлы и переиспользуются
- Переменные хранятся в отдельном файле, магические значения не используются
