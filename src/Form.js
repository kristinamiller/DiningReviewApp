import React, { useState } from 'react';
import './Form.css';
import smiley1 from './smiley1.png';
import smiley2 from './smiley2.png';
import smiley3 from './smiley3.png';
import smiley4 from './smiley4.png';
import smiley5 from './smiley5.png';

function Form(props) { 

  return (
    <div className="form">
      <label className="form-label">How was your meal?</label>
      <div className="form-radio-emojis">
        <label className="form-radio-label">
          <input
            className="form-radio-input"
            type="radio"
            onChange={e =>
              props.updatePreview({
                ...props.preview,
                emoji: e.currentTarget.value
              })
            }
            id="smiley1"
            value="smiley1"
            name="emojiInput"
          />
          <img src={smiley1} className="form-radio-img" />
        </label>
        <label className="form-radio-label">
          <input
            className="form-radio-input"
            type="radio"
            onChange={e =>
              props.updatePreview({
                ...props.preview,
                emoji: e.currentTarget.value
              })
            }
            id="smiley2"
            value="smiley2"
            name="emojiInput"
          />
          <img src={smiley2} className="form-radio-img" />
        </label>
        <label className="form-radio-label">
          <input
            className="form-radio-input"
            type="radio"
            onChange={e =>
              props.updatePreview({
                ...props.preview,
                emoji: e.currentTarget.value
              })
            }
            id="smiley3"
            value="smiley3"
            name="emojiInput"
          />
          <img src={smiley3} className="form-radio-img" />
        </label>
        <label className="form-radio-label">
          <input
            className="form-radio-input"
            type="radio"
            onChange={e =>
              props.updatePreview({
                ...props.preview,
                emoji: e.currentTarget.value
              })
            }
            id="smiley4"
            value="smiley4"
            name="emojiInput"
          />
          <img src={smiley4} className="form-radio-img" />
        </label>
        <label className="form-radio-label">
          <input
            className="form-radio-input"
            type="radio"
            onChange={e =>
              props.updatePreview({
                ...props.preview,
                emoji: e.currentTarget.value
              })
            }
            id="smiley5"
            value="smiley5"
            name="emojiInput"
          />
          <img src={smiley5} className="form-radio-img" />
        </label>
      </div>

      <label className="form-label">How many in your party?</label>
      <input
        className="form-input"
        type="number"
        name="party"
        min="1"
        onChange={e =>
          props.updatePreview({
            ...props.preview,
            count: e.currentTarget.value
          })
        }
        placeholder="2"
      />

      <label className="form-label">Your feedback</label>
      <textarea
        className="form-textarea"
        name="feedback"
        rows="4"
        onChange={e =>
          props.updatePreview({
            ...props.preview,
            content: e.currentTarget.value
          })
        }
        placeholder="Let us know what we did well or could improve..."
      />
    </div>
  );
}

export default Form;
