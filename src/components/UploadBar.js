import {fcbb_L_D,fcbb_R_D} from './../colors.js'
import {fcbb_L_M,fcbb_R_M} from './../colors.js'
import {fcb_L_D,fcb_R_D} from './../colors.js'
import {fcb_L_M,fcb_R_M} from './../colors.js'
import { useState } from 'react'


export default function UploadBar({isMobile,functionMode,selectedFile, handleSelectedFile,processStage,processHandler}) {
    
    const [reservedText,setReservedText] = useState('No');

    
    const uploadBarSectionStyle = isMobile 
        ?
            { 
                display: processStage === 'initialize' ? 'flex' : 'none',
                flexDirection:'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap:'50px',
                width: '80%',
                background: `linear-gradient(to bottom, ${fcbb_L_D}, ${fcbb_R_D})`,
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
                alignItems: 'center',
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
                fontSize:'16px',
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

    const handleSubmitForm = (event) => {

        if (!event.target.files[0]) return;
        handleSelectedFile(event.target.files[0]);
        const formData = new FormData();
        formData.append('imageFile',event.target.files[0]);

        try {
            const response = fetch('/api/imageupload', {
                method: 'POST',
                body: formData,
            })
            response.then((result) => {
                if (result.ok) {
                    processHandler();
                } else {
                    setReservedText('NOK');
                }
            })
        } catch (err) {
            console.log('File Upload Failed.');
        } 

    }
    


    return (
        <section className="upload-bar-section" style = {uploadBarSectionStyle}>            
        <div className = "file-input-container" >

            <input
                type = 'file'
                id='file1'
                name = 'imageFile'
                className='file'
                style = {fileInputStyle}
                onChange = {(e) => {                    
                    handleSubmitForm(e)
                }}
            />
            <label htmlFor='file1' style = {fileInputLabelStyle}>
                Upload Image
            </label>

        </div>

            <div className="image-prop-container" style = {imagePropContainerStyle}>                
                <p style = {imagePropsStyle}>Image File Name: {selectedFile?.name}</p>
                <p style = {imagePropsStyle}>Image Type: {selectedFile?.name.split('.').pop()}</p>
                <p style = {imagePropsStyle}>Image Size 300x200</p>
            </div>
            <p style = {pStyle}>
                Press Enter or Convert Button to reize <br/> {reservedText}
            </p>
        </section>
    )
}