import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {AppBar, Toolbar, IconButton, Badge, MenuItem,Menu,Typography} from '@mui/material'
import Cart from './Cart/Cart'
import { Amplify, Auth } from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react'
import awsExports from '../aws-exports';
Amplify.configure(awsExports);
function Navbar({totalItems , signOut}) {

    const[click, setClick] = useState(false);
    const[button,setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
 

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
  return (
    
    <nav className="navbar">

        <div className = "navbar-container">
            <Link to='/' className= "navbar-logo" onClick={closeMobileMenu}>
                LOGO <i className="fa-solid fa-ticket fa-xl"></i>   
                </Link>
                
                <div className='menu-icon' onClick={handleClick}>
                
                    <i className={click ? 'fas fa-x' : 'fas fa-bars'}/>
                </div>
    <ul className={click ? 'nav-menu active' : 'nav menu'}>
              <ul className="nav-list">
  <li className="nav-item">
    <a href="/buy">Buy</a>
  </li>
  <li className="nav-item">
    <a href="/sell">Sell</a>
  </li>
  <li className="nav-item">
    <a onClick={signOut}>Sign Out</a>
  </li>
  

  {/* <li className="nav-item">
    <a href="/signIn">Sign In</a>
  </li> */}

 </ul>

</ul>
<a href="/cart" onClick={handleClick}>
      <IconButton aria-label="Show Cart Items" color="inherit">
        <Badge badgeContent={totalItems} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </a>          
            </div>
        </nav>


    
  )
}

export default withAuthenticator(Navbar)

{/* <nav className="navbar">
<ul className="nav-list">
  <li className="nav-item">
    <a href="/">Home</a>
  </li>
  <li className="nav-item">
    <a href="/about">About</a>
  </li>
  <li className="nav-item">
    <a href="/services">Services</a>
  </li>
  <li className="nav-item">
    <a href="/contact">Contact</a>
  </li>
</ul>
</nav> 






<ul className={click ? 'nav-menu active' : 'nav menu'}>
                   
                    <li className = 'nav-item'>
                        <Link to='/buy'
                         className='nav-links' 
                         onClick={closeMobileMenu}
                         >
                            Buy
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/sell'
                         className='nav-links'
                          onClick={closeMobileMenu}
                          >
                            Sell
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/signIn' 
                        className='nav-links-mobile'
                         onClick={closeMobileMenu}
                         >
                            Sign Up
                        </Link>
                    </li>
                    
                </ul> 

*/}