function showResponsiveMenu() {
  var menu = document.getElementById("nav_responsive_menu");
  var icon = document.getElementById("nav_hamburger_icone");
  var root = document.getElementById("root");
  if (menu.className === "") {
    menu.className = "open";
    icon.className = "open";
    root.style.overflowY = "hidden";
  } else {
    menu.className = "";                    
    icon.className = "";
    root.style.overflowY = "";
  }
}




$("menu a").hover(
	function(){ $(".underline").addClass("was").removeClass("underline"); $(this).addClass("underline");  },
	function(){ $(this).removeClass("underline"); $(".was").addClass("underline"); }
);





