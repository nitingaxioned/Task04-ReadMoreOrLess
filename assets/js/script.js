//variables Declerations
var cards = document.querySelectorAll(".card");
cards.forEach(
    function(val){
        val.querySelector(".btn").addEventListener("click", function(){
            val.classList.toggle("active");
            val.querySelector(".more-txt").classList.toggle("more-txt-show");
            val.classList.contains("active") && (val.querySelector(".btn").innerHTML = "Read Less");
            val.classList.contains("active") || (val.querySelector(".btn").innerHTML = "Read More");
        })
    }
)







