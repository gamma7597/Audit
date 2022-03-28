import Vue from 'vue'
import Vuex from 'vuex'
import partner from './modules/partner'
import contact from './modules/contact'
import user from './modules/user'
import employee from './modules/employee'
import co_rules from './modules/rules/co_rules'
import tdt_rules from './modules/rules/tdt_rules'
import g_rules from './modules/rules/g_rules'
import rh_rules from './modules/rules/rh_rules'
import pt_rules from './modules/rules/pt_rules'
import a_rules from './modules/rules/a_rules'
import ca_rules from './modules/rules/ca_rules'
import spe_rules from './modules/rules/spe_rules'
import c_rules from './modules/rules/c_rules'
import adm_rules from './modules/rules/adm_rules'
import se_rules from './modules/rules/se_rules'
import rf_rules from './modules/rules/rf_rules'
import gi_rules from './modules/rules/gi_rules'
import gca_rules from './modules/rules/gca_rules'
import ie_rules from './modules/rules/ie_rules'
import rgpd_rules from './modules/rules/rgpd_rules'
import cd_rules from './modules/rules/cd_rules'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    partner,
    contact,
    user,
    employee,
    co_rules,
    tdt_rules,
    g_rules,
    rh_rules,
    pt_rules,
    a_rules,
    ca_rules,
    spe_rules,
    c_rules,
    adm_rules,
    se_rules,
    rf_rules,
    gi_rules,
    gca_rules,
    ie_rules,
    rgpd_rules,
    cd_rules
  }
})
