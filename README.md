# CloneWars

подготовка репозитория:

установить плагины VScode
- Eslint; 
- Babel JavaScript  mgmcdermott.vscode-language-babel;
- Live Sass Compiler;
- Sass;
установить npm - npm install
установить webpack с плагинами - npm install webpack webpack-cli webpack-dev-server copy-webpack-plugin clean-webpack-plugin html-webpack-plugin
установить file-loader - npm install file-loader
установить babel-polyfill - npm install babel-polyfill 

проверить работает ли Eslint

если нет, установить eslint - npm install
настроить Eslint -
 ./node_modules/.bin/eslint --init
? How would you like to configure ESLint? Use a popular style guide
? Which style guide do you want to follow? Airbnb
? Do you use React? Yes
? What format do you want your config file to be in? JSON
? The style guide "airbnb" requires eslint@^5.16.0 || ^6.8.0 || ^7.2.0. You are currently using eslint@4.19.1.
  Do you want to upgrade? Yes

Работа с репозиторием:
 - главная ветка dev
 - разработка каждого компонента ведётся в отдельной ветке c названием компонента;
 - после успешного тестирования нового функционала ветка компонента сливается с веткой dev;
 - каждый компонент разрабатывается в отдельной папке components/-имя-компонента-;
   - внутри папки компонента имеются две папки js и scss;
   - внутри папки js находится исходный код компонента и его модули если они необходимы;
   - внутри папки scss находятся стили компонента одним файлом или несколькими;
 - в папке docs ведётся документация на каждый компонент с описанием алгоритма его работы;
 - #common-css папка нормалайзеров стилей;

Live Sass compiler собирает стили из файлов scss в index.css, 
в строке состояния VScode должна быть кнопка Watch Sass при клике на которую начинается сборка
после сборки ведётся слежение за стилями, если стили не обновились можно отключить/включить Sass

 Сборка проекта производится командой npm start в Terminal либо запуском скрипта start - CloneWars NPM SCRIPTS
 в результате сборки открывается скомпилированный объект в браузере в Terminal выводится процесс сборки, 
 где указываются ошибки если они есть.
 Останавливается работа скрипта сочетанием клавиш Ctrl + C