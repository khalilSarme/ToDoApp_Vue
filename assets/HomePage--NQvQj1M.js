import{d as w,s as C,c as T,r as c,o as y,w as f,a as e,b as D,e as g,u as o,f as r,i as d,v as i}from"./index-DRvjqepq.js";import{M as k}from"./myTodos-B295OR6T.js";const S=w("todo",{state:()=>({text:"",isCompleted:!1,ProDate:"",ExpDate:""}),getters:{getTodoText(){return this.text},getCompleted(){return this.isCompleted?"Completed":"Not Completed"}},actions:{}}),M={__name:"HomePage",setup(E){const m=S(),x=k(),{text:l,ProDate:a,ExpDate:n,isCompleted:b}=C(m),v=p=>{x.createNewTask(p),m.$reset()};return(p,t)=>{const u=c("my-container");return y(),T(u,{class:"pt-5"},{default:f(()=>[t[8]||(t[8]=e("h1",{class:"container"}," Create a new task ",-1)),D(u,{class:"container my-5"},{default:f(()=>[e("form",{class:"rounded shadow d-flex flex-column align-items-start p-3 bg-dark",onSubmit:t[3]||(t[3]=g(s=>v({text:o(l),Production_Date:o(a),Expiration_Date:o(n),is_Completed:o(b)}),["prevent"]))},[t[4]||(t[4]=e("label",{class:"form-label text-white"}," Todo Text : ",-1)),r(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>d(l)?l.value=s:null),class:"form-control",placeholder:"Enter a todo text"},null,512),[[i,o(l)]]),t[5]||(t[5]=e("label",{class:"form-label text-white mt-3"}," Starts at : ",-1)),r(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>d(a)?a.value=s:null)},null,512),[[i,o(a)]]),t[6]||(t[6]=e("label",{class:"form-label text-white mt-3"}," Ends at : ",-1)),r(e("input",{type:"date",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=s=>d(n)?n.value=s:null)},null,512),[[i,o(n)]]),t[7]||(t[7]=e("input",{type:"submit",name:"",id:"",value:"Save",class:"mt-4 btn btn-success px-3 py-2"},null,-1))],32)]),_:1})]),_:1})}}};export{M as default};
