"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5980],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),m=s(a),u=i,c=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(c,o(o({ref:t},h),{},{components:a})):n.createElement(c,o({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4227:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));a(4996);const l={title:"Tutorial: `forall` in Haskell",authors:["martinsos"],tags:["haskell","tutorial"]},o=void 0,r={permalink:"/blog/2021/09/01/haskell-forall-tutorial",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2021-09-01-haskell-forall-tutorial.md",source:"@site/blog/2021-09-01-haskell-forall-tutorial.md",title:"Tutorial: `forall` in Haskell",description:"--------",date:"2021-09-01T00:00:00.000Z",formattedDate:"September 1, 2021",tags:[{label:"haskell",permalink:"/blog/tags/haskell"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:8.775,hasTruncateMarker:!0,authors:[{name:"Martin Sosic",title:"Co-founder & CTO @ Wasp",url:"https://github.com/martinsos",imageURL:"https://github.com/martinsos.png",key:"martinsos"}],frontMatter:{title:"Tutorial: `forall` in Haskell",authors:["martinsos"],tags:["haskell","tutorial"]},prevItem:{title:"Following YC, Wasp raised $1.5M Seed Round led by Lunar Ventures and HV Capital",permalink:"/blog/2021/11/21/seed-round"},nextItem:{title:"How to implement a Discord bot (in NodeJS) that requires new members to introduce themselves",permalink:"/blog/2021/04/29/discord-bot-introduction"}},p={authorsImageUrls:[void 0]},s=[{value:"Quick math/logic reminder",id:"quick-mathlogic-reminder",level:2},{value:"Vanilla Haskell (no extensions)",id:"vanilla-haskell-no-extensions",level:2},{value:"<code>forall</code> and extension ScopedTypeVariables",id:"forall-and-extension-scopedtypevariables",level:2},{value:"<code>forall</code> and extension RankNTypes",id:"forall-and-extension-rankntypes",level:2},{value:"<code>forall</code> and extension ExistentialQuantification",id:"forall-and-extension-existentialquantification",level:2},{value:"GADTs",id:"gadts",level:3},{value:"<code>forall</code> and extension TypeApplications",id:"forall-and-extension-typeapplications",level:2}],h={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Find out what Haskell's ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," is all about."),(0,i.kt)("p",null,"You might have seen ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," being used in Haskell like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},"f :: forall a. [a] -> [a]\nf xs = ys ++ ys\n  where ys :: [a]\n        ys = reverse xs\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"liftPair :: (forall x. x -> f x) -> (a, b) -> (f a, f b)\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"data Showable = forall s. (Show s) => Showable s\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"forall"),' is something called "type quantifier", and it gives extra meaning to polymorphic type signatures (e.g. ',(0,i.kt)("inlineCode",{parentName:"p"},":: a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},":: a -> b"),", ",(0,i.kt)("inlineCode",{parentName:"p"},":: a -> Int"),", ...)."),(0,i.kt)("p",null,"While normaly ",(0,i.kt)("inlineCode",{parentName:"p"},"forall"),' plays a role of the "universal quantifier", it can also play a role of the "existential quantifier" (depends on the situation).'),(0,i.kt)("p",null,"What does all this mean and how can ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," be used in Haskell? Read on to find out!"),(0,i.kt)("p",null,"NOTE: we assume you are comfortable with basic polymorphism in Haskell."),(0,i.kt)("h2",{id:"quick-mathlogic-reminder"},"Quick math/logic reminder"),(0,i.kt)("p",null,"In mathematical logic, we have"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Universal_quantification"},"universal quantifier")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"symbol: \u2200x"),(0,i.kt)("li",{parentName:"ul"},'interpretation: "for all", "given any"'),(0,i.kt)("li",{parentName:"ul"},"example: ",(0,i.kt)("inlineCode",{parentName:"li"},"\u2200x P(x)"),' means "for all x predicate P(x) is true".'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Existential_quantification"},"existential quantifier")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"symbol: \u2203x"),(0,i.kt)("li",{parentName:"ul"},'interpretation: "there exists", "there is at least one", "for some"'),(0,i.kt)("li",{parentName:"ul"},"example: ",(0,i.kt)("inlineCode",{parentName:"li"},"\u2203x P(x)"),' means "there is some x for which predicate P(x) is true".')))),(0,i.kt)("h2",{id:"vanilla-haskell-no-extensions"},"Vanilla Haskell (no extensions)"),(0,i.kt)("p",null,"In Haskell, all polymorphic type signatures are considered to be implicitly prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"forall"),"."),(0,i.kt)("p",null,"Therefore, if you have"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"f :: a -> a\ng :: a -> (a -> b) -> b\n")),(0,i.kt)("p",null,"it is really the same as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"f :: forall a. a -> a\ng :: forall a b. a -> (a -> b) -> b\n")),(0,i.kt)("p",null,"What ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," here does is play the role of universal quantifier.\nFor function ",(0,i.kt)("inlineCode",{parentName:"p"},"f"),', it means it is saying "for all types, this function takes that type and returns the same type.".\nOther way to put it would be "this funtion can be called with value of any type as its first argument, and it will return the value of that same type".'),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," is already implicit, writing it explicitly doesn't really do anything!"),(0,i.kt)("p",null,"Not only that, but without any extensions, you can't even write ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," explicitly, you will get a syntax error, since ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," is not a keyword in Haskell."),(0,i.kt)("p",null,"So what is the purpose of ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," then? Well, obviously to be used with extensions :)!"),(0,i.kt)("p",null,"The simplest extension is ",(0,i.kt)("inlineCode",{parentName:"p"},"ExplicitForAll"),", which allows you to explicitly write ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," (as we did above).\nThis is not useful on its own though, since as we said above, explicitly writing ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," doesn't change anything, it was already implicitly there."),(0,i.kt)("p",null,"However, there are other extensions that make use of ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," keyword, like: ",(0,i.kt)("inlineCode",{parentName:"p"},"ScopedTypeVariables"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RankNTypes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ExistentialQuantification"),".\nAll these extensions automatically enable ",(0,i.kt)("inlineCode",{parentName:"p"},"ExplicitForAll")," extension, which means you don't need to enable it yourself when using any of these.\nThere is also ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeApplications")," extension which interacts with ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," and in that case you might want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ExplicitForAll")," with it."),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," is useful only when used with extensions, let's take a look at how it is used in each one of those!"),(0,i.kt)("h2",{id:"forall-and-extension-scopedtypevariables"},(0,i.kt)("inlineCode",{parentName:"h2"},"forall")," and extension ",(0,i.kt)("a",{parentName:"h2",href:"https://ghc.readthedocs.io/en/latest/glasgow_exts.html#lexically-scoped-type-variables"},"ScopedTypeVariables")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ScopedTypeVariables")," enables lexical scoping of type variables by explicitly introducing them with ",(0,i.kt)("inlineCode",{parentName:"p"},"forall"),"."),(0,i.kt)("p",null,"Let's take a look at the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"f :: [a] -> [a]\nf xs = ys ++ ys\n  where ys :: [a]\n        ys = reverse xs\n")),(0,i.kt)("p",null,"This code does not compile, because compiler can't match type of ",(0,i.kt)("inlineCode",{parentName:"p"},"ys")," with the return type of ",(0,i.kt)("inlineCode",{parentName:"p"},"f"),".\nWhy though, when they are both ",(0,i.kt)("inlineCode",{parentName:"p"},"[a]"),"? Well, that is because that is not the same ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),"!\nTry changing ",(0,i.kt)("inlineCode",{parentName:"p"},"ys :: [a]")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ys :: [b]")," and you will get the exact same error,\nbecause it is exactly the same code -> ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"ys :: [a]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"f :: [a] -> [a]")," are different ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),"s and there is no connection between them.\n",(0,i.kt)("inlineCode",{parentName:"p"},"a")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"ys :: [a]"),' stands for "any type", not for "that type that is reffered to with ',(0,i.kt)("inlineCode",{parentName:"p"},"a"),' in the type signature above".'),(0,i.kt)("p",null,"This is where ",(0,i.kt)("inlineCode",{parentName:"p"},"ScopedTypeVariables")," comes in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"{-# LANGUAGE ScopedTypeVariables #-}\n\nf :: forall a. [a] -> [a]\nf xs = ys ++ ys\n  where ys :: [a]\n        ys = reverse xs\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"forall")," now gets special powers: the type variables bound by a forall (in our case ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),") scope over the entire definition\nof the accompanying value declaration (in this case definition of ",(0,i.kt)("inlineCode",{parentName:"p"},"f"),")."),(0,i.kt)("p",null,"This means that any mention of type ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," in the definition of ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," now refers to that ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," from the type signature of ",(0,i.kt)("inlineCode",{parentName:"p"},"f"),",\nwhich is exactly what we needed, and the code example above now compiles."),(0,i.kt)("h2",{id:"forall-and-extension-rankntypes"},(0,i.kt)("inlineCode",{parentName:"h2"},"forall")," and extension ",(0,i.kt)("a",{parentName:"h2",href:"https://ghc.readthedocs.io/en/latest/glasgow_exts.html#arbitrary-rank-polymorphism"},"RankNTypes")),(0,i.kt)("p",null,"Basically, what ",(0,i.kt)("inlineCode",{parentName:"p"},"RankNTypes")," does is enable you to use ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," nested in type signatures, so that it does not apply to the whole type signature but just the part of it."),(0,i.kt)("p",null,"This enables some cool things that you were not able to do to before, for example you can specify that your function takes a polymorphic function as an argument."),(0,i.kt)("p",null,"Take a look at this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"foo :: (forall a. a -> a) -> (Char, Bool)    -- We can do this only with RankNTypes.\n\nbar :: forall a. ((a -> a) -> (Char, Bool))  -- This is usual stuff, we don't need RankNTypes for it. Actually we can even drop `forall` since it is implicit.\n")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," is applied only to the first argument of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),", which is ",(0,i.kt)("inlineCode",{parentName:"p"},"a -> a"),", and not to the rest of the ",(0,i.kt)("inlineCode",{parentName:"p"},"f"),"'s type signature. This can be done only with ",(0,i.kt)("inlineCode",{parentName:"p"},"RankNTypes")," extension.\n",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," on the other hand has ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," applied to the whole signature, and we could have even ommited this ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," since it would be there implicitly anyway."),(0,i.kt)("p",null,"Now, what does this mean? If we now have ",(0,i.kt)("inlineCode",{parentName:"p"},"specificFunc :: Int -> Int")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"polymorphicFunc :: a -> a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"foo polymorphicFunc")," will compile, while ",(0,i.kt)("inlineCode",{parentName:"p"},"foo specificFunc")," will not! On the other hand both ",(0,i.kt)("inlineCode",{parentName:"p"},"bar specificFunc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"bar polymorphicFunc")," will compile."),(0,i.kt)("p",null,"This is because we specified, with ",(0,i.kt)("inlineCode",{parentName:"p"},"forall"),", that ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," needs a polymorphic function (function that takes value of ",(0,i.kt)("strong",{parentName:"p"},"any")," type and returns value of that same type) as the first argument, so we can't pass it a function like ",(0,i.kt)("inlineCode",{parentName:"p"},"specificFunc")," that works only for ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," -> such function is too specific.\nOn the other hand, ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," needs a function that takes value of ",(0,i.kt)("strong",{parentName:"p"},"some")," type and returns the value of that same type, so ",(0,i.kt)("inlineCode",{parentName:"p"},"specificFunc")," is completely fine since it works only with ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),", while ",(0,i.kt)("inlineCode",{parentName:"p"},"polymorphicFunc")," is also ok although it is more general than what is needed, since compiler can easily specialize it. "),(0,i.kt)("p",null,"Another example is ",(0,i.kt)("inlineCode",{parentName:"p"},"liftPair")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"liftPair :: (forall x. x -> f x) -> (a, b) -> (f a, f b)\nliftPair func (y, z) = (func y, func z)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'>> liftPair (:[]) (1, "a")\n([1], ["a"])\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"liftPair")," takes polymorphic function and applies it to both values in the pair.\nThere would be no way to write its type signature without using ",(0,i.kt)("inlineCode",{parentName:"p"},"RankNTypes"),"."),(0,i.kt)("h2",{id:"forall-and-extension-existentialquantification"},(0,i.kt)("inlineCode",{parentName:"h2"},"forall")," and extension ",(0,i.kt)("a",{parentName:"h2",href:"https://ghc.readthedocs.io/en/latest/glasgow_exts.html#existentially-quantified-data-constructors"},"ExistentialQuantification")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ExistentialQuantification")," enables us to use ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," in the type signature of data constructors."),(0,i.kt)("p",null,"This is useful because it enables us to define heterogeneous data types, which then allows us to store different types in a single data collection (which normally you can't do in Haskell, e.g. you can't have different types in a list)."),(0,i.kt)("p",null,"For example, if we have"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"data Showable = forall s. (Show s) => Showable s\n")),(0,i.kt)("p",null,"now we can do"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hs"},'someShowables :: [Showable]\nsomeShowables = [Showable "Hi", Showable 5, Showable (1, 2)]\n\nprintShowables :: [Showable] -> IO ()\nprintShowables ss = mapM_ (\\(Showable s) -> print s) ss\n\nmain :: IO ()\nmain = printShowables someShowables\n')),(0,i.kt)("p",null,"In this example this allowed us to create a heterogeneous list, but only thing we can do with the contents of it is show them."),(0,i.kt)("p",null,"What is interesting is that in this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," plays the role of an existential quantifier (therefore the name of extension, ",(0,i.kt)("inlineCode",{parentName:"p"},"ExistentialQuantification"),"), unlike the role of universal quantifier it normally plays."),(0,i.kt)("h3",{id:"gadts"},"GADTs"),(0,i.kt)("p",null,"Alternative approach to ",(0,i.kt)("inlineCode",{parentName:"p"},"ExistentialQuantification")," is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"GADTs")," extension, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hs"},"{-# LANGUAGE GADTs #-}\ndata Showable where\n  Showable :: (Show s) => s -> Showable\n")),(0,i.kt)("p",null,"In this case ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," is not needed, as it is implicit."),(0,i.kt)("h2",{id:"forall-and-extension-typeapplications"},(0,i.kt)("inlineCode",{parentName:"h2"},"forall")," and extension ",(0,i.kt)("a",{parentName:"h2",href:"https://ghc.readthedocs.io/en/latest/glasgow_exts.html#visible-type-application"},"TypeApplications")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TypeApplications")," does not change how ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," works like the extensions above do, but it does have an interesting interaction with ",(0,i.kt)("inlineCode",{parentName:"p"},"forall"),", so we will mention it here."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TypeApplications")," allows you to specify values of types variables in a type."),(0,i.kt)("p",null,"For example, you can do ",(0,i.kt)("inlineCode",{parentName:"p"},'show (read @Int "5")')," to specify that ",(0,i.kt)("inlineCode",{parentName:"p"},'"5"')," should be interpreted as an ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"read")," has type signature ",(0,i.kt)("inlineCode",{parentName:"p"},":: Read a => String -> a"),", so what ",(0,i.kt)("inlineCode",{parentName:"p"},"@Int")," does is say that that ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," in the type signature is ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),".\nTherefore, ",(0,i.kt)("inlineCode",{parentName:"p"},"read @Int :: String -> Int"),"."),(0,i.kt)("p",null,"How does ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," come into play here?"),(0,i.kt)("p",null,"Well, if an identifier\u2019s type signature does not include an explicit ",(0,i.kt)("inlineCode",{parentName:"p"},"forall"),", the type variable arguments appear in the left-to-right order in which the variables appear in the type. So, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo :: Monad m => a b -> m (a c)")," will have its type variables ordered as ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"c"),", and type applications will happen in that order: if we have ",(0,i.kt)("inlineCode",{parentName:"p"},"foo @Maybe @Either"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@Maybe")," will apply to ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," while ",(0,i.kt)("inlineCode",{parentName:"p"},"@Either")," will apply to ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),". However, if you want to force a different order, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"c"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),", so that ",(0,i.kt)("inlineCode",{parentName:"p"},"@Maybe")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"foo @Maybe @Either")," applies to ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", you can refactor the signature as ",(0,i.kt)("inlineCode",{parentName:"p"},"foo :: forall a b c m. Monad m => a b -> m (a c)"),", and now order of type variables in ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," will be used when doing type applications!"),(0,i.kt)("p",null,"This will require you to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"ExplicitForAll")," extension, if it is not already enabled."),(0,i.kt)("h1",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This document should give a fair idea of how ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," is used and what can be done with it, but it doesn't go into much depth or cover all of the ways ",(0,i.kt)("inlineCode",{parentName:"p"},"forall")," is used in Haskell."),(0,i.kt)("p",null,"For more in-detail explanations and further investigation, here is a couple of useful resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Great SO question/answers: ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/3071136/what-does-the-forall-keyword-in-haskell-ghc-do"},"https://stackoverflow.com/questions/3071136/what-does-the-forall-keyword-in-haskell-ghc-do")," ."),(0,i.kt)("li",{parentName:"ul"},"Docs on extensions, which in details describe how each of them works: ",(0,i.kt)("a",{parentName:"li",href:"https://ghc.readthedocs.io/en/latest/glasgow_exts.html"},"https://ghc.readthedocs.io/en/latest/glasgow_exts.html")," ."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/explicit_forall.html"},"https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/explicit_forall.html")," ."),(0,i.kt)("li",{parentName:"ul"},"Article about ",(0,i.kt)("inlineCode",{parentName:"li"},"ST")," monad that also explains a lot about ",(0,i.kt)("inlineCode",{parentName:"li"},"forall"),": ",(0,i.kt)("a",{parentName:"li",href:"https://dl.acm.org/doi/10.1145/178243.178246"},"https://dl.acm.org/doi/10.1145/178243.178246")," . ")),(0,i.kt)("p",null,"This blog post originated from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/haskell-handbook/blob/35f14951b17f2174cbc269628bea157b6698a9e4/forall.md"},"notes I wrote in wasp-lang/haskell-handbook"),"."))}d.isMDXComponent=!0}}]);