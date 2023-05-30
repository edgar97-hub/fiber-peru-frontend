import React, { useState, useEffect, useRef } from 'react'
import './welcome.scss'

const colors = [
  {
    title: 'test1',
    description: 'test1',
    color: '',
    img: 'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg',
    size: '100%',
    position: '50% 35px',
  },
  {
    title: 'test2',
    description: 'test2',
    color: '',
    img: 'https://estaticos-cdn.elperiodico.com/clip/242b59de-fb9e-4f02-b89e-ed4ab4a85537_alta-libre-aspect-ratio_default_0.jpg',
    size: '40%',
    position: '50% 35px',
  },
  {
    title: 'test3',
    description: 'test3',
    color: '',
    img: 'data:image/jpeg;base64,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',
    size: '40%',
    position: '50% 35px',
  },
]

const delay = 4500

export default function Slideshow() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    // console.log(colors)
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )

    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <div className="slideshow">
      <div
        className=" slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((item, index) => (
          <div
            className="slide"
            key={index}
            style={{
              background: ` url(${item.img})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="info">
              <div className="title animate-charcter line lineUp">{item.title}</div>
              <div className="description line lineUp">{item.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`  slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
