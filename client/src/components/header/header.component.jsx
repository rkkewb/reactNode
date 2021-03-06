import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from  '../../firebase/firebase.utilis';
import './header.style.scss';
import {connect} from 'react-redux';
import ShoppingCart from '../shopping-cart/shopping-card.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'





const Header =({currentUser,hidden})=>{
return(
<div className ='header'>

<Link className='logo-container' to='/'>
<Logo className='logo'/>
</Link>
<div className='options'>
<Link className ='option' to ='/shop'>SHOP</Link>
<Link className ='option' to ='/Contact'>CONTACT</Link>
{
currentUser?
<div className ='option' onClick={()=>auth.signOut()}>SIGN OUT</div>:
<Link className ='option' to ='/login'>SIGN IN</Link>
}
<ShoppingCart/>
</div>
{hidden ? null :<CartDropdown/>}


</div>
)               
}
const mapStateToPros = ({user:{currentUser},cart:{hidden}})=>({currentUser,hidden})
export default connect(mapStateToPros)(Header);