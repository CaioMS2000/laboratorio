function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep(s){
    await _sleep(s * 1000)
}

export {sleep};