// site1/src/components/Collapsible/CollapsibleRow.jsx
import React, { useState, useRef, useEffect } from 'react';

function CollapsibleRow({ title, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    setMaxHeight(open ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [open, children]);

  return (
    <div className={`studio-collapsible-row ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="studio-collapsible-header">
        <span className="studio-collapsible-icon">{open ? '✔️' : '☐'}</span>
        <span className="studio-collapsible-title">{title}</span>
        <span className={`studio-arrow ${open ? "open" : ""}`} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
      </div>
      <div
        ref={contentRef}
        className={`studio-collapsible-content ${open ? "open" : ""}`}
        style={{ maxHeight: maxHeight }}
      >
        {children}
      </div>
    </div>
  );
}

export default CollapsibleRow;
