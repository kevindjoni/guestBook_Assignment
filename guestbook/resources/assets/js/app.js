
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');

Vue.component('signatures', require('./components/Signatures.vue'));
Vue.component('signature-form', require('./components/SignatureForm.vue'));
Vue.component('paginate', require('vuejs-paginate'));

const app = new Vue({
    el: '#app'
});
