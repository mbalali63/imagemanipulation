import {fcbb_L_D,fcbb_R_D} from './../colors.js'
import {fcbb_L_M,fcbb_R_M} from './../colors.js'

export default function UploadBar({isMobile,functionMode,processStage}) {
    const uploadBarSectionStyle = isMobile 
        ?
            { 
                display: processStage === 'initialize' ? 'flex' : 'none',
                flexDirection:'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap:'50px',
                width: '80%',
                background: `linear-gradient(to bottom, ${fcbb_L_D}, ${fcbb_R_D}`,
                color:'#fff',
                padding:'30px',
            }
        :
            {
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent: 'space-between',
                gap:'50px',
                width: '90%',
                background: `linear-gradient(to bottom, ${fcbb_L_D}, ${fcbb_R_D}`,
                color:'#fff',
                padding:'30px',
                gridColumn: '1/2'
            }
    const imagePropContainerStyle = isMobile
        ?
            {
                width: '60%',
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap:'20px',
                justifyContent: 'space-between'
            }
        :
            {
                width: '60%',
                display:'flex',
                flexDirection: 'row',
                alignItems: 'cener',
                justifyContent: 'space-between'
            }
    const upladButtonStyle = isMobile 
        ?
            {
                width:'80%',
                padding: '20px 38px',
                fontSize: '14px'
            }
        :
            {
                width:'80%',
                padding: '26px 90px',
                fontSize: '20px'

            }
    const pStyle = isMobile
        ?
            {
                display:'none',
            }
        :
            {
                display: 'block'
            }

    return (
        <section className="upload-bar-section" style = {uploadBarSectionStyle}>
            <button className="uplad-button" style = {upladButtonStyle}>Upload Image</button>
            <div className="image-prop-container" style = {imagePropContainerStyle}>
                <p>image 1</p>
                <p>jpeg</p>
                <p>300x200</p>
            </div>
            <p style = {pStyle}>Press Enter or Convert Button to reize</p>
        </section>
    )
}