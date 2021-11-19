import React from 'react';
import {connect} from 'react-redux';

import {Container, Title, Body, Input} from './styleds/login';

const Login = () => {
    return (
        <>
        <Container>
            <Title>
                <p style = {{lineHeight:"20vh"}}>LOGIN</p>
            </Title>
            <Body>
                <Input type="text" />
            </Body>
        </Container>
        </>
    );
}

export default connect(state => {})(Login);