import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, AlertContainer } from "react-bs-notifier";
export class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.alertOff();
    }
    render() {
        if (this.props.alertShow === false) return null;
        return (
            <AlertContainer>
                <Alert type="info" onDismiss={() => this.handleDismiss()} timeout={1900}>
                    {this.props.alertContent}
                </Alert>
            </AlertContainer>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.AlertShow,
        alertContent: state.AlertContent
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOn: () => {
            dispatch({ type: "ALERT_ON" })
        },
        alertOff: () => {
            dispatch({ type: "ALERT_OFF" })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)