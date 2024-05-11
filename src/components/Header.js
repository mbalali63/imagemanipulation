import headerImage from './../assets/images/header.jpg';
import {hbg_L_D,hbg_R_D} from './../colors.js'

export default function Header({isMobile,isHamburgerOpen,functionMode}) {
    
    const headerSectionClassName = isMobile ? 'header-section flexcol alignCenter justifyAround gap30' : 'header-section flexrow alignCenter justifyAround';
    const headerSectionStyle = {background: isMobile ? 'background-color:#fff' :`linear-gradient(to right, ${hbg_L_D},${hbg_R_D}`}
    let headerImageContainerStyle;
    if (isMobile) {
        headerImageContainerStyle = {width: '100%'}
    } else {
        headerImageContainerStyle = {width: '35%'}
    }
    const h1Style = isMobile ? {fontSize: '25px'} : {fontSize: '40px'}
    return (
        <section className={headerSectionClassName} style = {headerSectionStyle}>
            <div className="header-image-container" style = {headerImageContainerStyle}>
                <img src={headerImage} alt="image manipulation"/>
            </div>
            <h1 style = {h1Style} >Image Manipulation</h1>
        </section>
    )
}