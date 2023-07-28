import './InfoBox.css'

function InfoBox({mainText, littleText}) {
  return (
    <div className='container'>
        <h1 className='big'>{mainText}</h1>
        <h3 className='small'>{littleText}</h3>
    </div>
    
  )
}

export default InfoBox; 