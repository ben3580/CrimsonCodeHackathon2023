var key = "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";
const url = 'https://api.openai.com/v1/engines/davinci/completions';

const got = require('got');


const generateText = async(textStarter) => {
    var prompt = `Continue this story:\n`;
    var textToComplete = textStarter
    var fullPrompt = prompt + textToComplete;

    const params = {
        "prompt": fullPrompt,
        "max_tokens": 60,
        "temperature": 0.5,
        "frequency_penalty": 0.5,
    };
    const headers = {
        'Authorization': `Bearer ${key}`,
    };

    try {
        const response = await got.post(url, { json: params, headers: headers }).json();
        var output = response.choices[0].text;
        return output;
    } catch (err) {
        console.log(err);
    }
}

export default generateText