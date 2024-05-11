import {fcbb_L_D,fcbb_R_D} from './../colors.js'
import {fcbb_L_M,fcbb_R_M} from './../colors.js'

export default function SizeInputBox({isMobile,functionMode,processStage}) {
    const sizeInputBoxSectionStyle = isMobile 
    ?
        {
            display: processStage === 'getData' ? 'flex' : 'none',
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
            width: '80%',
            background: `linear-gradient(to bottom, ${fcbb_L_D}, ${fcbb_R_D}`,
            color:'#fff',
            padding:'30px',
            gridColumn: '2/3'

        }
    const h2Style = isMobile 
        ?
            {
                fontSize: '14px',
                fontWeight:'400'
            }
        :
            {
                fontSize: '25px',
                fontWeight:'400'
            }
    const sizeInputContainerStyle = isMobile
        ?
            {
                width:'100%',
                display:'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap:'20px'
            }
        :
            {
                width:'60%',
                display:'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap:'33px'
            }
    const sizeInputBoxStyle = {
        width: '30%',
        padding: '10px 20px'
    }
    const buttonStyle = isMobile 
        ?
            {
                padding:'10px 15px',
                fontSize:'11px'
            }
        :
            {
                padding:'12px 43px',
                fontSize:'20px'
            }
    const pStyle = isMobile
        ?
            {}
        :
            {
                fontSize: '20px',
                fontWeight:'400'
            }
    return (
        <section className = "size-input-box-section" style = {sizeInputBoxSectionStyle}>
            <h2 style = {h2Style}>Enter the size</h2>
            <div className = "size-input-container" style = {sizeInputContainerStyle}>
                <input 
                    className = "size-input-box" 
                    id="left-box" 
                    style = {sizeInputBoxStyle} 
                />
                <p style = {pStyle}>by</p>
                <input 
                    className = "size-input-box" 
                    id="right-box" 
                    style = {sizeInputBoxStyle}
                />
            </div>
            <button className = "convert-button" style = {buttonStyle} >Convert</button>
        </section>
    )
}