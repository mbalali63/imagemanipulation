import UploadBar from "./UploadBar"
import SizeInputBox from "./SizeInputBox"
import AngleInputBox from "./AngleInputBox"
import FormatInputBox from "./FormatInputBox"
import FilterInputBox from "./FilterInputBox"
import ResultBox from "./ResultBox"

export default function FuncBar({isMobile, 
                                 functionMode,
                                 selectedFile,
                                 handleSelectedFile,
                                 processStage,
                                 processHandler,
                                 processStageDefine,
                                 newSize,
                                 handleNewSize,
                                 rotationAngle,
                                 handleNewRotationANgle,
                                 newFormat,
                                 handleNewFormat,
                                 newFilter,
                                 handleNewFilter,
                                 resultLink,
                                 updateResultLink
                                })
{
    const functionTitlesList = [{name:'resize', caption: 'Image Resize'},
                                {name:'rotate', caption: 'Image Rotate'},
                                {name:'format', caption: 'Image Format Change'},
                                {name:'filter', caption: 'Image Visual Filter'},
                                {name:'background', caption: 'Image Background Remover'},
                                {name:'crop', caption: 'Image Crop'}
                               ]    
    const functionTitle = functionTitlesList.find((item) => item.name === functionMode)
    const h2Style = isMobile 
        ?  
            {
                fontSize: '20px',
                fontWeight: '400',
                alignSelf: 'start',
                marginLeft: '60px',
                marginTop: '10px'
            }
        :
            {
                width: '100%',
                gridColumn: '1/3',
                textAlign: 'left',
                padding:'50px'
            }
    const functionBarSectionStyle = isMobile 
        ?
            {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap:'30px',
                justifyContent: 'space-between',
                marginBottom:'80px'
            }
        :
            {
                width: '80%',
                display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                justifyItems:'center',
                marginBottom:'80px'
            }
    return (
        <section className="function-bar-section" style = {functionBarSectionStyle}>
            <h2 style = {h2Style}>{functionTitle.caption}</h2>
            <UploadBar 
                    isMobile = {isMobile} 
                    functionMode = {functionMode} 
                    selectedFile = {selectedFile} 
                    handleSelectedFile = {handleSelectedFile} 
                    processStage = {processStage} 
                    processHandler = {processHandler} 
            />
{            (functionMode === 'resize') && <SizeInputBox 
                    isMobile = {isMobile} 
                    functionMode = {functionMode} 
                    selectedFile = {selectedFile} 
                    processStage = {processStage} 
                    processHandler = {processHandler} 
                    processStageDefine = {processStageDefine}
                    newSize = {newSize}
                    handleNewSize = {handleNewSize}
                    resultLink = {resultLink}
                    updateResultLink = {updateResultLink}
            />
}            
{            (functionMode === 'rotate') && <AngleInputBox 
                    isMobile = {isMobile} 
                    functionMode = {functionMode} 
                    selectedFile = {selectedFile} 
                    processStage = {processStage} 
                    processHandler = {processHandler} 
                    processStageDefine = {processStageDefine}
                    rotationAngle = {rotationAngle}
                    handleNewRotationANgle = {handleNewRotationANgle}
                    resultLink = {resultLink}
                    updateResultLink = {updateResultLink}
            />
}
{            (functionMode === 'format') && <FormatInputBox 
                    isMobile = {isMobile} 
                    functionMode = {functionMode} 
                    selectedFile = {selectedFile} 
                    processStage = {processStage} 
                    processHandler = {processHandler} 
                    processStageDefine = {processStageDefine}
                    newFormat = {newFormat}
                    handleNewFormat = {handleNewFormat}
                    resultLink = {resultLink}
                    updateResultLink = {updateResultLink}
            />
}
{            (functionMode === 'filter') && <FilterInputBox 
                    isMobile = {isMobile} 
                    functionMode = {functionMode} 
                    selectedFile = {selectedFile} 
                    processStage = {processStage} 
                    processHandler = {processHandler} 
                    processStageDefine = {processStageDefine}
                    newFilter = {newFilter}
                    handleNewFilter = {handleNewFilter}
                    resultLink = {resultLink}
                    updateResultLink = {updateResultLink}
            />
}
            <ResultBox 
                    isMobile = {isMobile} 
                    functionMode = {functionMode} 
                    processStage = {processStage}
                    resultLink = {resultLink}
            />
        </section>
    )
}