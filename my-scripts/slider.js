export default function slider(){
    const prevBtnSelector = ".slider-prev-btn";
    const nextBtnSelector = ".slider-next-btn";
    const slidesSelector = ".slide";
    const slides = document.querySelectorAll(slidesSelector);
    const activeSlide = "active-slide";

    const starIdx = 0;
    const lastIdx = slides.length - 1;

    let idx = 0;
    
    
    function getActualSlide(){
        let index;

        slides.forEach((slide, idx) =>{
            if(slide.classList.contains(activeSlide))
                index = idx;
        });

        return index;
    }

    function nextSlide(){

    }


    document.addEventListener("click", e=>{
        // console.log(e.target)
        

        if(e.target.matches(nextBtnSelector) || e.target.matches(`${nextBtnSelector} *`)){
            console.log("next")
            if(idx < lastIdx){
                slides[idx].classList.remove(activeSlide);
                idx++;
                slides[idx].classList.add(activeSlide);
            }
            else{
                slides[idx].classList.remove(activeSlide);
                slides[starIdx].classList.add(activeSlide);
                idx = starIdx;
            }
        }

        if(e.target.matches(prevBtnSelector) || e.target.matches(`${prevBtnSelector} *`)){
            console.log("prev")
            if(idx > starIdx){
                slides[idx].classList.remove(activeSlide);
                idx--;
                slides[idx].classList.add(activeSlide);
            }
            else{
                slides[idx].classList.remove(activeSlide);
                slides[lastIdx].classList.add(activeSlide);
                idx = lastIdx;
            }
        }
    });


    document.querySelector(".slider-container").addEventListener("mouseover", e=>{
        if(e.target.matches(".slide *") || e.target.matches(".slider-btns-container")){
            document.querySelector(".slider-btns-container").classList.add("slide-btn-active");
            e.stopPropagation();
        }
    })
    document.querySelector(".slider-container").addEventListener("mouseleave", e=>{
            document.querySelector(".slider-btns-container").classList.remove("slide-btn-active");
            e.stopPropagation();
    })

}