const submitBtn = document.getElementById("submit-btn");
const container = document.getElementById("container")
const thankYouContainer = document.getElementById("thank-you-container");
const dismissMessageBtn = document.getElementById("dismiss-message")


submitBtn.addEventListener('click', ()=>{
    container.classList.add("hidden");
    thankYouContainer.classList.remove("hidden");
})

dismissMessageBtn.addEventListener('click', ()=>{
    thankYouContainer.classList.add("hidden");
    container.classList.remove("hidden");
})
