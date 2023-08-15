import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../shared/icons";

const Select = (props) => {
  const { options = [], placeholder, keyValue, keyShow, handleClick } = props;

  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (open) {
      // ref.current.scrollIntoView({'behavior': 'smooth', 'block': 'center'});
    }

    return () => {};
  }, [open]);

  useEffect(() => {
    const mouseLeadeHandler = (e) => {
      setOpen(false);
    };

    ref.current && ref.current.addEventListener("mouseleave", mouseLeadeHandler);

    return () => {
      ref.current && ref.current.removeEventListener("mouseleave", mouseLeadeHandler);
    };
  }, []);

  const handleClickItem = (e) => {
    handleClick(e.currentTarget.innerHTML);
    setOpen(false);
  };
  if (options.length === 0) return null;

  return (
    <div className={`relative ui-select ${open ? "ui-select-open" : ""}`} ref={ref}>
      {placeholder && (
        <div
          className="ui-select-placeholder"
          onClick={() => {
            setOpen((prev) => !prev);
          }}>
          {placeholder}
        </div>
      )}
      <div className="ui-select-list" hidden={!open}>
        {options
          .filter((item) => item.title != placeholder)
          .map((item, index) => {
            return (
              <div className="ui-select-item" onClick={handleClickItem} key={index} value={item[keyValue]}>
                {item[keyShow]}
              </div>
            );
          })}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-5 select-none cursor-pointer">
        {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
    </div>
  );
};

export default Select;
