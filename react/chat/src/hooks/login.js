import React, {useEffect, useState} from 'react';

import * as API from '../../../services/';

const login = () => {
    const {nick, setNick} = useState('');

    useEffect(() => {
        const response = await API.getUserByNick(nick);
        const data = await response.json();

        setNick(data.nickname, () => {});
    });
}