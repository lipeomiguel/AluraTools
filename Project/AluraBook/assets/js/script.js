function OpenMenuMobileBar(){
  var button_menu = document.querySelector(".header_mobile_container");
  var element_sub = document.querySelector(".header_mobile_container_sub");
  button_menu.addEventListener("click", (e) =>{ 
    if(element_sub.classList.contains("active")){
      element_sub.classList.remove("active");
    }else{
      element_sub.classList.add("active");
    }
  });
}
function OpenMenuMobileBarSub(){
  var sub_menus_mobile = document.querySelectorAll(".over_active_sub");
  sub_menus_mobile.forEach((element,array_index) => {
    element.addEventListener("click", (e) =>{ 
      if(element.classList.contains("active")){
        for (let index = 0; index < sub_menus_mobile.length; index++) {
            if(index==array_index){
              continue;
            }
            sub_menus_mobile[index].classList.remove("active");
        }
      }else{
        element.classList.add("active");
        for (let index = 0; index < sub_menus_mobile.length; index++) {
          if(index==array_index){
            continue;
          }
          sub_menus_mobile[index].classList.remove("active");
      }
        
      }
    });
  });
}
OpenMenuMobileBarSub();
function HELPERDOCCSSREM(calc_px_for_rem,config_rem=0.06){
  /** 
     * ! ESSA FUNÇÃO DE HELPER PARA CALCULAR A SOMA DOS [ REM PX ];
  */
      var calc_px_for_rem = calc_px_for_rem.replace(/[^0-9]+/g, '');
      var result = calc_px_for_rem * config_rem;
      console.log('o RESULTADO DO SEU CALCULO DE REM É: '+result+'rem');
      return result+'rem';
}
HELPERDOCCSSREM('29px');