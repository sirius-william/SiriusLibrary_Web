// import { ElButton, ElRow, ElCol, ElForm } from 'element-plus'
import ElementPlus from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

export default (app) => {
  locale.use(lang)
  app.use(ElementPlus)
}
