const $line=document.querySelectorAll('.linea');
const $line_one=document.querySelector('.linea1');
const $line_two=document.querySelector('.linea2');
const $line_three=document.querySelector('.linea3');
const $element=document.querySelector('.element');

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.matches(".linea")) {
        // Aplica la animación solo a las líneas
        $element.classList.add('element_ani');
        setTimeout(() => {
            $line.forEach((b) => {
                b.classList.toggle("linea_active");
            });
            $line_one.classList.toggle('linea1_active');
            $line_two.classList.toggle('linea2_active');
            $line_three.classList.toggle('linea3_active');
            $element.classList.remove('element_ani');
        }, 250);
    }
    if(e.target.matches(".element")){
        $element.classList.add('element_ani');
        setTimeout(()=>{
            $line.forEach((b)=>{
                b.classList.toggle("linea_active");
            })
            $line_one.classList.toggle('linea1_active');
            $line_two.classList.toggle('linea2_active');
            $line_three.classList.toggle('linea3_active');
            $element.classList.remove('element_ani');
        },250)
    }

})


