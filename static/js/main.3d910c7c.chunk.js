(this.webpackJsonpflashcards=this.webpackJsonpflashcards||[]).push([[0],{44:function(e,t,a){e.exports=a(80)},63:function(e,t,a){},64:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),l=a.n(c),s=a(5),i=a.n(s);a(62);i.a.initializeApp({apiKey:"AIzaSyB-EegVrujPoJNOALJ4KQHWS42W0Mz--QM",authDomain:"brainkwik-uw-js.firebaseapp.com",projectId:"brainkwik-uw-js"});a(63),a(64);var o=a(6),u=a(7),d=a(9),m=a(8),h=a(14),p=a(10),f=a(26),E=a(25),y=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={cardSetsDefault:[],isSignedIn:!1},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=function(){return"create"===e.props.action?r.a.createElement(h.b,{to:"/new"},"Create a set +"):"cancel"===e.props.action?r.a.createElement(h.b,{to:"/home"},"Main Menu "):!0===e.props.user&&"start"===e.props.action?r.a.createElement(h.b,{to:"/set/yours/".concat(e.props.entryId,"/")},"Test these cards"):void 0};return r.a.createElement("div",{id:"top"},r.a.createElement("div",{className:"return"},r.a.createElement(h.b,{to:"/flashcards/home"},r.a.createElement(E.a,{icon:f.a,size:"lg",color:"#ffffff"}))),r.a.createElement("div",null,this.props.title),r.a.createElement("div",{className:"action"},r.a.createElement(t,null)))}}]),a}(r.a.Component),v=a(84),b=a(87),g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.cards,a=this.props.editable,n=function(){return t.length>0?t.map((function(t,n){return r.a.createElement(v.a,{className:"h-100 ".concat(t.data().category),md:6,xs:12,lg:4,key:n,xl:3},r.a.createElement(b.a,null,r.a.createElement(b.a.Body,null,r.a.createElement("h4",null,t.data().category.replace("-"," ")),r.a.createElement("h2",null,t.data().title),r.a.createElement("p",null,t.data().description),r.a.createElement("p",{className:"source"},e.props.editable?"Created by you":"Created by BrainKwik"),r.a.createElement("div",{className:"buttons"},r.a.createElement(h.b,{to:!1===a?"/set/".concat(t.id):"/set/yours/".concat(t.id)},r.a.createElement("div",{className:"button"},"Test Yourself")),!0===e.props.editable?r.a.createElement(h.b,{to:"/set/yours/".concat(t.id,"/edit")},r.a.createElement("div",{className:"button"},"Edit this set")):r.a.createElement(r.a.Fragment,null)))))})):r.a.createElement(r.a.Fragment,null)};return r.a.createElement(n,null)}}]),a}(r.a.Component),C=a(85),S=a(86),k=a(19),j=i.a.firestore(),x=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={cardSetsDefault:[],isSignedIn:!1,yourCards:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(5),this.unregisterAuthObserver=i.a.auth().onAuthStateChanged((function(t){j.collection("defaultcards").get().then((function(t){e.setState({cardSetsDefault:t.docs})})),e.setState({isSignedIn:!!t},(function(){var t=i.a.auth().currentUser.uid;j.collection("users").doc(t).collection("yourCards").get().then((function(t){e.setState({yourCards:t.docs})}))}))})),setTimeout((function(){e.state.isSignedIn||e.props.history.push("/home")}),4e3)}},{key:"render",value:function(){var e=this.state.cardSetsDefault,t=this.state.yourCards,a=this.state.isSignedIn;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Welcome to BrainKwik")),r.a.createElement(y,{title:"BrainKwik",action:"create"}),r.a.createElement(C.a,{fluid:!0},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Create a set or test yourself"),r.a.createElement(S.a,null,a&&r.a.createElement(v.a,{className:"new h-100",md:12,xs:12,lg:4,xl:6},r.a.createElement(h.b,{to:"/new"},r.a.createElement(b.a,null,r.a.createElement(b.a.Body,null,r.a.createElement("h2",null,"Create a new cardset"),r.a.createElement("p",null,"Easy learning in a flash"),r.a.createElement("div",{className:"addSet"},"+"))))),a&&r.a.createElement(g,{cards:e,editable:!1}),a&&r.a.createElement(g,{cards:t,editable:!0})))))}}]),a}(r.a.Component),O=a(42),w=a.n(O),I=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).uiConfig={signInFlow:"popup",signInOptions:[i.a.auth.EmailAuthProvider.PROVIDER_ID,i.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){setTimeout(e.props.history.push("/home"),400)}}},e}return Object(u.a)(a,[{key:"render",value:function(){return this.props.isSignedIn?r.a.createElement(r.a.Fragment,null):r.a.createElement(C.a,{fluid:!0,className:"login"},r.a.createElement("div",{id:"welcome"},r.a.createElement(k.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Welcome to BrainKwik")),r.a.createElement(E.a,{icon:f.a,size:"lg"}),r.a.createElement("h2",null,"Welcome to BrainKwik"),r.a.createElement("h3",null,"Learn, memorize and impress people in a flash"),r.a.createElement(E.a,{icon:f.a,size:"lg"})),r.a.createElement("div",{id:"login"},r.a.createElement(S.a,{className:"justify-content-center"},r.a.createElement(v.a,{className:"h-100",md:6,xs:12,lg:6,xl:6},r.a.createElement("h4",null,"Please sign-in"))),r.a.createElement(S.a,{className:"justify-content-center"},r.a.createElement(v.a,{className:"h-100",md:6,xs:12,lg:6,xl:6},r.a.createElement(w.a,{uiConfig:this.uiConfig,firebaseAuth:i.a.auth()})))))}}]),a}(r.a.Component),A=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).titleRef=r.a.createRef(),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.updateTitle;return r.a.createElement("div",{className:"title"},r.a.createElement(S.a,{className:"justify-content-center"},r.a.createElement(v.a,{xs:10},r.a.createElement("input",{text:"true",defaultValue:this.props.title,ref:this.titleRef,minLength:"4",id:"titleInput",maxLength:"50",placeholder:null===this.props.title?"Give your card set a title.":null}),r.a.createElement("button",{onClick:function(){t(e.titleRef.current.value)}},this.props.buttonText),r.a.createElement("div",{className:"alert"},this.props.alert))))}}]),a}(r.a.Component),N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).descRef=r.a.createRef(),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.updateDesc;return r.a.createElement("div",{className:"description"},r.a.createElement(S.a,{className:"justify-content-center"},r.a.createElement(v.a,{xs:10}," ",r.a.createElement("input",{text:"true",id:"descInput",ref:this.descRef,defaultValue:this.props.descriptionVal,minLength:"4",placeholder:null===this.props.descriptionVal?"Describe the set.":null}),r.a.createElement("button",{onClick:function(){t(e.descRef.current.value)}},"Save description"),r.a.createElement("div",{className:"alert"},this.props.descAlert))))}}]),a}(r.a.Component),B=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).sideA=r.a.createRef(),n.sideB=r.a.createRef(),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.updateSideA,a=this.props.updateSideB,n=this.props.deleteCard,c=this.props.card,l=this.props.category;return r.a.createElement("div",{key:c.id,className:"cardEdit"},r.a.createElement(S.a,{className:"justify-content-center deleteHold"},r.a.createElement(v.a,{md:5,xs:10,lg:5,xl:5},r.a.createElement("button",{class:"deleteCard",onClick:function(){n(c)}},"Delete the card below"))),r.a.createElement(S.a,null,r.a.createElement(v.a,{className:"h-100 sideA ".concat(l),md:6,xs:12,lg:6,xl:6},r.a.createElement(b.a,null,r.a.createElement("textarea",{placeholder:"Type here for side A",ref:this.sideA}),r.a.createElement("button",{onClick:function(){t(e.sideA.current.value,c)}},"Save Side A"))),r.a.createElement(v.a,{className:"h-100 sideB ".concat(l),md:6,xs:12,lg:6,xl:6},r.a.createElement(b.a,null,r.a.createElement("textarea",{placeholder:"Type here for side B",ref:this.sideB}),r.a.createElement("button",{onClick:function(){a(e.sideB.current.value,c)}},"Save Side B")))))}}]),a}(r.a.Component),D=i.a.firestore(),T=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currentCards:[],entryId:n.props.match.params.urlString,title:"",descriptionVal:"",category:"",set:null,isSignedIn:!1,disabled:!0,alert:null},n}return Object(u.a)(a,[{key:"updateTitle",value:function(e){var t=e,a=i.a.auth().currentUser.uid;D.collection("users").doc(a).collection("yourCards").doc(this.state.entryId).update({title:t})}},{key:"updateDesc",value:function(e){var t=e,a=i.a.auth().currentUser.uid;D.collection("users").doc(a).collection("yourCards").doc(this.state.entryId).update({description:t})}},{key:"componentDidMount",value:function(){var e=this;this.unregisterAuthObserver=i.a.auth().onAuthStateChanged((function(t){return e.setState({isSignedIn:!!t},(function(){var t=i.a.auth().currentUser.uid;e.unsubscribe=D.collection("users").doc(t).collection("yourCards").doc(e.state.entryId).collection("cards").orderBy("created","asc").onSnapshot((function(t){e.setState({currentCards:t.docs})})),D.collection("users").doc(t).collection("yourCards").doc(e.state.entryId).get().then((function(t){e.setState({title:t.data().title,descriptionVal:t.data().description,category:t.data().category})}))}))}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"updateSideA",value:function(e,t){var a=i.a.auth().currentUser.uid,n=e;if(null!==n)D.collection("users").doc(a).collection("yourCards").doc(this.state.entryId).collection("cards").doc(t.id).update({sideA:e});else if(""===n||null===n)return!1}},{key:"updateSideB",value:function(e,t){var a=i.a.auth().currentUser.uid,n=e;if(null!==n)D.collection("users").doc(a).collection("yourCards").doc(this.state.entryId).collection("cards").doc(t.id).update({sideB:e});else if(""===n||null===n)return!1}},{key:"deleteCard",value:function(e){var t=i.a.auth().currentUser.uid;D.collection("users").doc(t).collection("yourCards").doc(this.state.entryId).collection("cards").doc(e.id).delete()}},{key:"addCard",value:function(){var e=i.a.auth().currentUser.uid;D.collection("users").doc(e).collection("yourCards").doc(this.state.entryId).collection("cards").add({sideA:null,sideB:null,answered:0,correct:0,created:new Date})}},{key:"render",value:function(){var e=this,t=this.state.currentCards.map((function(t,a){return r.a.createElement(B,{card:t,updateSideA:e.updateSideA.bind(e),updateSideB:e.updateSideB.bind(e),deleteCard:e.deleteCard.bind(e),category:e.state.category})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,this.state.title," - Editing a Card Set | BrainKwik")),r.a.createElement(y,{user:!0,title:"BrainKwik",entryId:this.state.entryId,addCard:this.addCard.bind(this),action:"start"}),r.a.createElement(C.a,{fluid:!0,className:"editing"},r.a.createElement("div",{className:"content"},r.a.createElement(A,{updateTitle:this.updateTitle.bind(this),title:this.state.title,alert:this.state.alert,buttonText:"Save title"}),r.a.createElement(N,{updateDesc:this.updateDesc.bind(this),descriptionVal:this.state.descriptionVal,alert:this.state.descAlert}),r.a.createElement("div",null,this.state.currentCards.length>0&&t,r.a.createElement(S.a,{className:"justify-content-center"},r.a.createElement(v.a,{md:5,xs:10,lg:5,xl:5},r.a.createElement("button",{id:"addCard",onClick:function(){e.addCard()}},"Add a card")))))))}}]),a}(r.a.Component),R=i.a.firestore(),V=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currentCards:[],entryId:n.props.match.params.urlString,shuffled:[],index:0,currentSide:"A",cardsAnswered:0,category:"",cardsCorrect:0,title:"",isSignedIn:!1,complete:!1,disabled:!0,flips:0},n.endButton=r.a.createRef(),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unregisterAuthObserver=i.a.auth().onAuthStateChanged((function(t){e.setState({isSignedIn:!!t},(function(){var t=i.a.auth().currentUser.uid,a=-1===e.props.location.pathname.indexOf("/set/yours/")?R.collection("defaultcards"):R.collection("users").doc(t).collection("yourCards");e.unsubscribe=a.doc(e.state.entryId).collection("cards").orderBy("created","asc").onSnapshot((function(t){e.setState({currentCards:t.docs,category:""}),e.shuffle(e.state.currentCards)})),a.doc(e.state.entryId).get().then((function(t){t.exists?e.setState({category:t.data().category,title:t.data().title}):e.props.history.push("/404")}))}))}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"shuffle",value:function(e){var t=e.map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}));this.setState({shuffled:t,index:0,currentSide:"A",complete:!1,disabled:!0})}},{key:"flip",value:function(){var e="B"===this.state.currentSide?"A":"B",t=this.state.flips+1;this.setState({currentSide:e,flips:t,disabled:!1})}},{key:"endStudy",value:function(){"C"===this.state.currentSide?this.props.history.push("/flashcards/home"):0!==this.state.cardsAnswered?this.setState({currentSide:"C",disabled:!0}):this.props.history.push("/flashcards/home")}},{key:"nextCard",value:function(e){var t=this,a=this.state.index+1,n=this.state.cardsAnswered+1,r=this.state.cardsCorrect+e;this.setState({index:a,cardsAnswered:n,cardsCorrect:r,flips:0,disabled:!0},(function(){a===t.state.currentCards.length?t.setState({complete:!0,currentSide:"C"},t.endStudy()):t.setState({currentSide:"A",complete:!1})}))}},{key:"render",value:function(){var e=this,t=this.state.shuffled[this.state.index],a=function(){return t&&"C"!==e.state.currentSide?r.a.createElement(S.a,{className:"justify-content-center cardHolder"},r.a.createElement(v.a,{className:"h-100",md:10,xs:12,lg:10,xl:10},r.a.createElement(b.a,{className:"sideA side ".concat(e.state.category),onClick:function(){e.flip()}},r.a.createElement("span",null,t.data().sideA))),r.a.createElement(v.a,{className:"h-100",md:10,xs:12,lg:10,xl:10},r.a.createElement(b.a,{className:"sideB side ".concat(e.state.category),onClick:function(){e.flip()}}," ",r.a.createElement("span",null,t.data().sideB)))):"C"===e.state.currentSide?r.a.createElement(v.a,{className:"h-100 sideB ".concat(e.state.category),md:10,xs:12,lg:10,xl:10},r.a.createElement(b.a,{className:"endCard"},r.a.createElement("span",null,"During this session, you got ".concat(e.state.cardsCorrect," out of ").concat(e.state.cardsAnswered," cards correct."),r.a.createElement("br",null),"\n            That's ".concat(parseFloat(e.state.cardsCorrect/e.state.cardsAnswered*100).toFixed(1),"%!")," "))):r.a.createElement(r.a.Fragment,null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,this.state.title," | BrainKwik")),r.a.createElement(y,{title:this.state.title,action:"cancel"}),r.a.createElement(C.a,{fluid:!0,id:"answer"},r.a.createElement(S.a,{className:"answerButtons justify-content-center topButtons"},r.a.createElement(v.a,{md:6,xs:12,lg:6,xl:6},r.a.createElement("button",{onClick:function(){e.flip()}},"Click to flip card"))),r.a.createElement(S.a,{className:"cardAnswer justify-content-center ".concat(e.state.flips>0&&e.state.flips%2===1?"flipped":e.state.flips>0&&e.state.flips%2===0?"unflipped":"")},r.a.createElement(a,null)),r.a.createElement(S.a,{className:"answerButtons justify-content-center result"},r.a.createElement(v.a,{md:4,xs:6,lg:4,xl:4},r.a.createElement("button",{id:"correct",disabled:this.state.disabled,onClick:function(){e.nextCard(1)}},"I got it right")),r.a.createElement(v.a,{md:4,xs:6,lg:4,xl:4},r.a.createElement("button",{id:"incorrect",disabled:this.state.disabled,onClick:function(){e.nextCard(0)}},"I got it incorrect"))),r.a.createElement(S.a,{className:"answerButtons  justify-content-center bottom"},r.a.createElement(v.a,{md:6,xs:12,lg:6,xl:6},r.a.createElement("button",{id:"reshuffle",onClick:function(){e.shuffle(e.state.currentCards)}},"Start Over"))," ",r.a.createElement(v.a,{md:6,xs:12,lg:6,xl:6},r.a.createElement("button",{id:"end",ref:this.endButton,onClick:function(){e.endStudy()}},"End Session")))))}}]),a}(r.a.Component),K=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,{className:"justify-content-center"},r.a.createElement(v.a,{xs:10,className:"selectDiv"},r.a.createElement("select",{defaultValue:this.props.category,onChange:this.props.dropdownChanged,disabled:this.props.disabled},r.a.createElement("option",{value:"",disabled:!0},"Categorize your set"),r.a.createElement("option",{value:"geography"},"Geography"),r.a.createElement("option",{value:"history"},"History"),r.a.createElement("option",{value:"pop-culture"},"Pop Culture"),r.a.createElement("option",{value:"science"},"Science"),r.a.createElement("option",{value:"sports"},"Sports"),r.a.createElement("option",{value:"other"},"Other"))))}}]),a}(r.a.Component),F=i.a.firestore(),U=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).dropdownChanged=function(e){n.setState({category:e.target.value})},n.descRef=r.a.createRef(),n.state={title:null,descriptionVal:null,card:null,entryId:null,alert:null,descAlert:null,category:""},n}return Object(u.a)(a,[{key:"updateTitle",value:function(e){var t=e;if(t.length<4)this.setState({alert:"Title must be at least four characters long"});else{var a=t.replace(/\W+/g," ").replace(/\s+/g,"-").toLowerCase();this.setState({title:t,alert:null,entryId:a})}}},{key:"updateDesc",value:function(e){var t=e;if(t.length<5)this.setState({descAlert:"Please write a longer description"});else{this.setState({descriptionVal:t,descAlert:null});var a=this.state.entryId;this.checkExists(a,0)}}},{key:"checkExists",value:function(e,t){var a=this;F.collection("defaultcards").doc(e).get().then((function(n){if(n.exists){t++;var r=a.state.entryId+"-"+t;a.checkExists(r,t)}else a.setState({entryId:e}),setTimeout(a.createSet(),1e3)}))}},{key:"createSet",value:function(){var e=i.a.auth().currentUser.uid;F.collection("users").doc(e).collection("yourCards").doc(this.state.entryId).set({category:this.state.category,title:this.state.title,description:this.state.descriptionVal}),F.collection("users").doc(e).collection("yourCards").doc(this.state.entryId).collection("cards").add({sideA:null,sideB:null,answered:0,correct:0,created:new Date}),this.props.history.push({pathname:"/set/yours/".concat(this.state.entryId,"/edit"),state:{title:this.state.title,description:this.state.descriptionVal,category:this.state.category,entryId:this.state.entryId}})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Create a card set BrainKwik")),r.a.createElement(y,{title:"BrainKwik",action:"cancel"}),r.a.createElement(C.a,{fluid:!0,className:this.state.category},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Here's your chance to create a new study set."),r.a.createElement(K,{dropdownChanged:this.dropdownChanged,category:this.state.category,disabled:!1}),""!==this.state.category&&r.a.createElement(A,{updateTitle:this.updateTitle.bind(this),title:this.state.title,alert:this.state.alert,buttonText:"Save title"}),null!==this.state.title&&r.a.createElement(N,{updateDesc:this.updateDesc.bind(this),title:this.state.descriptionVal,alert:this.state.descAlert}))))}}]),a}(r.a.Component),W=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(k.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"404 | BrainKwik")),r.a.createElement(y,{title:"BrainKwik",action:"cancel"}),r.a.createElement(C.a,{fluid:!0,className:"fourohfour"},r.a.createElement(S.a,{className:"justify-content-center"},r.a.createElement(v.a,{md:6,xs:12,lg:6,xl:6},"You have a 404 error.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.b,{to:"/home"},"Go to our homepage")))))}}]),a}(r.a.Component),M=(a(79),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/home",component:x}),r.a.createElement(p.a,{exact:!0,path:"/",component:I}),r.a.createElement(p.a,{path:"/set/yours/:urlString/edit",component:T}),r.a.createElement(p.a,{path:"/set/yours/:urlString/",component:V}),r.a.createElement(p.a,{path:"/set/:urlString/",component:V}),r.a.createElement(p.a,{path:"/new",component:U}),r.a.createElement(p.a,{component:W}))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.3d910c7c.chunk.js.map