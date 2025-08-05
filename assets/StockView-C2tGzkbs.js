import{aw as B,d as S,c as d,a as s,n as l,e,E as I,z as k,F as C,N as A,h as c,i as a,s as y,t as h,Q as N,u as O,o as G,x as V,p as q,b as _,w as E,q as F,g as P,ax as U,ay as M}from"./index-2J9sCafD.js";import{s as Y,a as K}from"./index-DUadEqb7.js";const j=["Equipamentos","Poderes","Especializações","Consumíveis","Veículos","Origens"],R={comum:"Comum",incomum:"Incomum",raro:"Raro",especial:"Especial",unico:"Único"},D=["equipamento","poder","especializacao","consumivel","veiculo","origem"],$=B("stock",{state:()=>({isLoading:!1,selectedItemIndex:0,selectedCategory:null,showActivateDialog:!1}),actions:{setIsLoading(r){this.isLoading=r},setSelectedItemIndex(r){this.selectedItemIndex=r},setSelectedCategory(r){if(r<0||r>=D.length){this.selectedCategory=null;return}this.selectedCategory=D[r]},setShowActivateDialog(r){this.showActivateDialog=r}}}),Q={class:"shrink-0 flex justify-center gap-2 w-full",style:{height:"min-content"}},H=S({__name:"ItemDisplay",props:{name:{},category:{},rarity:{},description:{},image_url:{}},setup(r){const o=r;return $(),(t,f)=>(c(),d("div",{class:l(e(a)(`
        relative
        rounded-b-[3rem]
        w-full h-[85%]
        overflow-hidden

        ${t.name===""&&"opacity-0"}
      `))},[s("div",{class:l(e(a)(`
          -z-10
          absolute inset-0
          rounded-b-[3rem]
          size-full
          bg-cover bg-center bg-no-repeat
        `)),style:I({"background-image":`url(${o.image_url||""})`,filter:"brightness(0.25) blur(10px)"})},null,6),s("div",{class:l(e(a)(`
          flex flex-col items-center
          gap-3
          size-full
        `))},[s("div",{class:l(e(a)(`
            flex-shrink-0
            w-full aspect-[16/9]
            bg-cover bg-center bg-no-repeat
          `)),style:I({"background-image":`url(${t.image_url||""})`,"box-shadow":"0px 10px 20px rgba(0,0,0,0.75)"})},null,6),s("h1",{class:l(e(a)(`
            flex-shrink-0
            px-5 mt-2 -mb-3
            text-2xl font-black
            text-center
            w-full
            text-white
          `)),style:{"font-family":"Nexa Bold, sans-serif","line-height":"1.3"}},k(t.name),3),s("div",Q,[s("span",{class:l(e(a)(`
              text-sm uppercase

              text-white
            `)),style:{"font-family":"Nexa Bold, sans-serif","line-height":"1.3"}},k(t.category),3),s("span",{class:l(e(a)(`
              text-sm uppercase

              text-[var(--rarity-text)]

              ${t.rarity}
            `)),style:{"font-family":"Nexa Bold, sans-serif","line-height":"1.3"}},k(e(R)[t.rarity]),3)]),s("div",{class:l(e(a)(`
            shrink
            flex flex-col
            mb-[2.3rem] p-5 gap-1
            rounded-xl
            text-sm text-justify
            w-[85%] h-full
            text-white bg-white/15
            overflow-y-auto
          `)),style:{"font-family":"Nexa Light, sans-serif","line-height":"1.3","backdrop-filter":"blur(10px)"}},[(c(!0),d(C,null,A(t.description.split(`
`),(i,g)=>(c(),d("p",{key:g},k(i),1))),128))],2)],2)],2))}}),T=(r,o)=>{const t=r.__vccOpts||r;for(const[f,i]of o)t[f]=i;return t},J=T(H,[["__scopeId","data-v-a4da1d86"]]),W={class:"text-sm uppercase"},X=S({__name:"GridItem",props:{idx:{},data:{}},setup(r){const o=r,t=$(),f=y(null),i=h(()=>t.selectedItemIndex===o.idx),g=()=>{var v;(v=f.value)==null||v.scrollIntoView({behavior:"smooth",block:"center"}),t.setSelectedItemIndex(o.idx)};return(v,m)=>(c(),d("div",{ref_key:"$el",ref:f,class:l(["GridItem",e(a)(`
        shrink-0
        relative
        flex flex-col
        border-[var(--rarity-border)] border-2 rounded-3xl
        w-full aspect-[16/9]
        cursor-pointer
        transition-all duration-200
        overflow-hidden

        hover:border-opacity-50
        hover:bg-transparent
        hover:transform hover:scale-[0.97]

        ${o.data.rarity}

        ${i.value?"selected":""}
      `)]),style:{"box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.2)"},onClick:g},[s("div",{class:l(["image",e(a)(`
          bg-center bg-no-repeat
          size-full
        `)]),style:I({"background-image":`url(${o.data.image_url})`,"background-size":"cover"})},null,6),s("div",{class:l(["rarity",e(a)(`
          absolute bottom-0 -right-0
          px-5 pt-1
          rounded-tl-3xl

          ${o.data.rarity}
        `)]),style:{"font-family":"Nexa Bold, sans-serif"}},[s("span",W,k(e(R)[o.data.rarity]),1)],2)],2))}}),Z=T(X,[["__scopeId","data-v-25928cf2"]]),ee=["onClick"],te={key:0,class:"flex items-center justify-center h-full"},se={key:1,class:"flex items-center justify-center gap-3 h-full"},le=S({__name:"ItemGrid",props:{items:{}},setup(r){const o=$(),t=y(!1),f=y(-1),i=h(()=>o.selectedCategory),g=h(()=>i.value===null?"Todos os Itens":j[f.value]),v=m=>{o.setSelectedCategory(m),f.value=m,t.value=!1};return(m,n)=>(c(),d("div",{class:l(e(a)(`
        flex flex-col
        w-full h-[70%]
      `))},[s("div",{class:l(e(a)(`
          flex justify-end
          p-3 pb-0
          w-full h-11
        `))},[s("div",{class:l(e(a)(`
            relative
            font-noto-sans text-sm
            font-medium
          `))},[s("button",{class:l(e(a)(`
              flex items-center justify-center
              px-5 py-1
              rounded-full
              text-black bg-[#7147d9]
              w-40
              transition-all duration-200
              cursor-pointer

              hover:bg-[#7147d9]/80
            `)),role:"combobox","aria-label":"select button","aria-haspopup":"listbox","aria-expanded":"false","aria-controls":"select-dropdown",onClick:n[0]||(n[0]=p=>t.value=!t.value)},k(g.value),3),s("ul",{class:l(e(a)(`
              z-10
              absolute
              p-3 mt-1
              rounded-xl
              list-none
              w-full
              bg-[#7147d9]
              origin-top
              scale-y-0 opacity-0
              transition-all duration-200 ease-in-out
              overflow-y-hidden

              ${t.value&&"scale-y-100 opacity-100"}
            `)),role:"listbox",id:"select-dropdown"},[s("li",{class:l(e(a)(`
                px-2 py-1
                rounded-full
                cursor-pointer
                text-center
                select-none

                hover:font-bold
                text-black
                hover:text-[#7147d9] hover:bg-black

                ${i.value===null&&"font-bold text-[#7147d9] bg-black"}
              `)),role:"option",onClick:n[1]||(n[1]=()=>v(-1))}," Todos os Itens ",2),(c(!0),d(C,null,A(e(D),(p,x)=>(c(),d("li",{key:x,class:l(e(a)(`
                px-2 py-1
                rounded-full
                cursor-pointer
                select-none
                text-center text-black

                hover:font-bold
                hover:text-[#7147d9] hover:bg-black

                ${i.value===p&&"font-bold text-[#7147d9] bg-black"}
              `)),role:"option",onClick:()=>v(x)},k(e(j)[x]),11,ee))),128))],2)],2)],2),s("div",{class:l(e(a)(`
          p-4
          h-[calc(100%-(2.75rem*1.5))]
        `))},[m.items.length===0&&!e(o).isLoading?(c(),d("div",te,n[2]||(n[2]=[s("i",null,"Estoque vazio.",-1)]))):e(o).isLoading?(c(),d("div",se,n[3]||(n[3]=[s("i",{class:"pi pi-spin pi-spinner"},null,-1),s("i",null,"Carregando...",-1)]))):(c(),d("div",{key:2,class:l(e(a)(`
            grid grid-cols-3 content-start
            gap-3
            rounded-xl
            h-full
            overflow-y-auto
          `)),style:{"grid-auto-rows":"min-content"}},[(c(!0),d(C,null,A(m.items,(p,x)=>(c(),N(Z,{key:x,idx:x,data:p},null,8,["idx","data"]))),128))],2))],2)],2))}}),ae={key:0,href:"/admin",class:"z-20 fixed bottom-3 right-3 flex items-center justify-center size-12 rounded-lg text-black bg-white hover:bg-white/80",title:"Painel do Admin"},oe={class:"z-0 shrink-0 relative w-full max-w-screen-xl h-[30%] bg-cover bg-center bg-no-repeat"},re={class:"flex items-center justify-center w-full"},ce=S({__name:"StockView",setup(r){const o=O(),t=$(),f=y(null),i=y([]);y(!1),y("");const g=y(""),v=h(()=>o.isStaff),m=h(()=>g.value!=="");h(()=>t.showActivateDialog);const n=h(()=>t.selectedCategory===null?i.value:i.value.filter(w=>w.category===t.selectedCategory)),p=h(()=>n.value[t.selectedItemIndex]||{name:"",category:"",rarity:"",description:"",image_url:""}),x=async()=>{t.setIsLoading(!0);const w=F(),u=await w.users.findOneUser(parseInt(o.user_id));if(!u.success||!u.result){console.error("Failed to fetch user data");return}if(f.value=u.result,f.value.owned_items.length===0){i.value=[],t.setIsLoading(!1);return}const b=await w.items.getListItems({ids:u.result.owned_items});if(!b.success){console.error("Failed to fetch items data");return}i.value=f.value.owned_items.filter(z=>b.result.findIndex(L=>L.id===z)>-1).map(z=>b.result.find(L=>L.id===z)),t.setIsLoading(!1)};return G(async()=>{t.setIsLoading(!0),o.isAuthenticated||P().push({name:"login"}),x()}),V(n,()=>{t.selectedItemIndex>=n.value.length&&t.setSelectedItemIndex(n.value.length-1)}),(w,u)=>(c(),d(C,null,[s("div",{class:l(e(a)(`
        relative
        flex flex-col justify-between items-center
        size-full
        bg-black bg-cover bg-center bg-no-repeat
      `)),style:I({backgroundImage:`url(${e(M)})`})},[v.value?(c(),d("a",ae,u[3]||(u[3]=[s("i",{class:"pi pi-cog"},null,-1)]))):q("",!0),s("a",{href:"#",class:"z-20 fixed top-8 right-8 flex items-center justify-center px-6 py-1 rounded-full text-white bg-[#7147d9] hover:bg-[#7147d9]/80",title:"Sair",onClick:u[0]||(u[0]=(...b)=>e(o).logout&&e(o).logout(...b))}," Sair "),s("div",{class:l(e(a)(`
          z-10
          flex
          gap-16
          size-full
          max-w-screen-2xl
          overflow-hidden
        `))},[_(J,{name:p.value.name,category:p.value.category,rarity:p.value.rarity,description:p.value.description,image_url:p.value.image_url},null,8,["name","category","rarity","description","image_url"]),s("div",{class:l(e(a)(`
            shrink-0
            flex flex-col
            w-[65%] h-full
          `))},[s("div",oe,[s("div",{class:"size-full bg-center bg-no-repeat",style:I({backgroundImage:`url(${e(U)})`,backgroundSize:"auto 60%"})},null,4)]),_(le,{items:n.value},null,8,["items"])],2)],2)],6),_(e(K),{class:"w-[450px]",header:"Aviso",closable:!1,modal:!0,visible:m.value,"onUpdate:visible":u[2]||(u[2]=b=>m.value=b)},{footer:E(()=>[_(e(Y),{label:"OK",icon:"pi pi-check",onClick:u[1]||(u[1]=b=>g.value="")})]),default:E(()=>[s("div",re,[s("span",null,k(g.value),1)])]),_:1},8,["visible"])],64))}});export{ce as default};
