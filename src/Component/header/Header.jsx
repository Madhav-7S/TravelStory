import "./Header.css";

function Header() {
  return (
    <div>
      <div className="box">
        <div className="logo">Travel Story</div>
        <div className="search">
          <input type="text" placeholder="Search Notes..." />
        </div>

        <div className="profile">
          <div className="name">
            <h3>M</h3>
          </div>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
