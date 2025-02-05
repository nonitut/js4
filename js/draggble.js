document.addEventListener("DOMContentLoaded", function(){

    let flo = document.querySelectorAll(".box , .flower , .flo");

    flo.forEach(function(flowers){
        let gra = false;
        let offsetX;
        let offsetY;

        flowers.addEventListener("mousedown" , function(event){
            gra = true;

            offsetX = event.clientX - flowers.getBoundingClientRect().left; // .clientX - свойство горизонтальной координаты курсора
            offsetY = event.clientY - flowers.getBoundingClientRect().top;  // .clientY - свойство вертикальной координаты курсора
            // .getBoundingClientRect() - метод , который возвращает размеры и положение элемента

            function onMouseMove(event){
                if(gra){
                    let x =  event.clientX - offsetX;
                    let y =  event.clientY - offsetY;

                    flowers.style.left = x + "px";
                    flowers.style.top  = y + "px";

                    console.log(" координаты курсора :" , event.clientX , event.clientY)
                    console.log("координата элемента:" , x , y);
                }}

            function onMouseUp(){
                gra = false;
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            }

            document.addEventListener("mousemove",onMouseMove );
            document.addEventListener("mouseup", onMouseUp);

        });
    });
});