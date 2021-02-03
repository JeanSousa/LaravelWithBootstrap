//USAMOS O WEBPACK PARA IMPLEMENTAR O JQUERY NA PAGINA
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix 
   //aqui no scss eu importo a folha de estilo que cria a folha de estilo final que 
   //esta dentro do dist css do bootstrap, assim possuo mais autonomia
   //Vou importar o style.scss e ele vai ser processado pelo style.scss e o style
   //vai ser mandado para a public
   .sass('resources/views/scss/style.scss','public/site/style.css')

   //no scripts o primeiro parametro é o arquivo de entrada e o segundo é para onde vai
  .scripts('node_modules/jquery/dist/jquery.js','public/site/jquery.js')
  .scripts('node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'public/site/bootstrap.js');
