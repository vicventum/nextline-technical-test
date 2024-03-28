import { setClient } from '~/services/api-client'

export default ({ app, store }) => {
  setClient(app.$axios)
}