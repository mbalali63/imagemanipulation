import {mb_L_M,mb_R_M} from './../colors.js'
import {mb_L_D,mb_R_D} from './../colors.js'
import {mhl_L_D,mhl_R_D} from './../colors.js'
import {mhl_L_M,mhl_R_M} from './../colors.js'

export default function NavBar({isMobile,isHamburgerOpen,functionMode,refTarget}) {
    const navBarSectionStyle = isMobile 
            ? 
                {
                    width:'100%',
                    background: `linear-gradient(to right,${mb_L_M},${mb_R_M}`,
                    color:'#fff',
                    position:'fixed',
                    paddingTop:'20%'
                }
            : 
                {
                    background: `linear-gradient(to right,${mb_L_D},${mb_R_D}`,
                    width: '75%',
                    backgroundColor:'#fff',
                };
    const hamburgerStyle = isMobile 
            ?
                {
                    display: 'flex',
                    transform: isHamburgerOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                }
            :
                {
                    display: 'none'
                }
    const navBarMenuStyle = isMobile
            ? 
                {
                    fontSize: '20px',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap:'20px',
                    display: isHamburgerOpen ? 'flex' : 'none'
                }
            :
                {
                    fontSize: '30px',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'center',
                    gap:'30px'
                };

    const navBarMenuItemStyle = (highlight) => {
            return isMobile
            ?
                {
                    padding: '16px 0',
                    fontWeight: highlight && 'bold'
                }
            :
                {
                    padding: '20px 10px',
                    fontWeight: highlight && 'bold'
                };
            }
    
    const highlightMenuItem = (e) => {
        const fontColor = isMobile ? '#000' : '#000';
        e.target.style.background = `linear-gradient(to bottom, ${mhl_L_D},${mhl_R_D})`; 
        e.target.style.color = fontColor;                    
    }
    const deHighlightMenuItem = (e) => {
        const colorLeft = isMobile ? mb_L_M : mb_L_D
        const colorRight = isMobile ? mb_R_M : mb_R_D
        const colorDirection = isMobile ? 'to right' : 'to bottom'
        const fontColor = isMobile ? '#fff' : '#000';
        e.target.style.background = `linear-gradient(${colorDirection}, ${colorLeft},${colorRight})`;
        e.target.style.color = fontColor;
    }
    const menuItemLabels = ['Resize','Rotate','Format','Filter','Background','Crop'];
    const menuItems = menuItemLabels.map((item,index) => {
        return <li 
            key={index}
            className='nav-bar-menu-item'
            style={navBarMenuItemStyle(functionMode === item.toLocaleLowerCase())}
            onMouseEnter={highlightMenuItem}
            onMouseLeave={deHighlightMenuItem}
        >
            {item}
        </li>
    })
    return (
        <section className = 'nav-bar-section' style={navBarSectionStyle}>
            <div className = 'hamburger-image-container' id = "hamburger" style = {hamburgerStyle}>
                <span className="material-symbols-outlined">menu</span>
            </div>            
            <ul className='nav-bar-menu' style = {navBarMenuStyle} ref={refTarget} >
                {menuItems}
            </ul>
        </section>
    )
}