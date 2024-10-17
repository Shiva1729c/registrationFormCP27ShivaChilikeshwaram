// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErrorMsg: '',
    lastNameErrorMsg: '',
    isSubmitSuccess: false,
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({
        firstNameErrorMsg: 'Required',
        lastNameErrorMsg: 'Required',
      })
    }

    if (firstName !== '' && lastName === '') {
      this.setState({
        lastNameErrorMsg: 'Required',
      })
    }
    if (firstName === '' && lastName !== '') {
      this.setState({
        firstNameErrorMsg: 'Required',
      })
    }

    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitSuccess: true, firstName: '', lastName: ''})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onClickFirstName = event => {
    if (event.target.value.trim() === '') {
      this.setState({firstNameErrorMsg: 'Required'})
    } else {
      this.setState({firstNameErrorMsg: ''})
    }
  }

  onClickLastName = event => {
    if (event.target.value.trim() === '') {
      this.setState({lastNameErrorMsg: 'Required'})
    } else {
      this.setState({lastNameErrorMsg: ''})
    }
  }

  renderInputFirstName = () => {
    const {firstName, firstNameErrorMsg} = this.state
    const errorInputClassName = firstNameErrorMsg ? 'error-input' : ''
    return (
      <>
        <label htmlFor="firstName" className="label-field">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={this.onChangeFirstName}
          className={`input-field ${errorInputClassName}`}
          placeholder="First name"
          onBlur={this.onClickFirstName}
        />
      </>
    )
  }

  renderInputLastName = () => {
    const {lastName, lastNameErrorMsg} = this.state
    const errorInputClassName = lastNameErrorMsg ? 'error-input' : ''
    return (
      <>
        <label htmlFor="lastName" className="label-field">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={this.onChangeLastName}
          className={`input-field ${errorInputClassName}`}
          placeholder="Last name"
          onBlur={this.onClickLastName}
        />
      </>
    )
  }

  renderFormContainer = () => {
    const {firstNameErrorMsg, lastNameErrorMsg} = this.state
    return (
      <form className="form-container" onSubmit={this.onFormSubmit}>
        <div className="input-container">
          {this.renderInputFirstName()}
          {firstNameErrorMsg && (
            <p className="error-msg">{firstNameErrorMsg}</p>
          )}
        </div>
        <div className="input-container">
          {this.renderInputLastName()}
          {lastNameErrorMsg && <p className="error-msg">{lastNameErrorMsg}</p>}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  submitAnotherResponse = () => {
    this.setState({isSubmitSuccess: false})
  }

  renderFormSubmitSuccessView = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitSuccess} = this.state
    return (
      <div className="registration-form-container">
        <h1 className="main-heading">Registration</h1>
        <div className="form-and-result-container">
          {!isSubmitSuccess
            ? this.renderFormContainer()
            : this.renderFormSubmitSuccessView()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
