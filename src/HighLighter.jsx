import React from 'react'

function HighLighter({ text, tagName, tagColor }) {
    return (
        <div className="highlighter" style={{ backgroundColor: tagColor }}>
            <span className="text">{text}</span>
            <span className="tag">{tagName}</span>
        </div>
    )
}

export default HighLighter