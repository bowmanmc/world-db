import React, {PropTypes} from 'react';


const TextArea = ({ name, label, onChange, placeholder, value, error }) => {

    let wrapperClass = 'form__group';

    if (error && error.length > 0) {
        wrapperClass += ' has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <textarea type="textarea"
                    name={name}
                    className="form__input"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
                { error && <div className="alert alert-danger">{error}</div> }
            </div>
        </div>
    );
};

TextArea.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextArea;
