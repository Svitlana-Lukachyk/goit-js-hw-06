!function(){var e=document.querySelector(".login-form");e.addEventListener("submit",(function(t){t.preventDefault();var n=e.elements.email.value,r=e.elements.password.value;if(""===n||""===r)return alert("Please fill in all the fields!");var l={};new FormData(t.currentTarget).forEach((function(e,t){l[t]=e})),console.log(l),e.reset()}))}();
//# sourceMappingURL=task-08.da5f0b0c.js.map
