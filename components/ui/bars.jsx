import React, { useState } from 'react'

export const UITopBar = ({ handlePickColor }) => {

  const colors = [
    { classname: 'white', text: 'White' },
    { classname: 'red', text: 'Red' },
    { classname: 'blue', text: 'Blue' },
    { classname: 'grey', text: 'Grey' },
    { classname: 'black', text: 'Black' },
  ]

  const [selected, setSelected] = useState(0)

  const handleSelect = (index) => {
    setSelected(index)
    handlePickColor(index);
  }

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
            <div className={`ui-bar-item ${color.classname} ${isSelected}`} onClick={(event) => handleSelect(index)}>
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

export const UIBottomBar = ({ handlePickColor }) => {

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
    setSelected(index)
    handlePickColor(index);
  }

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
      <div className="ui-bar">

        {colors.map((color, index) => {
          const isSelected = index === selected ? 'active' : '';

          return (
            <div className={`ui-bar-item ${color.classname} ${isSelected}`} onClick={(event) => handleSelect(index)}>
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