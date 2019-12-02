import React, { useState } from 'react';
import './Form.css';

function Form(props) { 

  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea
        className="form-textarea"
        name="feedback"
        rows="4"
        onChange={e => props.updatePreview({ content: e.currentTarget.value })}
        placeholder="Let us know what we did well or could improve..."
      />

      <label className="form-label">How many in your party?</label>
      <input
        className="form-input"
        type="number"
        name="party"
        min="1"
        onChange={e => props.updatePreview({ count: e.currentTarget.value })}
        placeholder="2"
      />

      <label className="form-label">How was your meal?</label>
      <div>
        <label>
          <input type="radio" onChange={e => props.updatePreview({emoji: e.currentTarget.value})} id="smiley1" value="smiley1" name="emojiInput"/>
          <span role="img" aria-label="smiley">
            😍
          </span>
        </label>
        <label>
          <input type="radio" onChange={e => props.updatePreview({emoji: e.currentTarget.value})} id="smiley2" value="smiley2" name="emojiInput"/>
          <span role="img" aria-label="smiley">
            🙂
          </span>
        </label>
        <label>
          <input type="radio" onChange={e => props.updatePreview({emoji: e.currentTarget.value})} id="smiley3" value="smiley3" name="emojiInput"/>
          <span role="img" aria-label="smiley">
            😕
          </span>
        </label>
        <label>
          <input type="radio" onChange={e => props.updatePreview({emoji: e.currentTarget.value})} id="smiley4" value="smiley4" name="emojiInput"/>
          <span role="img" aria-label="smiley">
            🙁
          </span>
        </label>
        <label>
          <input type="radio" onChange={e => props.updatePreview({emoji: e.currentTarget.value})} id="smiley5" value="smiley5" name="emojiInput"/>
          <span role="img" aria-label="smiley">
            😣
          </span>
        </label>
      </div>
    </div>
  );
}

export default Form;
