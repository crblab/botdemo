export const getResponseMessage = async (msg) => {
    const formData = new FormData();
    formData.append("message", msg);
    const response = await fetch('https://socialbotapi.cerebro.host/chat/', {
        method: 'POST',
        body: formData
    });
    const text = await response.text();
    return text;
}

export const getSentinel = async (msg) => {
    const formData = new FormData();
    formData.append("message", msg);
    const response = await fetch('https://socialbotapi.cerebro.host/chat/sentinel', {
        method: 'POST',
        body: formData
    });
    const text = await response.text();
    return text.includes('POSITIVE') ? 'POSITIVE' : 'NEGATIVE';
}

export const createAvatar = async () => {
    const formData = new FormData();
    formData.append("seed", "500");
    const response = await fetch('https://socialbotapi.cerebro.host/avatar/', {
        method: 'POST',
        body: formData
    });
    const json = await response.json();
    return json;
}

export const getAvatar = async () => {
    const response = await fetch('https://socialbotapi.cerebro.host/media/avatar.jpg');
    const blob = await response.blob();
    return blob;
}