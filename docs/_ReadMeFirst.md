В папке Json находятся .json файлы настроек и словарь dict.json

# Загрузка настроек
<const PropertiesJson = require("../json/properties.json")

# Загрузка словаря 
<const DictJson = require("../json/dict.json")

# Получение языка из настроек
<const language = PropertiesJson.language

# Получение Заголовка на соответствующем языке
<const familyTitle = DictJson[language].familyTitle

При разработке модуля использовать надписи из словаря в соответствии с языком.
При необходимости добавлять значения надписей для соответствующих языков.