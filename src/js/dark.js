const dark=document.querySelector("input[type='checkbox']")
    dark.addEventListener('click',()=>{
        if(dark.checked){
            document.documentElement.setAttribute("data-theme","dark");
            localStorage.setItem("data-theme","dark");
        }
        else{
            document.documentElement.setAttribute("data-theme","light");
            localStorage.setItem("data-theme","light");
        }    })
    console.log(dark)
    const currentTheme=localStorage.getItem("data-theme")
    if(currentTheme ==="dark"){
        dark.checked=true
        document.documentElement.setAttribute("data-theme","dark")
        
    }

