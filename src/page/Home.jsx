import Feed from "../components/Feed/Feed"
import Sidebar from "../components/Sidebar/Sidebar"
import "./Home.scss"
function Dashboard({sidebar}) {
  return (
    <div>
      {/* <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar? "" : "large-container"}`}>
        <Feed/>
      </div> */}
    </div>
  )
}

export default Dashboard


// Delete this file not needed