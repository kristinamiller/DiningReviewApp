import React from 'react';
import './Preview.css';

function Preview(props) {

  const emojis = {
    smiley1: "😍",
    smiley2: "🙂",
    smiley3: "😕",
    smiley4: "🙁",
    smiley5: "😣",
  }

  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">
          <span role="img" aria-label="smiley">
            {!props.preview.emoji ? (
              <p>😍</p>
            ) : (
              <p>{emojis[props.preview.emoji]}</p>
            )}
          </span>
        </div>
        <div className="preview-feedback">
          {!props.preview.content ? (
            <p>Let us know what we did well or could improve...</p>
          ) : (
            <p>{props.preview.content}</p>
          )}
        </div>
        <div className="preview-party">
          {!props.preview.count ? (
            <p className="number-placeholder">2</p>
          ) : (
            <p className="number-updated">{props.preview.count}</p>
          )}
          <p className="people-dined-here">people dined here.</p>
        </div>
      </div>
    </section>
  );
}

export default Preview;
