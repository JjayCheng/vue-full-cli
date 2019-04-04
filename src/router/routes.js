const hi = () => import('../pages/hi.vue');
const hello = () => import('../pages/hello.vue');
const usr = () => import('../pages/usr.vue');

export default [
  {
    path: '/',
    redirect: '/hello'
  },
  {
    path: '/hi',
    component: hi
  },
  {
    path: '/hello',
    component: hello
  },
  {
    path: '/usr/:id',
    props: true,
    component: usr
	}
]