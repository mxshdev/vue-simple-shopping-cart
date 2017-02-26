# vue-simple-shopping-cart
vss-cart it's a small core for your website. You can use it like regular JavaScript and jQuery. Your website should be to create along with Vue. Just try it!
# Demo
http://plnkr.co/edit/FOEcRMWUDBvLk06Jdxqa?p=preview
# Features
1) Reactivity

2) Use localStorage

3) It is easy to use
# Usage
1) Add Vue.js to your web application.
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.10/vue.min.js"></script>
```
2) Connect my library after Vue.js. Or just copy the contents to your file.

3) Wrap your application in the `<div id="app"> ... </div>`. But Vue.js must not be `<div id="app"> ... </div>`.

4) To create a template of your basket outside `<div id="app"> ... </div>`.
```html
<template id="template-vss-cart">
<div class="vss-cart">
<!-- Your code here -->
</div>
</template>
```

5) In call `<div id="app"> ... </div>` component `<vss-cart></vss-cart>`
```html
<vss-cart eventable="true" ref="vssCart"></vss-cart>
```

6) Ready. You can use the Demo as an example.