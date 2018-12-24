import loadable from 'react-loadable'
import { Loading } from './index'

const importComponent = (file: string) =>
  loadable({
    loader: () => import('../views/' + file),
    loading: Loading
  })

export default importComponent
