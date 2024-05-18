import {dsb_L_D,dsb_R_D} from './../colors.js'
import {dsb_L_M,dsb_R_M} from './../colors.js'
import {fcbb_L_M,fcbb_R_M} from './../colors.js'
import ShareBox from './ShareBox.js'
import { useState } from 'react'

export default function ResultBox({isMobile,
                                   functionMode,
                                   processStage,
                                   resultLink
                                  })
{

    const successResultCaptionsList = [{name:'resize', caption: 'Image Resized'},
            {name:'rotate', caption: 'Image Rotated'},
            {name:'format', caption: 'Image Format Changed'},
            {name:'filter', caption: 'Filter set on the image'},
            {name:'background', caption: 'Image Background Removed'},
            {name:'crop', caption: 'Image Cropped'}
        ]
    const successResultCaption = successResultCaptionsList.find((item) => item.name === functionMode)
    const h2Style = isMobile
        ?
            {
                fontSize: '14px'

            }
        :
            {
                fontSize: '30px',
                textAlign: 'center'
            }
    const resultBoxSectionStyle = isMobile 
        ?
            {
                display: processStage === 'result' ? 'flex' : 'none',
                flexDirection:'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap:'50px',
                width: '80%',
                background: `linear-gradient(to bottom, ${fcbb_L_M}, ${fcbb_R_M}`,
                color:'#fff',
                padding:'30px',
            }
        :
            {
                gridColumn: '1/3',
                display: processStage === 'result' ? 'flex' : 'none',                
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                gap:'10px',
                width: '20%',
                paddingTop: '50px',
                backgroundColor:'transparent',
            }
    const buttonsContainerStyle = isMobile 
        ?
            {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap:'30px'
            }
        :
            {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap:'30px',
            }
    const resultButtonStyle = isMobile 
        ?
            {
                fontSize: '13px',
                padding: '16px 20px',
                background: `linear-gradient(to bottom, ${dsb_L_M}, ${dsb_R_M})`,
                color: '#000'
            }
        :
            {
                fontSize: '16px',
                width: '80%',
                justifySelf: 'center',
                padding: '16px 20px',
                background: `linear-gradient(to bottom, ${dsb_L_D}, ${dsb_R_D})`,
                color: '#fff'
            }
            
    const handleDownloadResult = () => {
        window.open(`http://127.0.0.1:4000/api/downloadResult/?filename=${resultLink}`);
    }
    

    return (
        <section className="result-box-section" style = {resultBoxSectionStyle}>
            <h2 style = {h2Style}>{successResultCaption.caption}</h2>
            <button className="result-button" style = {resultButtonStyle} onClick={handleDownloadResult}> Download </button>
            <ShareBox isMobile = {false} resultLink = {`http://127.0.0.1:4000/api/downloadResult/?filename=${resultLink}`}/>
        </section>
    )
}