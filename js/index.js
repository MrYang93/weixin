window.onload=function(){
  function addClass(DOM,Name){
    var AuldClass = DOM.getAttribute("class");
    if (AuldClass!=null) {
      AuldClass =" "+ DOM.className+" ";
      var REClass = new RegExp(" "+Name+" ")
      var SortClass = REClass.exec(AuldClass)
      if (SortClass == null) {
        var NewClass = (AuldClass+" "+Name).trim();
        DOM.setAttribute("class",NewClass);
      }else{
        // alert("输入重复")
      };
    }else{
      var NewClass = Name.trim();
      DOM.setAttribute("class",Name);
    };
  }
  function removeClass(DOM,Name){
    var AuldClass =" "+ DOM.className+" ";
    var REClass = new RegExp(" "+Name+" ","g");
    var SortClass = AuldClass.replace(REClass," ");
    var NewClass = SortClass.trim();
    DOM.className = NewClass;
  }

  var icon = document.getElementById('icons').getElementsByTagName('li');
  var _list = document.getElementsByClassName('_list');
  for (var i = 0; i < icon.length; i++) {
    icon[i].onclick = function(){
      for(var n = 0; n<icon.length;n++){
        removeClass(icon[n].getElementsByTagName('i')[0],"nav-click");
      }
      addClass(this.getElementsByTagName('i')[0],"nav-click");
      var index = 0;
      for (var j = 0; j < _list.length; j++) {
        icon[j].index = j;
        addClass(_list[j],"disp")
      }
      console.log(index);
      removeClass(_list[this.index],"disp")
    }
  }

  var list_li = document.getElementsByClassName('list_ul')[0].getElementsByTagName('li');
  for (var k = 0; k < list_li.length; k++) {
    list_li[k].onclick = function(){
      for (var l = 0; l < list_li.length; l++) {
        removeClass(list_li[l],"list-click");
      }
      addClass(this,"list-click");
      var val = this.getElementsByTagName('span')[0].innerHTML;
      document.getElementById('name').innerHTML = val;
    }
  }
}
