const allbtnslider = document.querySelectorAll(".wrap_btn button");

allbtnslider.forEach((e,i)=>{
  e.addEventListener("click", e =>{
    sliders(e.target.value);
  });
});

let increment = 1;

function sliders(kondisi){
  const allslide = document.querySelectorAll(".container-slider .slide1");
  
  if(kondisi === "Next"){
    if(increment > 3){
      increment = 1;
      allslide[0].classList.remove("hidden");
    }else{
      increment++;
      allslide.forEach((e,i)=>{
        i + 1 === increment ? allslide[i].classList.remove("hidden") : allslide[i].classList.add("hidden");
      });
    }
  }else{
    if(increment <= 1){
      increment = 4;
      allslide[0].classList.add("hidden");
      allslide[3].classList.remove("hidden");
      console.log(allslide[3]);
    }else{
      increment -= 1;
      allslide.forEach((e,i)=>{
        i + 1 === increment ? allslide[i].classList.remove("hidden") : allslide[i].classList.add("hidden");
      });
    }
  }
}

// function sliders(kondisi){
//   const allslide = document.querySelectorAll(".container-slider .slide1");
  
//   if(kondisi == "Next"){
//     if(increment >= allslide.length){
//       increment = 1;
//       allslide[0].classList.toggle("hidden");
//     }else{
//       increment++;
//       allslide.forEach((e,i)=>{
//         if(i+1 == increment){
//           allslide[i].classList.toggle("hidden");
//         }else{
//           allslide[i].classList.add("hidden");
//         }
//       });
//     }
//   }else{
//     if(increment == 1){
//       console.log("Tampilkan halaman 4");
//       console.log(increment);
//       increment = 4;
//       console.log(increment);
//       allslide[0].classList.add("hidden");
//       allslide[4].classList.remove("hidden");
//     }else{
//       increment -= 1;
//       allslide.forEach((e,i)=>{
//         if(i+1 == increment){
//           allslide[i].classList.remove("hidden");
//         }else{
//           allslide[i].classList.add("hidden");
//         }
//       });
//     }
//   }
  
// }