function animate_string() {
    const element = document.getElementById('target');
    const textNode = element.firstChild;
    let text = textNode.data;
    setInterval(() => {
        text = text[text.length -1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 200);
}


