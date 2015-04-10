# Pulse phone
Simple component for phone-call link on mobile devices. Demo [http://aleksmiller.github.io/puph/](http://aleksmiller.github.io/puph/)

##Usage
* Download [css](https://raw.github.com/aleksmiller/puph/master/puph.css) and [js](https://raw.github.com/aleksmiller/puph/master/puph.js)
* Use stylesheet `<link rel="stylesheet" href="/path/to/css/puph.css">` and JS `<script src="/path/to/js/puph.js"></script>`. Make sure to use correct paths /path/to/css/ and /path/to/js/
* Create link `<a href="tel:+380000000000" class="puph">CALL</a>`
* Create new instance in your JavaScript code `var puph = new Puph();`. Or directly in HTML `<script>var puph = new Puph();</script>`, in that case it's important to init Puph script **after** puph.js file is used
* Show only on mobile devices `<a href="tel:+380000000000" class="puph" data-mobile="true">CALL</a>`

##License
Puph is released under the [MIT License](https://raw.github.com/aleksmiller/puph/master/LICENSE)
