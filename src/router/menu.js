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
    meta: {
        icon: 'fa-tachometer'
    },
    component: require('views/dashboard')
},
{
    name: 'Charts',
    path: '/charts',
    meta: {
      icon: 'fa-bar-chart-o',
      expanded: false
    },
    component: require('views/charts'),

    children: [
      {
        name: 'Chartist',
        path: 'chartist',
        component: require('views/charts/Chartist') // Chartist
      },
      {
        name: 'Chartjs',
        path: 'chartjs',
        component: require('views/charts/Chartjs') // Chartjs
      },
      {
        name: 'Peity',
        path: 'peity',
        component: require('views/charts/Peity') // Peity
      },
      {
        name: 'Plotly',
        path: 'plotly',
        component: require('views/charts/Plotly') // Plotly
      }
    ]
  },]
