import { setSelectionRange } from '@testing-library/user-event/dist/utils/index.js'
import {fcbb_L_D,fcbb_R_D} from './../colors.js'
import {fcbb_L_M,fcbb_R_M} from './../colors.js'

export default function SizeInputBox({isMobile,
                                      functionMode,
                                      selectedFile,
                                      processStage,
                                      processHandler,
                                      processStageDefine,
                                      newSize,
                                      handleNewSize,
                                      resultLink,
                                      updateResultLink
                                    })
{
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
            gridColumn: '2/3',

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
                gap:'33px',                
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
    const handleSizeInputValueChange = (e) => {
        if (isNaN(Number(e.target.value))) {
            console.error(`${e.target.value} is not a valid numerical value`)
        } else {
            if (e.target.id === 'right-box') {                
                handleNewSize(newSize[0],parseInt(e.target.value));
            } else if (e.target.id === 'left-box') {
                handleNewSize(parseInt(e.target.value),newSize[1]);
            }
        }

    }
    const convertHandler = () => {
        const imageDataPack = {
            imageName: selectedFile.name,
            newSizeX: newSize[0],
            newSizeY: newSize[1]
        }
        try {
            const response = fetch('http://127.0.0.1:4000/api/newsize',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(imageDataPack)
            })
            response.then((result) => {
                if (result.ok) {
                    processHandler();
                    result.json().then((value) => {
                        updateResultLink(value.resultFileName);
                    })
                } else {
                    console.log('No response from server.')
                    //
                }
            })
        } catch (err) {
            console.log('Size Change Failed.');
        }
    }
    const resetHandler = () => {
        processStageDefine('initialize');
    }
    const resetBtnStyle = isMobile 
        ?
            {
                backgroundColor:'transparent',
                color: '#0050aa',
                border:'none',
                margin: '0',                
                cursor: 'pointer'
            }
        :
            {
                display: 'none'
            }
        const h2ResetContainerStyle = isMobile 
            ?
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                }
            :
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                }
    return (
        <section className = "size-input-box-section" style = {sizeInputBoxSectionStyle}>
            <div className='h2-reset-container' style={h2ResetContainerStyle}>
                <h2 style = {h2Style}>Enter the size</h2>
                <button className="reset-btn" style={resetBtnStyle} onClick={resetHandler}>Upload another image</button>
            </div>
            <div className = "size-input-container" style = {sizeInputContainerStyle}>
                <input 
                    type = "text"
                    className = "size-input-box" 
                    id="left-box" 
                    style = {sizeInputBoxStyle} 
                    onChange={(e) => handleSizeInputValueChange(e)}
                />
                <p style = {pStyle}>by</p>
                <input 
                    type = "text"
                    className = "size-input-box" 
                    id="right-box" 
                    style = {sizeInputBoxStyle}
                    onChange={(e) => handleSizeInputValueChange(e)}
                />
            </div>
            <button className = "convert-button" style = {buttonStyle} onClick={(e) => convertHandler(e)} >Convert</button>
        </section>
    )
}