let heart = document.querySelectorAll(".fa-heart")
heart.forEach((item) => {
    item.addEventListener('click', () => {
        // classList.add('active');
        item.style.color = "red";
        // console.log('iiii');
        // item.classList.add("active");
        // item.style.backgroundColor = "red";
        // item.querySelector("i").classList.remove("");
        // item.querySelector("i").classList.add("fa-star");
    });
})


// heart.addEventListener('click', () => {
//     classList.add('active');
//     heart.style.backgroundColor = "red";
//     // console.log('iiii');

// });