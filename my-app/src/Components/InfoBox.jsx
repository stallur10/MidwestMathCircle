import './InfoBox.css'

function InfoBox({mainText, littleText, isRobotics}) {
  return (
    <div className='container'>
        <h1 className={isRobotics ? 'big robotics' : 'big'}>{mainText}</h1>
        <h3 className={isRobotics ? 'small robotics' : 'small'}>{littleText}</h3>
    </div>
    
  )
}

export default InfoBox; 