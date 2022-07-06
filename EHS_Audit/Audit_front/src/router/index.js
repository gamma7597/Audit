import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Help from '../views/Help.vue'
import Doc from '../views/Doc.vue'
import PartnerList from '../views/PartnerList.vue'
import Partner from '../views/Partner.vue'
import Rules from '../views/Rules.vue'
import Co_rule from '../views/rules/Co_rule.vue'
import Tdt_rule from '../views/rules/Tdt_rule.vue'
import G_rule from '../views/rules/G_rule.vue'
import Rh_rule from '../views/rules/Rh_rule.vue'
import Pt_rule from '../views/rules/Pt_rule.vue'
import A_rule from '../views/rules/A_rule.vue'
import Ca_rule from '../views/rules/Ca_rule.vue'
import Spe_rule from '../views/rules/Spe_rule.vue'
import C_rule from '../views/rules/C_rule.vue'
import Adm_rule from '../views/rules/Adm_rule.vue'
import Se_rule from '../views/rules/Se_rule.vue'
import Rf_rule from '../views/rules/Rf_rule.vue'
import Gi_rule from '../views/rules/Gi_rule.vue'
import Gca_rule from '../views/rules/Gca_rule.vue'
import Ie_rule from '../views/rules/Ie_rule.vue'
import Rgpd_rule from '../views/rules/Rgpd_rule.vue'
import Cd_rule from '../views/rules/Cd_rule.vue'
import File from '../views/File.vue'


import OktaVue, { LoginCallback } from '@okta/okta-vue'
import { OktaAuth } from '@okta/okta-auth-js'

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-46549604.okta.com/oauth2/aus4gbwz3qR3wa0v75d7',
  clientId: '0oa2pf2uaeW95u4VH5d7',
  //issuer: 'https://engie.okta-emea.com/oauth2/aus7o7nrogwXSVcYn0i7',
  //clientId: '0oa7n4gwwkvQiWODq0i7',
  redirectUri: window.location.origin + '/callback',
  scopes: ['openid', 'profile', 'email']
})

function matchPartner(to) {
  const groups = store.state.user.groups
  const path = to.path
  const test = []
  groups.forEach(function(item) {
    const g = item.split("-")
    const x = "/partner/" + g[3]
    test.push(x)
  })
  return test.includes(path)
}

function matchRules(to) {
  const groups = store.state.user.groups
  const path = to.path
  const test = []
  groups.forEach(function(item) {
    const g = item.split("-")
    const x = "/rules/" + g[3]
    test.push(x)
  })
  return test.includes(path)
}

function matchFiles(to) {
  const groups = store.state.user.groups
  const path = to.path
  const test = []
  groups.forEach(function(item) {
    const g = item.split("-")
    const x = "/partner/"+ g[3] + "/files/"
    test.push(x)
  })
  return test.includes(path)
}

function matchOneRule(to, rule) {
  const groups = store.state.user.groups
  const path = to.path
  const test = []
  groups.forEach(function(item) {
    const g = item.split("-")
    const x = "/rules/" + g[3] + "/" + rule
    test.push(x)
  })
  return test.includes(path)
}

Vue.use(VueRouter)
Vue.use(OktaVue, { oktaAuth })

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aide/',
    name: 'Help',
    component: Help,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/doc/',
    name: 'Doc',
    component: Doc
  },
  {
    path: '/callback',
    component: LoginCallback
  },
  {
    path: '/partnerList/',
    name: 'PartnerList',
    component: PartnerList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/partner/:company/',
    name: 'Partner',
    component: Partner,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
        || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchPartner(to)){
        next()
      }
    }
  },
  {
    path: '/rules/:company/',
    name: 'Rules',
    component: Rules,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchRules(to)){
        next()
      }
    }
  },
  {
    path: '/rules/:company/co_rules/',
    name: 'Co_rule',
    component: Co_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "co_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/tdt_rules/',
    name: 'Tdt_rule',
    component: Tdt_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "tdt_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/g_rules/',
    name: 'G_rule',
    component: G_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "g_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/rh_rules/',
    name: 'Rh_rule',
    component: Rh_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "rh_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/pt_rules/',
    name: 'Pt_rule',
    component: Pt_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "pt_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/a_rules/',
    name: 'A_rule',
    component: A_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "a_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/ca_rules/',
    name: 'Ca_rule',
    component: Ca_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "ca_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/spe_rules/',
    name: 'Spe_rule',
    component: Spe_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "spe_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/c_rules/',
    name: 'C_rule',
    component: C_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "c_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/adm_rules/',
    name: 'Adm_rule',
    component: Adm_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "adm_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/se_rules/',
    name: 'Se_rule',
    component: Se_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "se_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/rf_rules/',
    name: 'Rf_rule',
    component: Rf_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "rf_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/gi_rules/',
    name: 'Gi_rule',
    component: Gi_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "gi_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/gca_rules/',
    name: 'Gca_rule',
    component: Gca_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "gca_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/ie_rules/',
    name: 'Ie_rule',
    component: Ie_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "ie_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/rgpd_rules/',
    name: 'Rgpd_rule',
    component: Rgpd_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "rgpd_rules")){
        next()
      }
    }
  },
  {
    path: '/rules/:company/cd_rules/',
    name: 'Cd_rule',
    component: Cd_rule,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchOneRule(to, "cd_rules")){
        next()
      }
    }
  },
  {
    path: '/partner/:company/files/',
    name: 'File',
    component: File,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("GG-USR-APPCONFORMITE-METIER")
      || store.state.user.groups.includes("GG-USR-APPCONFORMITE-ADMIN")){
        next()
      }
      else if(matchFiles(to)){
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
