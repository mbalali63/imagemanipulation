import { setSelectionRange } from '@testing-library/user-event/dist/utils/index.js'
import {fcbb_L_D,fcbb_R_D} from './../colors.js'
import {fcbb_L_M,fcbb_R_M} from './../colors.js'

export default function FormatInputBox({isMobile,
                                      functionMode,
                                      selectedFile,
                                      processStage,
                                      processHandler,
                                      processStageDefine,
                                      newFilter,
                                      handleNewFilter,
                                      resultLink,
                                      updateResultLink
                                    })
{
    const filterInputBoxSectionStyle = isMobile 
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
    const filterInputContainerStyle = isMobile
        ?
            {
                width:'100%',
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap:'20px'

            }
        :
            {
                width:'100%',
                display:'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                justifyItems: 'center',
                gap:'33px',                
            }
    const filterInputBoxStyle = {
        width: '30%',
        padding: '10px 20px',
        border:'1px solid green'
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
    const handleFilterInputValueChange = (e) => {
        handleNewFilter(e.target.id);
    }
    const convertHandler = () => {
        const imageDataPack = {
            imageName: selectedFile.name,
            format: newFilter,
        }
        try {
            const response = fetch('http://127.0.0.1:4000/addFilter',{
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
            console.log('Image filter adding Failed.');
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
    const filterInputBoxLabelStyle = isMobile 
            ?
                {}
            :
                {
                }
    const filterListItemContainerStyle = isMobile
            ?
                {
                    width: '80%',
                }
            :
                {
                    width:'80%',
                }

    const rawFiltersList = ['blur','gamma','negate','normalise','convolve','linear'];
    const filterListItemContainer = rawFiltersList.map( (item) => {
        return (
            <div className = 'filterListItemContainer' style = {filterListItemContainerStyle}>
                <input
                    type = "radio"
                    name = "new-filter"
                    className = "filter-input-box"
                    id={item}
                    style = {filterInputBoxStyle}
                    onChange={(e) => handleFilterInputValueChange(e)}
                />
                <label htmlFor={item} style = {filterInputBoxLabelStyle} > {item} </label>
            </div>
        )
    })
    return (
        <section className = "filter-input-box-section" style = {filterInputBoxSectionStyle}>
            <div className='h2-reset-container' style={h2ResetContainerStyle}>
                <h2 style = {h2Style}>Select the new filter</h2>
                <button className="reset-btn" style={resetBtnStyle} onClick={resetHandler}>Upload another image</button>
            </div>
            <div className = "filter-input-container" style = {filterInputContainerStyle}>
                {filterListItemContainer}
            </div>
            <button className = "convert-button" style = {buttonStyle} onClick={(e) => convertHandler(e)} >Convert</button>
        </section>
    )
}