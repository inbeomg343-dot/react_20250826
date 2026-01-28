import React from 'react'
import about from"../assets/img/intro.png";

const intro_Text={
  title:"port developer",
  desc:["talent is","found at the end of the","effort"]
}
const Intro = () => {
  return (
    <section id='intro'>
      <div className="intro_inner">
          <div className="intro_title">
              {intro_Text.title}
          </div>
          <div className="intro_lines" aria-hidden="true">
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
          </div>
          <div className="intro_text">
            <div className="text">
              <div>{intro_Text.desc[0]}</div>
              <div>{intro_Text.desc[1]}</div>
              <div>{intro_Text.desc[2]}</div>
        
              
            </div>
            <div className="img">
              <img src={about} alt="intro 이미지" />
            </div>
          </div>
          <div className="intro_lines bottom" aria-hidden="true">
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
          </div>
      </div>
    </section>
  )
}

export default Intro
