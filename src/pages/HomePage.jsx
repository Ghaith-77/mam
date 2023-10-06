import axios from 'axios'
import MyTable from '../component/table'

function HomePage() {
  return (
  <div className="HomePage_body">
    <MyTable/>
    <div className="searchbar">
      <img src="../../public/assets/searchicon.png" alt="" />
    </div>
  </div>
    )
}
export default HomePage
