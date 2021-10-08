import './_index.scss'
import Datatable from './Datatable.svelte'
import Data from './Data.svelte'
import DataRow from './DataRow.svelte'
import DataRowItem from './DataRowItem.svelte'
import Header from './Header.svelte'
import HeaderItem from './HeaderItem.svelte'

Datatable.Data = Data
Datatable.Data.Row = DataRow
Datatable.Data.Row.Item = DataRowItem
Datatable.Header = Header
Datatable.Header.Item = HeaderItem

export default Datatable
