const dark=document.querySelector("input[type='checkbox']")
    dark.addEventListener('click',()=>{
        if(dark.checked){
            document.documentElement.setAttribute("date-theme","dark");
            localStorage.setItem("date-theme","dark");
        }
        else{
            document.documentElement.setAttribute("date-theme","light");
            localStorage.setItem("date-theme","light");
        }    })
    console.log(dark)
    const currentTheme=localStorage.getItem("date-theme")
    if(currentTheme ==="dark"){
        dark.checked=true
        document.documentElement.setAttribute("date-theme","dark")
        
    }