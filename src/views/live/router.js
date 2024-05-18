const liveRouter = [{
	path: '/',
	name: 'LiveHome',
	component: () => import('./home/home.vue')
}, {
	path: '/live/home',
		// redirect默认从/home到/路径
		redirect: '/'
}, {
	path: '/live/detail',
	name: 'LiveDetail',
	component: () => import('./detail/detail.vue')
}]

export default liveRouter

// 原项目代码，问题在/不能匹配，加一个默认路径
// const liveRouter = [{
// 	path: '/live/home',
// 	name: 'LiveHome',
// 	component: () => import('./home/home.vue')
// },{
// 	path: '/live/detail',
// 	name: 'LiveDetail',
// 	component: () => import('./detail/detail.vue')
// }]

// export default liveRouter