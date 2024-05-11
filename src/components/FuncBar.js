import UploadBar from "./UploadBar"
import SizeInputBox from "./SizeInputBox"
import ResultBox from "./ResultBox"

export default function FuncBar({isMobile, functionMode, processStage}) {
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
                fontWeight: '400',
                alignSelf: 'start',
                marginLeft: '60px'
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
                justifyItems:'center'
            }
    return (
        <section class="function-bar-section" style = {functionBarSectionStyle}>
            <h2 style = {h2Style}>{functionTitle.caption}</h2>
            <UploadBar isMobile = {isMobile} functionMode = {functionMode} processStage = {processStage} />
            <SizeInputBox isMobile = {isMobile} functionMode = {functionMode} processStage = {processStage} />
            <ResultBox isMobile = {isMobile} functionMode = {functionMode} processStage = {processStage} />
        </section>
    )
}