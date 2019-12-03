import React from 'react';
import './Preview.css';
import smiley1 from './smiley1.png';
import smiley2 from './smiley2.png';
import smiley3 from './smiley3.png';
import smiley4 from './smiley4.png';
import smiley5 from './smiley5.png';

function Preview(props) {

    const emojis = {
      smiley1: smiley1,
      smiley2: smiley2,
      smiley3: smiley3,
      smiley4: smiley4,
      smiley5: smiley5
    };

  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">
          {!props.preview.emoji ? (
            <img src={smiley5} className="preview-emoji-img"/>
          ) : (
            <img src={emojis[props.preview.emoji]} className="preview-emoji-img"/>
          )}
        </div>
        <div className="preview-feedback">
          {!props.preview.content ? (
            <p className="placeholder">
              Let us know what we did well or could improve...
            </p>
          ) : (
            <p className="preview-text">{props.preview.content}</p>
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
