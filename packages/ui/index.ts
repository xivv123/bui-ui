
import { BuiButton } from 'bui-ui-components/button'
import { BuiTag } from 'bui-ui-components/tag'
import { BuiInput } from 'bui-ui-components/input'
import { BuiDatePicker } from 'bui-ui-components/date-picker'
import Components from './components'
import { App } from 'vue'
import 'uno.css'
import './styles/index.scss'

const Installer = {
  install(app: App) {
    Components.forEach(c => app.use(c))
  }
}

export default Installer
export { BuiButton, BuiTag, BuiInput, BuiDatePicker }
