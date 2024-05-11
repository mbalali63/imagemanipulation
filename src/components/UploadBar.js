import {fcbb_L_D,fcbb_R_D} from './../colors.js'
import {fcbb_L_M,fcbb_R_M} from './../colors.js'
import {fcb_L_D,fcb_R_D} from './../colors.js'
import {fcb_L_M,fcb_R_M} from './../colors.js'
import { useState } from 'react'

export default function UploadBar({isMobile,functionMode,processStage}) {
    const [selectedFile,setSelectedFile] = useState(null);
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
                padding:'30px 0',
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
                padding:'30px 0',
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
                flexDirection: 'column',
                alignItems: 'cener',
                justifyContent: 'space-between',
                gap:'20px'
            }
    const fileInputStyle = isMobile
        ?
            {
                opacity:'0',
                width:'0.1px',
                height:'0.1px',
                position:'absolute'
            }
        :
            {
                opacity:'0',
                width:'0.1px',
                height:'0.1px',
                position:'absolute'
            }
    const fileInputLabelStyle = isMobile 
        ?
            {
                display: 'block',
                position: 'relative',
                width: '100%',
                background: `linear-gradient(to right, ${fcb_L_D}, ${fcb_R_D})`,
                color: '#000',
                border:'1px solid black',
                cursor: 'pointer',
                padding: '20px 30px',
                margin: '0 auto',
                fontSize: '14px'
            }
        :
            {
                display: 'block',
                position: 'relative',
                width: '100%',
                background: `linear-gradient(to right, ${fcb_L_D}, ${fcb_R_D})`,
                color: '#000',
                border:'1px solid black',
                cursor: 'pointer',
                padding: '26px 90px'
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
                padding: '26px 90px',
                fontSize: '20px'

            }
    const imagePropsStyle = isMobile 
        ?
            {
                fontSize:'11px',
                width: '100%',
            }
        :
            {
                fontSize:'20px',
                width: '100%',
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
        <div className = "file-input-container" >
            <input 
                type = 'file' 
                id='file' 
                className='file' 
                style = {fileInputStyle} 
                onChange={
                    (e) => {
                        const [file] = e.target.files;
                        console.log(file)
                        setSelectedFile(file)
                    }
                }/>
            <label for='file' style = {fileInputLabelStyle}>
                Upload Image                
            </label>
        </div>

            <div className="image-prop-container" style = {imagePropContainerStyle}>                
                <p style = {imagePropsStyle}>Image File Name: {selectedFile?.name}</p>
                <p style = {imagePropsStyle}>Image Type: {selectedFile?.name.split('.').pop()}</p>
                <p style = {imagePropsStyle}>Image Size 300x200</p>
            </div>
            <p style = {pStyle}>
                Press Enter or Convert Button to reize <br/>
            </p>
        </section>
    )
}