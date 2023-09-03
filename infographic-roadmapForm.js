import React, { useState } from 'react';

function Form() {
const [formData, setFormData] = useState({
h6: '',
h4: '',
h3: '',
p: '',
triumph: '',
body: '',
imgSrc: ''
});

const handleSubmit = (e) => {
e.preventDefault();
console.log(formData);
};

const handleChange = (e) => {
setFormData({...formData, [e.target.name]: e.target.value});
};

return (
<form onSubmit={handleSubmit}>
<input name='h6' value={formData.h6} onChange={handleChange} />
<input name='h4' value={formData.h4} onChange={handleChange} />
<input name='h3' value={formData.h3} onChange={handleChange} />
<input name='p' value={formData.p} onChange={handleChange} />
<input name='triumph' value={formData.triumph} onChange={handleChange} />
<input name='body' value={formData.body} onChange={handleChange} />
<input name='imgSrc' value={formData.imgSrc} onChange={handleChange} />
<button type='submit'>Submit</button>
</form>
);
}

export default Form;