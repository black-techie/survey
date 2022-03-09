import { Fragment } from "react";
import Navbar from "../components/navbar";
import "../css/admin.css"
import { FaRegEdit, FaQuestion, FaUserCog, FaRegListAlt, FaFirefox, FaWpforms } from "react-icons/fa";
import Footer from "../components/footer";

export default function Admin() {

  const items: String[] = ["Add Admin",
    "Create Survey", "Browse Survey's", "Generate Report", "support"];
    
  const icons: any[] = [<FaUserCog />,
  <FaRegListAlt />, <FaFirefox />, <FaWpforms />, <FaQuestion />];

  const page = { page: "admin" }
  return (
    <Fragment>
      <Navbar {...page} />
      <div className="admin-panel">
        <div className="header"><FaRegEdit /><h1>Admin Panel</h1></div>
        <div className="hr" />
        <div className="items">
          {
            items.map((item, index) => {
              return (
                <div key={index}>
                  {icons[index]}
                  <br />
                  <div className="split"></div>
                  <h4>{item}</h4>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}
