import {fb_L_D,fb_R_D} from './../colors.js'

export default function Footer({isMobile}) {
    const footerSectionStyle = isMobile
    ?
        {
            width: '100%',
            background: `linear-gradient(to right, ${fb_L_D}, ${fb_R_D}`,
            color:'#fff',
            textAlign: 'center',
            padding: '6px 0',
            fontSize: '11px'
        }
    :
        {
            width: '100%',
            background: `linear-gradient(to right, ${fb_L_D}, ${fb_R_D}`,
            color:'#fff',
            textAlign: 'center',
            padding: '15px 0'
        }
    return (
        <section className="footer-section" style={footerSectionStyle}>
            <p >Designed by <a href="#">Mahdi Balali</a></p>
        </section>
    )
}