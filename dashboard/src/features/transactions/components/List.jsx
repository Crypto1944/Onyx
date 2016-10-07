import { BaseList } from 'features/shared/components'
import ListItem from './ListItem/ListItem'

const type = 'transaction'

export default BaseList.connect(
  BaseList.mapStateToProps(type, ListItem),
  BaseList.mapDispatchToProps(type)
)