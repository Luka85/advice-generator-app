const submitBtn = document.querySelector(".btn_submit");
const adviceNum = document.querySelector(".advice_num");
const randomAdvice = document.querySelector(".random_advice");

submitBtn.addEventListener('click', getRandAdvice);

async function getRandAdvice() {
    const rand = await axios.get('https://api.adviceslip.com/advice');
    adviceNum.textContent = `#${rand.data.slip.id}`;
    randomAdvice.textContent = `"${rand.data.slip.advice}"`;
}

window.addEventListener('DOMContentLoaded', getRandAdvice);