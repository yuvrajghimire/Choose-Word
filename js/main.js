    // jquery

    $("#btn").on("click",()=>{
        
    let text = $("#texts").val();
    let newtext = text.split(" ");
    
    for (let i = 0; i < newtext.length; i++){
        newtext = newtext.filter((item,index)=>{
            return newtext.indexOf(item) === index;
        })
        $(".list").append(`<li>${newtext[i]}</li>`);
    }
    });

    // vanilla js

    // let btn = document.getElementById("btn");
    // btn.addEventListener("click",()=>{
    //     let text = document.getElementById("texts").value;
    //     let newtext = text.split(" ");
    //     for (let i = 0; i < newtext.length; i++){
    //         let list = document.getElementById("listout");
    //         list.insertAdjacentHTML("beforebegin",`<li>${newtext[i]}</li>`);
    //         // console.log(newtext[i]);
    //     }
    // })