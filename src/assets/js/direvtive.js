import Vue from 'vue'

export default Vue.directive("loading",{
  update(el,binding) {
    if(binding.value) {
      let div = document.createElement("div");
      div.style.width = "100%";
      div.style.height = "100%";
      div.style.background = "pink";
      div.style.position = "absolute"; 
      div.style.left = "0";
      div.style.top = "0";
      div.style.right = "0";
      div.style.bottom = "0";
      div.innerText = "加载中";
      div.style.display = "flex";
      div.style.justifyContent = "center";
      div.style.alignItems = "center";
      div.setAttribute("id","loadIngBox")
      document.body.append(div);
    } else {
      document.body.removeChild(document.getElementById("loadIngBox"))
    }
  },
  // inserted(el) {
  //   console.log(el)
  // },
  // update(el) {
  //   console.log(el)
  // }
})