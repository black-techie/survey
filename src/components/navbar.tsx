import { Link } from 'react-router-dom';
import '../css/navbar.css'

interface obj {
  page: String;
}

export default function Navbar(page: obj) {
  if (page.page === "admin") {
    return (
      <>
        <nav>
          <Link to={"/"}> Home</Link>
          <Link to={"/admin"} className='selected'> Admin</Link>
          <Link to={"/login"}> Logout</Link>
        </nav>
        <div style={{ height: "55px" }}></div>
      </>
    )
  }
  else if (page.page === "login") {
    return (
      <>
        <nav>
          <Link to={"/"}> Home</Link>
          <Link to={"/admin"} className='selected'> Admin</Link>
          <Link to={"/login"}> Logout</Link>
        </nav>
        <div style={{ height: "55px" }}></div>
      </>
    )
  }
  else {
    return (
      <>
        <nav>
          <Link to={"/"} className='selected'> Home</Link>
          <Link to={"/admin"}> Admin</Link>
          <Link to={"/login"}> Downloads</Link>
        </nav>
        <div style={{ height: "64px" }}></div>
      </>
    )
  }
}
