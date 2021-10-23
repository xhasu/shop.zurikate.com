import React, { useState, useEffect } from 'react'

export const UITopBar = ({ handlePickColor, skinColor }) => {

  // keep order on ui
  const colors = [
    { classname: 'black', text: 'Black' },
    { classname: 'red', text: 'Red' },
    { classname: 'blue', text: 'Blue' },
    { classname: 'grey', text: 'Grey' },
    { classname: 'white', text: 'White' },
  ]

  const [selected, setSelected] = useState(0)

  const handleSelect = (index) => {
    setSelected(prev => index)
    handlePickColor(colors[index].classname);
  }

  useEffect(() => {
    // find in colors array the classname of skinColor
    const idx = colors.findIndex(color => color.classname === skinColor)
    setSelected(idx)
  }, [skinColor])

  return (
    <div className="ui ui-topbar">
      <div className="ui-head">
        <div className="ui-type">
          <b>1.</b> Select
        </div>
        <div className="ui-title">
          <span>Car</span> Color
        </div>
      </div>
      <div className="ui-bar">

        {colors.map((color, index) => {
          const isSelected = index === selected ? 'active' : '';
          return (
            <div className={`ui-bar-item ${color.classname} ${isSelected}`} onClick={(event) => handleSelect(index)} key={index}>
              <div className="ui-bar-info">
                <div className="ui-icon">
                  <img src="/images/icons/icon-angle-up.png" alt="arrow angle up" width="18" />
                </div>
                <div className="ui-text">{color.text}</div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export const UIBottomBar = ({ handlePickColor, updateSelected }) => {

  const original = {
    classname: 'original',
    text: 'Original'
  }

  // keep order on ui
  const colors = [
    { classname: 'gloss-luxury-black', text: 'Gloss Luxury Black' },
    { classname: 'gloss-fire-red', text: 'Gloss Fire Red' },
    { classname: 'gloss-golden-beach', text: 'Gloss Golden Beach' },
    { classname: 'gloss-satin-azure', text: 'Gloss Satin Azure' },
    { classname: 'matte-brown', text: 'Matte Brown' },
    { classname: 'matte-gun-metal', text: 'Matte Gun Metal' },
    { classname: 'matte-hard-black', text: 'Matte Hard Black' },
    { classname: 'reflective-zurikate', text: 'Reflective Zurikate' },
  ]

  const [selected, setSelected] = useState(0)

  const handleSelect = (index) => {
    setSelected(prev => index)
    handlePickColor(colors[index].classname);
  }

  const handleDefaultSelect = () => {
    setSelected(-1)
    handlePickColor(original.classname);
  }

  useEffect(() => {
    const idx = colors.findIndex(color => color.classname === updateSelected);
    setSelected(prev => idx)
    return () => { }
  }, [updateSelected])

  return (
    <div className="ui ui-bottombar">
      <div className="ui-head">
        <div className="ui-type">
          <b>2.</b> Select
        </div>
        <div className="ui-title">
          <span>Wheel</span> Color
        </div>
      </div>
      <div className="ui-group-bar">
        <div className="ui-bar">
          <div className={`ui-bar-item ${original.classname} ${selected == -1 ? 'active' : ''}`} onClick={handleDefaultSelect}>
            <div className="ui-bar-info">
              <div className="ui-icon">
                <img src="/images/icons/icon-angle-up.png" alt="arrow angle up" width="18" />
              </div>
              <div className="ui-text">{original.text}</div>
            </div>
          </div>
        </div>
        <div className="ui-bar">

          {colors.map((color, index) => {
            const isSelected = index === selected ? 'active' : '';

            return (
              <div className={`ui-bar-item ${color.classname} ${isSelected}`} onClick={(event) => handleSelect(index)} key={index}>
                <div className="ui-bar-info">
                  <div className="ui-icon">
                    <img src="/images/icons/icon-angle-up.png" alt="arrow angle up" width="18" />
                  </div>
                  <div className="ui-text">{color.text}</div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}