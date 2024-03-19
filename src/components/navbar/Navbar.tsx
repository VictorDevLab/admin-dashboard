import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* <img src="logo.svg" alt="" /> */}
        <span>DevLab DashBoard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" className="icon1" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://www.shutterstock.com/image-photo/image-handsome-smiling-young-african-600nw-722913181.jpg"
            alt=""
          />
          <span>Victor</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
