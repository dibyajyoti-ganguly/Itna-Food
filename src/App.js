import Logo from "./images/Group 18116.png"


const Header = ()=>{
  return(
    <div className='header'>
      <div className='logo-container'>
        <img className="logo" src={Logo} alt="logo"></img>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>  
    </div>
  )
}


function App(){
  return (
    <div className='app'>
      <Header/>

    </div>
  )
}




export default App;
