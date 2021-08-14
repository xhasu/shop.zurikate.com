import React, { useState, useRef, useEffect } from 'react'

const Select = (props) => {

  const {
    options = [],
    placeholder,
    keyValue,
    keyShow,
    handleClick,
  } = props;

  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {

    if( open ) {
      // ref.current.scrollIntoView({'behavior': 'smooth', 'block': 'center'});
    }
  
    return () => { }
  }, [open])

  useEffect(() => {

    const mouseLeadeHandler = (e) => {
      setOpen(false);
    };

    ref.current.addEventListener('mouseleave', mouseLeadeHandler);
    
    return () => {
      ref.current && ref.current.removeEventListener('mouseleave', mouseLeadeHandler);
    }
  }, [])

  const handleClickItem = (e) => {
    handleClick(e.currentTarget.innerHTML);
    setOpen(false);
  }

  return (
    <div className={`ui-select ${open ? 'ui-select-open': ''}`} ref={ref}>
      { placeholder && <div className="ui-select-placeholder" onClick={() => {setOpen(prev => !prev)}}>{placeholder}</div>}
      <div className="ui-select-list" hidden={!open}>
        { options.filter(item => item.title != placeholder).map((item, index) => {
          return (
            <div className="ui-select-item" onClick={handleClickItem} key={index} value={item[keyValue]}>
              {item[keyShow]}
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default Select
