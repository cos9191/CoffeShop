const slider=document.querySelector(".slider"),inputMin=document.querySelector(".form__input--min"),inputMax=document.querySelector(".form__input--max"),inputWrapper=document.querySelector(".form__input-wrapper"),resetButton=document.querySelector('button[type="reset"].form__button'),MIN=parseInt(inputMin.min,10),MAX=parseInt(inputMax.max,10),onSliderChange=()=>{inputMin.value=Math.round(slider.noUiSlider.get(!0)[0]),inputMax.value=Math.round(slider.noUiSlider.get(!0)[1])},onInputChange=()=>{const e=[inputMin.value,inputMax.value];inputMax.value||(e[1]=MAX),slider.noUiSlider.set(e)},initSlider=()=>{noUiSlider.create(slider,{start:[inputMin.value,inputMax.value],connect:!0,step:5,range:{min:MIN,max:MAX},cssClasses:{target:"target",base:"base slider__base",origin:"origin",handle:"handle slider__handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area slider__touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect slider__connect",connects:"connects slider__connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}}),slider.noUiSlider.on("slide",(()=>(inputMin.value=Math.round(slider.noUiSlider.get(!0)[0]),void(inputMax.value=Math.round(slider.noUiSlider.get(!0)[1]))))),inputWrapper.addEventListener("input",(()=>onInputChange())),resetButton.addEventListener("click",(()=>slider.noUiSlider.reset()))};export{initSlider};