import React, { useEffect, useState } from 'react';
import { getContent, updateContent } from '../services/contentService';

function ContentEditor() {
  const [content, setContent] = useState({});

  useEffect(() => {
    getContent().then(res => setContent(res.data));
  }, []);

  const saveContent = () => {
    updateContent(content).then(() => console.log('Content updated!'));
  };

  return (
    <div>
      <input value={content.h3} onChange={(e) => setContent({ ...content, h3: e.target.value })} />
      <input value={content.h4} onChange={(e) => setContent({ ...content, h4: e.target.value })} />
      <input value={content.h6} onChange={(e) => setContent({ ...content, h6: e.target.value })} />
      <input value={content.p} onChange={(e) => setContent({ ...content, p: e.target.value })} />
      <input value={content.triumph} onChange={(e) => setContent({ ...content, triumph: e.target.value })} />
      <input value={content.img} onChange={(e) => setContent({ ...content, img: e.target.value })} />
      <button onClick={saveContent}>Save</button>
    </div>
  );
}

export default ContentEditor;