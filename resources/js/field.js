Nova.booting((Vue, router, store) => {
    Vue.component('index-nova-inline-relationship', require('./components/IndexField'))
    Vue.component('detail-nova-inline-relationship', require('./components/DetailField'))
    Vue.component('form-nova-inline-relationship', require('./components/FormField'))
})
