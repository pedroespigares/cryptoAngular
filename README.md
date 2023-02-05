# CryptoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## https://cryptoangular.web.app/

## Puntos importantes sobre el proyecto

<ul>
  <li>Como en el anterior, si en GitHub utilizas el mismo correo que en Google, solo podrás iniciar sesión con uno de ellos</li>
  <li>
    Al darle al añadir una moneda, si esta no aparece puede ser por 2 motivos:
    <ul>
      <li>CORS: Bloqueado por la página por límite de peticiones</li>
      <li>Al darle a añadir manedas muy rápido, alguna de ellas tardará en aparecer lo que tarde la API en enviar la información</li>
    </ul>
  </li>
  <li>Por el momento, los datos se refrescan cada 5 minutos para evitar problemas con la API. Se podrá cambiar en cualquier momento</li>
  <li>En el detalle de la moneda, a veces tarda un poco el historial de precios (depende de la moneda, ya que si lleva mucho tiempo existiendo, mas datos habrá)</li>
  <li>No sé si será cosa de firebase, pero en versión local, las rutas protegidas y la página 404 personalizada al meter una ruta que no existiese
   funcionaban perfectamente, enviándote al componente correspondiente. Pero en la página en producción me dice directamente que no existe.
  </li>
  <li>Si se ve en portátil, es mejor que se ponga zoom al 67% (lo hice en desktop, asi que hay algunas cosas que no están muy adaptadas)</li>
</ul>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
