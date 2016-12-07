// show: meta.label -> name
// name: component name
// meta.label: display label

// lazy loading Components
// const Chartjs = resolve => require(['../views/charts/Chartjs.vue'], resolve)
// const Chartist = resolve => require(['../views/charts/Chartist.vue'], resolve)
// const Peity = resolve => require(['../views/charts/Peity.vue'], resolve)
// const Plotly = resolve => require(['../views/charts/Plotly.vue'], resolve)
// 

export default [{
    name: '总览',
    path: '/dashboard',
    index: '1',
    meta: {
        icon: 'el-icon-message'
    },
    component: require('views/dashboard')
}, {
    name: 'Charts',
    path: '/charts',
    index: '2',
    meta: {
        icon: 'el-icon-menu',
        expanded: false
    },
    component: require('views/charts'),

    children: [{
        index: '2-1',
        name: 'Chartist',
        path: 'chartist',
        component: require('views/charts/Chartist') // Chartist
    }, {
        index: '2-2',
        name: 'Chartjs',
        path: 'chartjs',
        component: require('views/charts/Chartjs') // Chartjs
    }, {
        index: '2-3',
        name: 'Peity',
        path: 'peity',
        component: require('views/charts/Peity') // Peity
    }, {
        index: '2-4',
        name: 'Plotly',
        path: 'plotly',
        component: require('views/charts/Plotly') // Plotly
    }]
}, {
    name: 'UI Features',
    index: '3',
    meta: {
        label: 'UI Features',
        icon: 'fa-laptop',
        expanded: false,
    },

    children: [{
        index: '3-1',
        name: 'Buttons',
        path: '/buttons',
        component: require('views/ui/Buttons') // Buttons
    }]
}]
