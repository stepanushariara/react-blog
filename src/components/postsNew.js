import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPosts} from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const {meta: {touched, error}} = field;
        const inputClassName = `form-control ${touched && error ? 'is-invalid' : ''}`;
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input {...field.input} className={inputClassName} type="text"/>
                <div className="invalid-feedback">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPosts(values);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Posts Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary"> Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }

}

function validate(values) {
    const errors = {};

    if (!values.title) errors.title = 'Please input a title';
    if (!values.categories) errors.categories = 'Please input some categories';
    if (!values.content) errors.content = 'Please input some content';

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewFrom'
})(
    connect(null, {createPosts})(PostsNew)
);