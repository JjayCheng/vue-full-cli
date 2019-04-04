const hi = () => import('../components/hi.vue');
const hello = () => import('../components/hello.vue');
const usr = () => import('../components/usr.vue');

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