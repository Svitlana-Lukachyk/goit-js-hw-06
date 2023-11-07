const e=document.querySelector(".login-form");e.addEventListener("submit",(function(t){t.preventDefault();const l=e.elements.email.value,n=e.elements.password.value;if(""===l||""===n)return alert("Please fill in all the fields!");let r={};new FormData(t.currentTarget).forEach(((e,t)=>{r[t]=e})),console.log(r),e.reset()}));
//# sourceMappingURL=task-08.f26213a7.js.map
