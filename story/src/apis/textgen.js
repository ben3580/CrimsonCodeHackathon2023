import axios from "axios";
const key = "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";
const url = 'https://api.openai.com/v1/engines/davinci/completions';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001'
})

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
        return await axiosInstance.post(url, params, {headers: headers });
    } catch (err) {
        console.log(err);
    }
}

export default generateText