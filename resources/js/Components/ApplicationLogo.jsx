import logo from "../Pages/asset/logo.png"
export default function ApplicationLogo(props) {
    return (
      <>
      <div className=" flex flex-row  items-center">
        <img src={logo} alt="logo" {...props} />
        <h1>BoardingHouse</h1>
      </div>
      </>
    );
}
