export default function recordingVoice(setValue) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'ru-RU';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start();
    let result = null;

    recognition.onresult = function(event) {
        const last = event.results.length - 1;
        result = event.results[last][0].transcript;
        setValue(result);
        // recognition.start();

    };
    return result;
}