# About Peru — RESTCountries

Aplicacion web desarrollada con Vue 3 y Vite que consume la API publica de RESTCountries (https://restcountries.com/) para mostrar informacion relevante del Peru: nombre, capital, region, idiomas, moneda, poblacion, bandera y escudo.

## Autor

- Codigo: U202411222
- Nombre: Enrique Ochoa
- Curso: SI730 - Aplicaciones Web
- Universidad: UPC

## Caracteristicas

- Toolbar superior con el titulo "About Peru".
- Vista por defecto con un card que presenta la informacion del pais (name, official name, currency, capital, region, subregion, languages, area, population, flag y coat of arms).
- Footer con informacion de copyright y datos del desarrollador.
- Interfaz totalmente en ingles.
- Diseno responsive (Responsive Web Design).
- Atributos ARIA en las vistas para accesibilidad.

## Tecnologias

- Vue 3 (Composition API) - https://vuejs.org/
- Vite - https://vitejs.dev/
- Axios - comunicacion con el backend/API - https://axios-http.com/
- PrimeVue - componentes de UI (prefijo pv-) - https://www.primevue.org/

## Estructura del proyecto

Organizacion domain-driven, separando los sub-dominios public (elementos generales de la interfaz) y countries (elementos relacionados a la informacion de paises):

```
src/
├── public/
│   └── components/
│       ├── app-toolbar.component.vue
│       └── app-footer.component.vue
├── countries/
│   ├── components/
│   │   └── country-card.component.vue
│   ├── services/
│   │   └── country.service.js
│   └── views/
│       └── about-peru.view.vue
├── App.vue
└── main.js
```

## Convenciones de nomenclatura

- Nombres fisicos en kebab-case con sufijo segun el tipo de elemento (.component.vue, .service.js).
- El sufijo "component" no se usa en el nombre del componente dentro de los templates (ej. country-card.component.vue se usa como <country-card>).
- Componentes de PrimeVue referenciados en templates con el prefijo pv- (ej. pv-card).
- Nomenclatura de objetos de programacion (variables, metodos, clases) en ingles.

## Instalacion y ejecucion

```
npm install
npm run dev
```

La aplicacion queda disponible en http://localhost:5173/

## Variables de entorno

Este proyecto requiere una API key para consumir el endpoint de paises. Crea un archivo .env en la raiz con:

```
VITE_API_KEY=tu_api_key_aqui
```

## Nota sobre la version de la API

El enunciado original indica el endpoint https://restcountries.com/v3.1/name/peru. Sin embargo, la version v3.1 de RESTCountries dejo de estar disponible de forma publica gratuita y ahora requiere una suscripcion de pago. Por este motivo, el proyecto consume la version actual v5 de la API, que continua siendo gratuita para este tipo de consulta y mantiene la misma estructura de datos solicitada en el enunciado (name, currencies, capital, region, subregion, languages, area, population, flags, coatOfArms).

## Referencias

- RESTCountries API - https://restcountries.com/
- Vue Router - https://router.vuejs.org/
- PrimeVue - https://www.primevue.org/
- Axios - https://axios-http.com/docs/intro