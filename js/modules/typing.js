export default function initTyping() {
    let letter = 0;
    const text = 'João Batista';

    function typeWriter() {
        if(letter < text.length) {
            document.querySelector(".name-content").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 180)
        }
    }

    typeWriter();
}