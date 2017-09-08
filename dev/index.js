
  window.GT_CONFIG = {
   clientID: '917e9c94fd5d8bb2df81',
   clientSecret: '5f081712dd3e8dce696a455374fb3f6c1d5a16e6',
   owner: 'paddingme',
   repo: 'paddingme.github.io',
   admin: ['paddingme'],
   distractionFreeMode: false,
   pagerDirection: 'last',
   issueId: 1
 }
 
 
const gitalk = new Gitalk(window.GT_CONFIG)

gitalk.render('gitalk-container')
