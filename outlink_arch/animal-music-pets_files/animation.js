var txtTm       = 0.45;
var lglTm       = 0.2;
var beamTm      = 1.35;
var bgTm        = 0.3;
var noTm        = null;
document.body.addEventListener("click",function(){
	console.log("WORKING");
	var TrackString="EF";
	var F1=document.getElementById("F1")||document.getElementsByClassName("F1")[0];
	var F2=document.getElementById("F2")||document.getElementsByClassName("F2")[0];
	var F3=document.getElementById("F3")||document.getElementsByClassName("F3")[0];
	var F4=document.getElementById("F4")||document.getElementById("EF")||document.getElementsByClassName("F4")[0]||document.getElementsByClassName("EF")[0];
	if(window.getComputedStyle(F1).opacity==1) trackString="F1"
	if(window.getComputedStyle(F2).opacity==1) trackString="F2"
	if(window.getComputedStyle(F3).opacity==1) trackString="F3"
	if(window.getComputedStyle(F4).opacity==1) trackString="EF"
	myFT.tracker(trackString+"_Click");
})
// UPDATED MT PROVIDED BY JIVOX

function masterTimeline() {
	var masterTl = gsap.timeline({});

	var hasDynamicAssetData = true;

	// Get Dynamic Global Background Source
	//const bannerBackground = "url(" + dynamicData['DB_Name'][0]['banner_bg-src'] + ")";

	if (typeof dynamicAssetData != "undefined") {
		if (!dynamicAssetData['Frame-One'] && !dynamicAssetData['Frame-Two'] && !dynamicAssetData['Frame-Three'] && !dynamicAssetData['End-Frame']) {
			hasDynamicAssetData = false;
		}
		if (!hasDynamicAssetData) {
			var F1 = dynamicAssetData['Frame-One'] ? dynamicAssetData['Frame-One'] : "F1-LOGO";
			var F2 = dynamicAssetData['Frame-Two'] ? dynamicAssetData['Frame-Two'] : "F2-DR-C";
			var F3 = dynamicAssetData['Frame-Three'] ? dynamicAssetData['Frame-Three'] : "F3-IMG";
			var F4 = dynamicAssetData['End-Frame'] ? dynamicAssetData['End-Frame'] : "EF-DR-C";
			console.log(dynamicAssetData);
			console.log(F1, F2, F3, F4);

		} else {

			var F1 = dynamicAssetData['Frame-One'] ? dynamicAssetData['Frame-One'] : "";
			var F2 = dynamicAssetData['Frame-Two'] ? dynamicAssetData['Frame-Two'] : "";
			var F3 = dynamicAssetData['Frame-Three'] ? dynamicAssetData['Frame-Three'] : "";
			var F4 = dynamicAssetData['End-Frame'] ? dynamicAssetData['End-Frame'] : "";
			console.log(dynamicAssetData);
			console.log(F1, F2, F3, F4);
		}

	} else {
		var F1 = "F1-LOGO";
		var F2 = "F2-DR-C";
		var F3 = "F3-IMG";
		var F4 = "EF-DR-C";
		console.log("Default");
	}

	masterTl

		// Dynamic Global Background Image and Color
		//.set(['#viewport'], {backgroundImage: bannerBackground }) // Set banner background image
		// .set(['#viewport'], {backgroundColor: `${dynamicData['DB_Name'][0]['banner_color-input']}` }) // Set banner background color

		.add(frameSwitch(F1))
		.add(frameSwitch(F2))
		.add(frameSwitch(F3))
		.add(frameSwitch(F4))
}

function frameSwitch(frame){
    gsap.set([crtv.viewport, crtv.banner, crtv.border], {autoAlpha:1});

    var tl = gsap.timeline();
    switch(frame){
        case 'F1-LOGO': tl.add(frameOneVariantA()); break; // F1-LOGO
        case 'F1-C': tl.add(frameOneVariantB()); break; // F1-C
        case 'F1-IMG': tl.add(frameOneVariantC()); break; // F1-IMG
        // case 'F1-D': tl.add(frameOneVariantD()); break; // F1-D
        case 'F1-STATIC': tl.add(frameOneVariantF()); break; // F1-STATIC BG ONLY
        case 'F2-DR-C': tl.add(frameTwoVariantA()); break; // FF-DR-C
        case 'F2-C': tl.add(frameTwoVariantB()); break; // FF-C
        case 'F2-DR-IMG': tl.add(frameTwoVariantC()); break; // FF-DR-IMG
        case 'F2-IMG': tl.add(frameTwoVariantD()); break; // FF-IMG
        case 'F2-DL-C': tl.add(frameTwoVariantE()); break; // FF-DL-C
        case 'F2-DL-IMG': tl.add(frameTwoVariantF()); break; // FF-DL-IMG
        case 'F2-DL-IMG-C': tl.add(frameTwoVariantG()); break; // FF-DL-IMG-C
        case 'F2-DR-IMG-C': tl.add(frameTwoVariantH()); break; // FF-DR-IMG-C
        case 'F2-LS-C': tl.add(frameTwoVariantI()); break; // FF-LS-C
        case 'F2-LS-IMG': tl.add(frameTwoVariantJ()); break; // FF-LS-IMG
        case 'F2-LS-IMG-C': tl.add(frameTwoVariantK()); break; // FF-LS-IMG-C
        case 'F2-LS-C-TOP': tl.add(frameTwoVariantL()); break; // FF-LS-C_TOP
        case 'F2-BG-C': tl.add(frameTwoVariantM()); break; // FF-BG-C
        case 'F2-BG-C-BOX': tl.add(frameTwoVariantN()); break; // FF-BG-C-BOX
        case 'F2-STATIC': tl.add(frameTwoVariantP()); break; // FF-STATIC BG ONLY
        case 'F2-LS-IMG-TOP': tl.add(frameTwoVariantQ()); break; // FF-LS-C_TOP
        case 'F3-DR-C': tl.add(frameThreeVariantA()); break;
        case 'F3-C': tl.add(frameThreeVariantB()); break;
        case 'F3-DR-IMG': tl.add(frameThreeVariantC()); break;
        case 'F3-IMG': tl.add(frameThreeVariantD()); break;
        case 'F3-DL-C': tl.add(frameThreeVariantE()); break;
        case 'F3-DL-IMG': tl.add(frameThreeVariantF()); break;
        case 'F3-DL-IMG-C': tl.add(frameThreeVariantG()); break;
        case 'F3-DR-IMG-C': tl.add(frameThreeVariantH()); break;
        case 'F3-LS-C': tl.add(frameThreeVariantI()); break;
        case 'F3-LS-IMG': tl.add(frameThreeVariantJ()); break;
        case 'F3-LS-IMG-C': tl.add(frameThreeVariantK()); break;
        case 'F3-LS-C-TOP': tl.add(frameThreeVariantL()); break;
        case 'F3-BG-C': tl.add(frameThreeVariantM()); break;
        case 'F3-BG-C-BOX': tl.add(frameThreeVariantN()); break;
        case 'F3-STATIC': tl.add(frameThreeVariantP()); break; // FF-STATIC BG ONLY
        case 'F3-LS-IMG-TOP': tl.add(frameThreeVariantQ()); break;
        case 'EF-C': tl.add(endFrameVariantA()); break; // EF-C
        case 'EF-DR-C': tl.add(endFrameVariantB()); break; // EF-DR-C
        case 'EF-DR-IMG': tl.add(endFrameVariantC()); break; // EF-DR-IMG
        case 'EF-DR-IMG-C': tl.add(endFrameVariantD()); break; // EF-DR-IMG-C
        case 'EF-IMG': tl.add(endFrameVariantE()); break; // EF-IMG
        case 'EF-DL-C': tl.add(endFrameVariantF()); break; // EF-DL-C
        case 'EF-DL-IMG': tl.add(endFrameVariantG()); break; // EF-DL-IMG
        case 'EF-DL-IMG-C': tl.add(endFrameVariantH()); break; // EF-DL-IMG-C
        case 'EF-LS-C': tl.add(endFrameVariantI()); break; // EF-LS-C
        case 'EF-LS-IMG': tl.add(endFrameVariantJ()); break; // EF-LS-IMG
        case 'EF-LS-IMG-C': tl.add(endFrameVariantK()); break; // EF-LS-IMG-C
        case 'EF-BG-C': tl.add(endFrameVariantL()); break; // EF-BG-C
        case 'EF-STATIC': tl.add(endFrameVariantM()); break; // EF-STATIC BG ONLY
        default: null;
    }
    return tl;
}

//Frame One
function frameOneVariantA(){
    const product = document.querySelector("#F1-1_image2-src_728x90");
    product.style.display = "none";
    const legal = document.querySelector("#F1-1_frameLegal-input_728x90");
    document.querySelector('#F1-bg').style.display = 'none';
    legal.style.display = "none";

    var tl = gsap.timeline();

    gsap.set(['.F1'], {autoAlpha: 1});
    gsap.set(['#T_Logo'], {x: 85});
    gsap.set(['#Mobile_Logo'], {x: -175});
    gsap.set(['#logoClip1_2'], {clip:'rect(0px, 728px, 170px, 80px)'});

    tl
        .from(['#T_Logo'], 0.6, {y: -20, opacity: 0, ease: Back.easeInOut})
        .to(['#T_Logo'], 0.35, {x: 0, ease: Power2.easeOut}, 'logoSync+=.3')
        .to(['#Mobile_Logo'], 0.35, {x: -10, opacity: 1, ease:Power2.easeOut}, 'logoSync+=.4')
        .from(['#logoClip1_2'], 0.35, {clip:"rect(0px, 728px, 90px, 369px);", ease:Power2.easeOut}, 'logoSync+=.6')
        .to(['#T_Logo', '#Mobile_Logo'], .5, {y: 50, opacity: 0, ease: Power4.easeIn}, '+=.6')
    return tl;
}
function frameOneVariantB(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#T_Logo').style.display = 'none';
    document.querySelector('#Mobile_Logo').style.display = 'none';
    document.querySelector('#F1-1_image1-src_728x90').style.display = 'none';
    document.querySelector('#F1-1_image2-src_728x90').style.display = 'none';

    let theBox = document.getElementById("F1-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F1-bound");
    theBound.style.padding = "7px 230px 12px 109px";
    let legal = document.getElementById("F1-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F1') === true) {
        theBound.style.padding = "7px 169px 12px 169px";
    }

    tl.set([".F1"], { autoAlpha: 1 })
        .set(['#F1-1_copy-input_728x90','#F1-2_copy-input_728x90','#F1-3_copy-input_728x90','#F1-4_copy-input_728x90'], {y: 20, opacity: 0})
        .to(["#F1-1_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.2")
        .to(["#F1-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#F1-3_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#F1-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(["#F1-1_largerLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .from(["#F1-1_frameLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .set(['.F1'], {autoAlpha:0, delay:d})
    return tl;
}
function frameOneVariantC(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#T_Logo').style.display = 'none';
    document.querySelector('#Mobile_Logo').style.display = 'none';
    document.querySelector('#F1-1_image2-src_728x90').style.display = 'none';
    document.querySelector('#F1-copy').style.display = 'none';

    let theBox = document.getElementById("F1-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F1-bound");
    theBound.style.padding = "76px 222px 3px 62px";

    let legal = document.getElementById("F1-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F1') === true) {
        theBound.style.padding = "76px 142px 3px 142px";
    }

    tl
        .set(['.F1'], {autoAlpha:1})
        .set(['#F1-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-75, opacity: 0})
        .to(['#F1-1_image1-src_728x90'], 0.8, {x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F1-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .from(['#F1-1_frameLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .set(['.F1'], {autoAlpha:0, delay:d})
    return tl;
}
function frameOneVariantF(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#T_Logo').style.display = 'none';
    document.querySelector('#Mobile_Logo').style.display = 'none';
    document.querySelector('#F1-1_image2-src_728x90').style.display = 'none';
    document.querySelector('#F1-copy').style.display = 'none';

    let theBox = document.getElementById("F1-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F1-bound");
    theBound.style.padding = "76px 222px 3px 62px";

    let legal = document.getElementById("F1-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F1') === true) {
        theBound.style.padding = "76px 142px 3px 142px";
    }

    tl
        .set(['.F1'], {autoAlpha:1})
        .set(['#F1-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-75, opacity: 0})
        .to(['#F1-1_image1-src_728x90'], 0.8, {x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F1-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .from(['#F1-1_frameLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .set(['.F1'], {autoAlpha:0, delay:d})
    return tl;
}

//Frame Two
function frameTwoVariantA(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-1_image1-src_728x90').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "6px 298px 6px 87px";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    let theImage1Position = 437;

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F2') === true) {
        theBound.style.padding = "6px 234px 6px 150px";
        theImage1Position = 494;
    }

    tl.set([".F2", ".t_logo"], { autoAlpha: 1 })
        .set(['#F2-1_copy-input_728x90','#F2-2_copy-input_728x90','#F2-3_copy-input_728x90','#F2-4_copy-input_728x90'], {y: 20, opacity: 0})
        .set(["#F2-1_image2-src_728x90"], {width: 84, height: 90, y: 0, x: 528, opacity: 0})
        .to(["#F2-1_image2-src_728x90"], { duration: 0.8, x: theImage1Position, opacity: 1, ease: "Power2.easeOut" }, "prod")
        .to(["#F2-1_copy-input_728x90", "#F2-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#F2-3_copy-input_728x90", "#F2-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(["#F2-1_largerLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .from(["#F2-1_frameLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
  return tl;
}
function frameTwoVariantB(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-1_image2-src_728x90').style.display = 'none';
    document.querySelector('#F2-1_image1-src_728x90').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "7px 230px 12px 109px";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F2') === true) {
        theBound.style.padding = "7px 169px 12px 169px";
    }

    tl.set([".F2", ".t_logo"], { autoAlpha: 1 })
        .set(['#F2-1_copy-input_728x90','#F2-2_copy-input_728x90','#F2-3_copy-input_728x90','#F2-4_copy-input_728x90'], {y: 20, opacity: 0})
        .to(["#F2-1_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.2")
        .to(["#F2-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#F2-3_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#F2-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(["#F2-1_largerLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .from(["#F2-1_frameLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantC(){
    var d = 2.5;
    var tl = gsap.timeline();

    let legal = document.getElementById("F2-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    document.querySelector('#F2-copy').style.display = 'none';
    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "77px 294px 3px 94px";

    let theImage1Position = 435;

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F2') === true) {
        theBound.style.padding = "77px 302px 3px 181px";
        theImage1Position = 420;
    }

    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set(['#F2-1_image2-src_728x90'], {width: 84, height: 90, x: 550, y: -3, opacity: 0})
        .set(['#F2-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-145, opacity: 0})
        .set(['#F2-1_frameLegal-input_728x90'], {opacity: 0})
        .to(['#F2-1_image2-src_728x90'], 0.8,  {x: theImage1Position, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_image1-src_728x90'], 0.8, { x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_728x90'], lglTm, {opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantD(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-1_image2-src_728x90').style.display = 'none';
    document.querySelector('#F2-copy').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "76px 222px 3px 62px";

    let legal = document.getElementById("F2-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F2') === true) {
        theBound.style.padding = "76px 142px 3px 142px";
    }

    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set(['#F2-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-75, opacity: 0})
        .to(['#F2-1_image1-src_728x90'], 0.8, {x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantE(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector("#F2-1_image1-src_728x90").style.display = "none";

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "6px 214px 6px 170px";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    let theImage1Position = 85;

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F2') === true) {
        theBound.style.padding = "6px 145px 6px 239px";
        theImage1Position = 145;
    }

    tl.set([".F2", ".t_logo"], { autoAlpha: 1 })
        .set(['#F2-1_copy-input_728x90','#F2-2_copy-input_728x90','#F2-3_copy-input_728x90','#F2-4_copy-input_728x90'], {y: 20, opacity: 0})
        .set(["#F2-1_image2-src_728x90"], {width: 84, height: 90, y: 0, x: 0, opacity: 0})
        .to(["#F2-1_image2-src_728x90"], { duration: 0.8, x: theImage1Position, opacity: 1, ease: "Power2.easeOut" }, "prod")
        .to(["#F2-1_copy-input_728x90", "#F2-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#F2-3_copy-input_728x90", "#F2-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(["#F2-1_largerLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .from(["#F2-1_frameLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantF(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-copy').style.display = 'none';
    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "76px 222px 6px 166px";

    let legal = document.getElementById("F2-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    let theImage1Position = 83;

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F2') === true) {
        theBound.style.padding = "76px 145px 6px 288px";
        theImage1Position = 211;
    }

    tl
        .set(['.F2', '.t_logo'], {autoAlpha:1})
        .set(['#F2-1_image2-src_728x90'], {width: 84, height: 90, x: 0, y: 0, opacity: 0})
        .set(['#F2-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x: 160, opacity: 0})
        .to(['#F2-1_image2-src_728x90'], 0.8,  {x: theImage1Position, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F2-1_image1-src_728x90'], 0.8, { x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_728x90'], lglTm, {opacity:0}, '-=0.2')
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantG(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "12px 209px 12px 354px";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F2') === true) {
        theBound.style.padding = "12px 74px 12px 342px";
    }

    tl.set([".F2", ".t_logo"], { autoAlpha: 1 })
        .set(['#F2-1_copy-input_728x90','#F2-2_copy-input_728x90','#F2-3_copy-input_728x90','#F2-4_copy-input_728x90'], {y: 20, opacity: 0})
        .set(["#F2-1_image2-src_728x90"], {width: 84, height: 90, y: 0, x: 0, opacity: 0})
        .set(['#F2-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:145, opacity: 0})
        .to(["#F2-1_image2-src_728x90"], { duration: 0.8, x: 83, opacity: 1, ease: "Power2.easeOut" }, "prod")
        .to(['#F2-1_image1-src_728x90'], 0.8, { x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(["#F2-1_copy-input_728x90", "#F2-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#F2-3_copy-input_728x90", "#F2-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(["#F2-1_largerLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .from(["#F2-1_frameLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
  return tl;
}
function frameTwoVariantH(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "12px 305px 12px 258px";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    let theImage1Position = 435;

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F2') === true) {
        theBound.style.padding = "12px 176px 12px 240px";
        theImage1Position = 552;
    }

    tl.set([".F2", ".t_logo"], { autoAlpha: 1 })
        .set(['#F2-1_copy-input_728x90','#F2-2_copy-input_728x90','#F2-3_copy-input_728x90','#F2-4_copy-input_728x90'], {y: 20, opacity: 0})
        .set(["#F2-1_image2-src_728x90"], {width: 84, height: 90, y: 0, x: 535, opacity: 0})
        .set(['#F2-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x: -145, opacity: 0})
        .to(['#F2-1_image1-src_728x90'], 0.8, { x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(["#F2-1_copy-input_728x90", "#F2-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.1")
        .to(["#F2-3_copy-input_728x90", "#F2-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .from(["#F2-1_largerLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .to(["#F2-1_image2-src_728x90"], { duration: 0.8, x: theImage1Position, opacity: 1, ease: "Power2.easeOut" }, "=0.2")
        .from(["#F2-1_frameLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
  return tl;
}

// Lifestyle
function frameTwoVariantI(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F2-1_image2-src_728x90").style.display = "none";
    document.querySelector("#F2-1_image1-src_728x90").style.display = "none";

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    theBox.style.padding = "5px 0 5px 0";
    let theBound = document.getElementById("F2-bound");
    theBound.style.height = "90px";
    theBound.style.width = "330px";
    theBound.style.left = "55px";
    theBound.style.position = "relative";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    tl.set([".F2", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F2-1_copy-input_728x90", "#F2-2_copy-input_728x90", "#F2-3_copy-input_728x90", "#F2-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(["#F2-1_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.1")
        .to(["#F2-2_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F2-3_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F2-4_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F2-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantJ(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F2-1_image2-src_728x90").style.display = "none";
    document.querySelector("#F2-copy").style.display = "none";

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.height = "15px";
    theBound.style.width = "147px";
    theBound.style.left = "115px";
    theBound.style.top = "74px";
    theBound.style.position = "relative";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    if (legalVisible('F2') === true) {
        legal.style.backgroundColor = "unset";
    }

    tl.set([".F2", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F2-1_image1-src_728x90"], {width: 728, height: 90, x: 0, y: -70, opacity: 0})
        .to(["#F2-1_image1-src_728x90"],  0.9, { x: 0, y:0, opacity: 1, ease: "Power2.easeOut"  }, "prod")
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F2-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantK(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F2-1_image2-src_728x90").style.display = "none";

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "6px 359px 6px 184px";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    tl.set([".F2", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F2-1_copy-input_728x90", "#F2-2_copy-input_728x90", "#F2-3_copy-input_728x90", "#F2-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .set(["#F2-1_image1-src_728x90"], {width: 728, height: 90, x: -70, y: 0, opacity: 0})
        .to(["#F2-1_image1-src_728x90"],  0.9, { x: 0, opacity: 1, ease: "Power2.easeOut"  }, "prod")
        .to(["#F2-1_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F2-2_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "<")
        .to(["#F2-3_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F2-4_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "<")
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F2-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantL(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F2-1_image2-src_728x90").style.display = "none";
    document.querySelector("#F2-1_image1-src_728x90").style.display = "none";


    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "6px 170px 6px 271px";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F2') === true) {
        theBound.style.padding = "6px 62px 6px 311px";
    }

    tl.set([".F2", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F2-1_copy-input_728x90", "#F2-2_copy-input_728x90", "#F2-3_copy-input_728x90", "#F2-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(["#F2-1_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.1")
        .to(["#F2-2_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F2-3_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F2-4_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F2-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantM(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F2-1_image2-src_728x90").style.display = "none";
    document.querySelector("#F2-1_image1-src_728x90").style.display = "none";

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    theBox.style.padding = "6px 364px 6px 55px";
    let theBound = document.getElementById("F2-bound");
    theBound.style.height = "90px";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    tl.set([".F2", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F2-1_copy-input_728x90", "#F2-2_copy-input_728x90", "#F2-3_copy-input_728x90", "#F2-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(["#F2-1_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.1")
        .to(["#F2-2_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F2-3_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F2-4_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F2-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantN(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F2-1_image2-src_728x90").style.display = "none";
    document.querySelector("#F2-1_image1-src_728x90").style.display = "none";

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    theBox.style.padding = "0px 295px 0 127px";
    let theBound = document.getElementById("F2-bound");
    theBound.style.zIndex = "1";
    theBound.style.backgroundColor = "rgb(226, 0, 116, 0.8)";
    theBound.style.height = "173px";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F2') === true) {
        theBox.style.padding = "0px 151px 0 151px";
    }

    tl.set([".F2", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F2-1_copy-input_728x90", "#F2-2_copy-input_728x90", "#F2-3_copy-input_728x90", "#F2-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(["#F2-1_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.1")
        .to(["#F2-2_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F2-3_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F2-4_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F2-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantP(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F2-1_image2-src_728x90').style.display = 'none';
    document.querySelector('#F2-copy').style.display = 'none';

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "76px 222px 3px 62px";

    let legal = document.getElementById("F2-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F2') === true) {
        theBound.style.padding = "76px 142px 3px 142px";
    }

    tl
        .set(['.F2'], {autoAlpha:1})
        .set(['#F2-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-75, opacity: 0})
        .to(['#F2-1_image1-src_728x90'], 0.8, {x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F2-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .from(['#F2-1_frameLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .set(['.F2'], {autoAlpha:0, delay:d})
    return tl;
}
function frameTwoVariantQ(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F2-1_image2-src_728x90").style.display = "none";

    let theBox = document.getElementById("F2-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F2-bound");
    theBound.style.padding = "76px 170px 6px 271px";
    let largerLegalCopy = document.getElementById("F2-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F2-frameLegal");
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F2') === true) {
        theBound.style.padding = "76px 62px 6px 311px";
    }

    tl.set([".F2", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F2-1_copy-input_728x90", "#F2-2_copy-input_728x90", "#F2-3_copy-input_728x90", "#F2-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .set(['#F2-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-75, opacity: 0})
        .to(['#F2-1_image1-src_728x90'], 0.8, {x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F2-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F2-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F2', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

//Frame Three
function frameThreeVariantA(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-1_image1-src_728x90').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "6px 298px 6px 87px";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    let theImage1Position = 437;

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F3') === true) {
        theBound.style.padding = "6px 234px 6px 150px";
        theImage1Position = 494;
    }

    tl.set([".F3", ".t_logo"], { autoAlpha: 1 })
        .set(['#F3-1_copy-input_728x90','#F3-2_copy-input_728x90','#F3-3_copy-input_728x90','#F3-4_copy-input_728x90'], {y: 20, opacity: 0})
        .set(["#F3-1_image2-src_728x90"], {width: 84, height: 90, y: 0, x: 528, opacity: 0})
        .to(["#F3-1_image2-src_728x90"], { duration: 0.8, x: theImage1Position, opacity: 1, ease: "Power2.easeOut" }, "prod")
        .to(["#F3-1_copy-input_728x90", "#F3-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#F3-3_copy-input_728x90", "#F3-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(["#F3-1_largerLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .from(["#F3-1_frameLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantB(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-1_image2-src_728x90').style.display = 'none';
    document.querySelector('#F3-1_image1-src_728x90').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "7px 230px 12px 109px";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F3') === true) {
        theBound.style.padding = "7px 169px 12px 169px";
    }

    tl.set([".F3", ".t_logo"], { autoAlpha: 1 })
        .set(['#F3-1_copy-input_728x90','#F3-2_copy-input_728x90','#F3-3_copy-input_728x90','#F3-4_copy-input_728x90'], {y: 20, opacity: 0})
        .to(["#F3-1_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.2")
        .to(["#F3-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#F3-3_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#F3-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(["#F3-1_largerLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .from(["#F3-1_frameLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantC(){
    var d = 2.5;
    var tl = gsap.timeline();

    let legal = document.getElementById("F3-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    document.querySelector('#F3-copy').style.display = 'none';
    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "77px 294px 3px 94px";

    let theImage1Position = 435;

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F3') === true) {
        theBound.style.padding = "77px 302px 3px 181px";
        theImage1Position = 420;
    }

    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set(['#F3-1_image2-src_728x90'], {width: 84, height: 90, x: 550, y: -3, opacity: 0})
        .set(['#F3-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-145, opacity: 0})
        .set(['#F3-1_frameLegal-input_728x90'], {opacity: 0})
        .to(['#F3-1_image2-src_728x90'], 0.8,  {x: theImage1Position, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_image1-src_728x90'], 0.8, { x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_728x90'], lglTm, {opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantD(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-1_image2-src_728x90').style.display = 'none';
    document.querySelector('#F3-copy').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "76px 222px 3px 62px";

    let legal = document.getElementById("F3-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F3') === true) {
        theBound.style.padding = "76px 142px 3px 142px";
    }

    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set(['#F3-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-75, opacity: 0})
        .to(['#F3-1_image1-src_728x90'], 0.8, {x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantE(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector("#F3-1_image1-src_728x90").style.display = "none";

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "6px 214px 6px 170px";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    let theImage1Position = 85;

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F3') === true) {
        theBound.style.padding = "6px 145px 6px 239px";
        theImage1Position = 145;
    }

    tl.set([".F3", ".t_logo"], { autoAlpha: 1 })
        .set(['#F3-1_copy-input_728x90','#F3-2_copy-input_728x90','#F3-3_copy-input_728x90','#F3-4_copy-input_728x90'], {y: 20, opacity: 0})
        .set(["#F3-1_image2-src_728x90"], {width: 84, height: 90, y: 0, x: 0, opacity: 0})
        .to(["#F3-1_image2-src_728x90"], { duration: 0.8, x: theImage1Position, opacity: 1, ease: "Power2.easeOut" }, "prod")
        .to(["#F3-1_copy-input_728x90", "#F3-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#F3-3_copy-input_728x90", "#F3-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(["#F3-1_largerLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .from(["#F3-1_frameLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantF(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-copy').style.display = 'none';
    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "76px 222px 6px 166px";

    let legal = document.getElementById("F3-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    let theImage1Position = 83;

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F3') === true) {
        theBound.style.padding = "76px 145px 6px 288px";
        theImage1Position = 211;
    }

    tl
        .set(['.F3', '.t_logo'], {autoAlpha:1})
        .set(['#F3-1_image2-src_728x90'], {width: 84, height: 90, x: 0, y: 0, opacity: 0})
        .set(['#F3-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x: 160, opacity: 0})
        .to(['#F3-1_image2-src_728x90'], 0.8,  {x: theImage1Position, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#F3-1_image1-src_728x90'], 0.8, { x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_728x90'], lglTm, {opacity:0}, '-=0.2')
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantG(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "12px 209px 12px 354px";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F3') === true) {
        theBound.style.padding = "12px 74px 12px 342px";
    }

    tl.set([".F3", ".t_logo"], { autoAlpha: 1 })
        .set(['#F3-1_copy-input_728x90','#F3-2_copy-input_728x90','#F3-3_copy-input_728x90','#F3-4_copy-input_728x90'], {y: 20, opacity: 0})
        .set(["#F3-1_image2-src_728x90"], {width: 84, height: 90, y: 0, x: 0, opacity: 0})
        .set(['#F3-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:145, opacity: 0})
        .to(["#F3-1_image2-src_728x90"], { duration: 0.8, x: 83, opacity: 1, ease: "Power2.easeOut" }, "prod")
        .to(['#F3-1_image1-src_728x90'], 0.8, { x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(["#F3-1_copy-input_728x90", "#F3-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#F3-3_copy-input_728x90", "#F3-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(["#F3-1_largerLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .from(["#F3-1_frameLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantH(){
    var d = 2.5;
    var tl = gsap.timeline();

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "12px 305px 12px 258px";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    let theImage1Position = 435;

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F3') === true) {
        theBound.style.padding = "12px 176px 12px 240px";
        theImage1Position = 552;
    }

    tl.set([".F3", ".t_logo"], { autoAlpha: 1 })
        .set(['#F3-1_copy-input_728x90','#F3-2_copy-input_728x90','#F3-3_copy-input_728x90','#F3-4_copy-input_728x90'], {y: 20, opacity: 0})
        .set(["#F3-1_image2-src_728x90"], {width: 84, height: 90, y: 0, x: 535, opacity: 0})
        .set(['#F3-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x: -145, opacity: 0})
        .to(['#F3-1_image1-src_728x90'], 0.8, { x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(["#F3-1_copy-input_728x90", "#F3-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.1")
        .to(["#F3-3_copy-input_728x90", "#F3-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .from(["#F3-1_largerLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .to(["#F3-1_image2-src_728x90"], { duration: 0.8, x: theImage1Position, opacity: 1, ease: "Power2.easeOut" }, "=0.2")
        .from(["#F3-1_frameLegal-input_728x90"], { duration: lglTm, opacity: 0 }, "-=0.2")
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

// Lifestyle
function frameThreeVariantI(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F3-1_image2-src_728x90").style.display = "none";
    document.querySelector("#F3-1_image1-src_728x90").style.display = "none";

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    theBox.style.padding = "5px 0 5px 0";
    let theBound = document.getElementById("F3-bound");
    theBound.style.height = "90px";
    theBound.style.width = "330px";
    theBound.style.left = "55px";
    theBound.style.position = "relative";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    tl.set([".F3", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F3-1_copy-input_728x90", "#F3-2_copy-input_728x90", "#F3-3_copy-input_728x90", "#F3-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(["#F3-1_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.1")
        .to(["#F3-2_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F3-3_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F3-4_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F3-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantJ(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F3-1_image2-src_728x90").style.display = "none";
    document.querySelector("#F3-copy").style.display = "none";

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.height = "15px";
    theBound.style.width = "147px";
    theBound.style.left = "115px";
    theBound.style.top = "74px";
    theBound.style.position = "relative";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    if (legalVisible('F3') === true) {
        legal.style.backgroundColor = "unset";
    }

    tl.set([".F3", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F3-1_image1-src_728x90"], {width: 728, height: 90, x: 0, y: -70, opacity: 0})
        .to(["#F3-1_image1-src_728x90"],  0.9, { x: 0, y:0, opacity: 1, ease: "Power2.easeOut"  }, "prod")
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F3-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantK(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F3-1_image2-src_728x90").style.display = "none";

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "6px 359px 6px 184px";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    tl.set([".F3", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F3-1_copy-input_728x90", "#F3-2_copy-input_728x90", "#F3-3_copy-input_728x90", "#F3-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .set(["#F3-1_image1-src_728x90"], {width: 728, height: 90, x: -70, y: 0, opacity: 0})
        .to(["#F3-1_image1-src_728x90"],  0.9, { x: 0, opacity: 1, ease: "Power2.easeOut"  }, "prod")
        .to(["#F3-1_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F3-2_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "<")
        .to(["#F3-3_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F3-4_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "<")
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F3-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantL(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F3-1_image2-src_728x90").style.display = "none";
    document.querySelector("#F3-1_image1-src_728x90").style.display = "none";


    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "6px 170px 6px 271px";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F3') === true) {
        theBound.style.padding = "6px 62px 6px 311px";
    }

    tl.set([".F3", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F3-1_copy-input_728x90", "#F3-2_copy-input_728x90", "#F3-3_copy-input_728x90", "#F3-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(["#F3-1_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.1")
        .to(["#F3-2_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F3-3_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F3-4_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F3-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantM(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F3-1_image2-src_728x90").style.display = "none";
    document.querySelector("#F3-1_image1-src_728x90").style.display = "none";

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    theBox.style.padding = "6px 364px 6px 55px";
    let theBound = document.getElementById("F3-bound");
    theBound.style.height = "90px";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    tl.set([".F3", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F3-1_copy-input_728x90", "#F3-2_copy-input_728x90", "#F3-3_copy-input_728x90", "#F3-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(["#F3-1_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.1")
        .to(["#F3-2_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F3-3_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F3-4_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F3-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantN(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F3-1_image2-src_728x90").style.display = "none";
    document.querySelector("#F3-1_image1-src_728x90").style.display = "none";

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    theBox.style.padding = "0px 295px 0 127px";
    let theBound = document.getElementById("F3-bound");
    theBound.style.zIndex = "1";
    theBound.style.backgroundColor = "rgb(226, 0, 116, 0.8)";
    theBound.style.height = "173px";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F3') === true) {
        theBox.style.padding = "0px 151px 0 151px";
    }

    tl.set([".F3", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F3-1_copy-input_728x90", "#F3-2_copy-input_728x90", "#F3-3_copy-input_728x90", "#F3-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(["#F3-1_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.1")
        .to(["#F3-2_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F3-3_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#F3-4_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F3-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantP(){
    var d = 2.5;
    var tl = gsap.timeline();

    document.querySelector('#F3-1_image2-src_728x90').style.display = 'none';
    document.querySelector('#F3-copy').style.display = 'none';

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "76px 222px 3px 62px";

    let legal = document.getElementById("F3-frameLegal");
    legal.style.position = "relative";
    legal.style.width = "100%";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "unset";
    legal.style.paddingLeft = "526px";
    legal.style.paddingRight = "5px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F3') === true) {
        theBound.style.padding = "76px 142px 3px 142px";
    }

    tl
        .set(['.F3'], {autoAlpha:1})
        .set(['#F3-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-75, opacity: 0})
        .to(['#F3-1_image1-src_728x90'], 0.8, {x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#F3-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .from(['#F3-1_frameLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .set(['.F3'], {autoAlpha:0, delay:d})
    return tl;
}
function frameThreeVariantQ(){
    var d = 2.5;
    var tl = gsap.timeline({});

    document.querySelector("#F3-1_image2-src_728x90").style.display = "none";

    let theBox = document.getElementById("F3-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("F3-bound");
    theBound.style.padding = "76px 170px 6px 271px";
    let largerLegalCopy = document.getElementById("F3-largerLegal");
    largerLegalCopy.style.order = "3";
    largerLegalCopy.style.bottom = "unset";
    largerLegalCopy.style.position = "relative";
    largerLegalCopy.style.marginTop = "0";
    let legal = document.getElementById("F3-frameLegal");
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.minHeight = "90px";
    legal.style.maxHeight = "90px";
    legal.style.padding = "3px 5px 3px 10px";
    legal.style.display = "flex";
    legal.style.justifyContent = "center";
    legal.style.alignContent = "center";
    legal.style.flexDirection = "column";

    // document.getElementById('F2-1_frameLegal-input_728x90').style.display = 'none';
    if (legalVisible('F3') === true) {
        theBound.style.padding = "76px 62px 6px 311px";
    }

    tl.set([".F3", ".t_logo"], { autoAlpha: 4 })
        .set([legal], {opacity:0})
        .set(["#F3-1_copy-input_728x90", "#F3-2_copy-input_728x90", "#F3-3_copy-input_728x90", "#F3-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .set(['#F3-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-75, opacity: 0})
        .to(['#F3-1_image1-src_728x90'], 0.8, {x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to([largerLegalCopy], {duration: txtTm, opacity: 1, ease: 'Power2.easeOut'}, '-=0.2')
        .from([legal], {duration: lglTm, opacity:0}, '-=0.2')
        .from(['#F3-1_largerLegal-input_728x90'], lglTm, { opacity:0}, '-=0.2')
        .from(["#F3-1_frameLegal-input_728x90"], lglTm, { opacity: 0 }, "-=0.2")
        .set(['.F3', '.t_logo'], {autoAlpha:0, delay:d})
    return tl;
}

//End Frame
function endFrameVariantA(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.getElementById('EF-1_image1-src_728x90').style.display = 'none';
    document.getElementById('EF-1_image2-src_728x90').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.padding = "7px 209px 12px 98px";
    let ctaBound = document.getElementById("CTA-bound");
    let legal = document.getElementById("EF-frameLegal");
    legal.style.justifyContent = "center";

    // document.getElementById('EF-1_frameLegal-input_728x90').style.display = 'none';
    // ctaPlacement('EF');
    legalVisible('EF');

    // document.getElementById('CTA-1_copy-input_728x90').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_frameLegal-input_728x90'], {opacity: 0})
        .set(["#EF-1_copy-input_728x90","#EF-2_copy-input_728x90","#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(["#EF-1_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.2")
        .to(["#EF-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#EF-3_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#EF-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(['#EF-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .to(['#EF-1_frameLegal-input_728x90'], lglTm, {opacity:1}, '-=0.2')
    return tl;
}
function endFrameVariantB(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.getElementById('EF-1_image1-src_728x90').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.padding = "11px 290px 12px 107px";
    let ctaBound = document.getElementById("CTA-bound");
    let legal = document.getElementById("EF-frameLegal");
    legal.style.justifyContent = "center";

    // document.getElementById('EF-1_frameLegal-input_728x90').style.display = 'none';
    legalVisible('EF');

    // document.getElementById('CTA-1_copy-input_728x90').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_image2-src_728x90'], {width: 84, height: 90, x: 550, y: 0, opacity: 0})
        .set(['#EF-1_frameLegal-input_728x90'], {opacity: 0})
        .set(["#EF-1_copy-input_728x90","#EF-2_copy-input_728x90","#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(['#EF-1_image2-src_728x90'], 0.8,  {x:434, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(["#EF-1_copy-input_728x90", "#EF-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(['#EF-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .to(['#EF-1_frameLegal-input_728x90'], lglTm, {opacity:1}, '-=0.2')
    return tl;
}
function endFrameVariantC(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector('#EF-copy').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.padding = "81px 293px 12px 98px";
    let ctaBound = document.getElementById("CTA-bound");
    let legal = document.getElementById("EF-frameLegal");
    legal.style.justifyContent = "center";

    // document.getElementById('EF-1_frameLegal-input_728x90').style.display = 'none';
    legalVisible('EF');

    // document.getElementById('CTA-1_copy-input_728x90').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_image2-src_728x90'], {width: 84, height: 90, x: 550, y: 0, opacity: 0})
        .set(['#EF-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x: -75, opacity: 0})
        .set(['#EF-1_frameLegal-input_728x90'], {opacity: 0})
        .to(['#EF-1_image2-src_728x90'], 0.8,  {x: 435, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_image1-src_728x90'], 0.8, { x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .to(['#EF-1_frameLegal-input_728x90'], lglTm, {opacity:1}, '-=0.2')
    return tl;
}
function endFrameVariantD(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.padding = "12px 290px 12px 267px";
    let ctaBound = document.getElementById("CTA-bound");
    let legal = document.getElementById("EF-frameLegal");
    legal.style.justifyContent = "center";

    // document.getElementById('EF-1_frameLegal-input_728x90').style.display = 'none';
    legalVisible('EF');

    // document.getElementById('CTA-1_copy-input_728x90').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_image1-src_728x90'], {width: 728, height: 90, x: 0, y: -100, opacity: 0})
        .set(['#EF-1_image2-src_728x90'], {width: 84, height: 90, x: 550, y: 0, opacity: 0})
        .set(['#EF-1_frameLegal-input_728x90'], {opacity: 0})
        .set(["#EF-1_copy-input_728x90","#EF-2_copy-input_728x90","#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(['#EF-1_image1-src_728x90'], 0.8,  {x: 0, y:0,  opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(["#EF-1_copy-input_728x90", "#EF-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(['#EF-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .to(['#EF-1_image2-src_728x90'], 0.8,  {x:434, opacity:1, ease: 'Power2.easeOut'}, '=0.2')
        .to(['#EF-1_frameLegal-input_728x90'], lglTm, {opacity:1}, '-=0.2')
    return tl;
}
function endFrameVariantE(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector('#EF-1_image2-src_728x90').style.display = 'none';
    document.querySelector('#EF-copy').style.display = 'none';
    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.padding = "81px 213px 12px 105px";
    let ctaBound = document.getElementById("CTA-bound");
    let legal = document.getElementById("EF-frameLegal");
    legal.style.justifyContent = "center";

    // document.getElementById('EF-1_frameLegal-input_728x90').style.display = 'none';
    legalVisible('EF');

    // document.getElementById('CTA-1_copy-input_728x90').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-75, opacity: 0})
        .to(['#EF-1_image1-src_728x90'], 0.8, {x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
    return tl;
}
function endFrameVariantF(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.getElementById('EF-1_image1-src_728x90').style.display = 'none';

    let theBox = document.getElementById("EF-box");
    theBox.style.height = "90px";
    theBox.style.padding = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.padding = "10px 214px 12px 183px";
    let ctaBound = document.getElementById("CTA-bound");
    let legal = document.getElementById("EF-frameLegal");
    legal.style.justifyContent = "center";

    // document.getElementById('EF-1_frameLegal-input_728x90').style.display = 'none';
    legalVisible('EF');

    // document.getElementById('CTA-1_copy-input_728x90').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_image2-src_728x90'], {width: 84, height: 90, x: 0, y: 0, opacity: 0})
        .set(['#EF-1_frameLegal-input_728x90'], {opacity: 0})
        .set(["#EF-1_copy-input_728x90","#EF-2_copy-input_728x90","#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(['#EF-1_image2-src_728x90'], 0.8,  {x: 100, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(["#EF-1_copy-input_728x90", "#EF-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(['#EF-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .to(['#EF-1_frameLegal-input_728x90'], lglTm, {opacity:1}, '-=0.2')
    return tl;
}
function endFrameVariantG(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector('#EF-copy').style.display = 'none';
    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.padding = "82px 213px 12px 168px";
    let ctaBound = document.getElementById("CTA-bound");
    let legal = document.getElementById("EF-frameLegal");
    legal.style.justifyContent = "center";

    // document.getElementById('EF-1_frameLegal-input_728x90').style.display = 'none';
    legalVisible('EF');

    // document.getElementById('CTA-1_copy-input_728x90').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_image2-src_728x90'], {width: 84, height: 90, x: 0, y: 0, opacity: 0})
        .set(['#EF-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x: 150, opacity: 0})
        .set(['#EF-1_frameLegal-input_728x90'], {opacity: 0})
        .to(['#EF-1_image2-src_728x90'], 0.8,  {x: 100, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_image1-src_728x90'], 0.8, { x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .to(['#EF-1_frameLegal-input_728x90'], lglTm, {opacity:1}, '-=0.2')
    return tl;
}
function endFrameVariantH(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.padding = "13px 200px 12px 368px";
    let ctaBound = document.getElementById("CTA-bound");
    let legal = document.getElementById("EF-frameLegal");
    legal.style.justifyContent = "center";

    // document.getElementById('EF-1_frameLegal-input_728x90').style.display = 'none';
    legalVisible('EF');

    // document.getElementById('CTA-1_copy-input_728x90').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set(['#EF-1_image1-src_728x90'], {width: 728, height: 90, x: 350, y: 0, opacity: 0})
        .set(['#EF-1_image2-src_728x90'], {width: 84, height: 90, x: 0, y: 0, opacity: 0})
        .set(['#EF-1_frameLegal-input_728x90'], {opacity: 0})
        .set(["#EF-1_copy-input_728x90","#EF-2_copy-input_728x90","#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(['#EF-1_image1-src_728x90'], 0.8,  {x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(['#EF-1_image2-src_728x90'], 0.8,  {x: 100, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(["#EF-1_copy-input_728x90", "#EF-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .to(["#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(['#EF-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .to(['#EF-1_frameLegal-input_728x90'], lglTm, {opacity:1}, '-=0.2')
    return tl;
}

// Lifestyle
function endFrameVariantI() {
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector("#EF-1_image2-src_728x90").style.display = "none";
    document.querySelector("#EF-1_image1-src_728x90").style.display = "none";

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    // theBox.style.padding = "5px 0 5px 0";
    theBox.style.position = "relative";
    let theBound = document.getElementById("EF-bound");
    theBound.style.height = "70px";
    theBound.style.width = "245px";
    theBound.style.left = "119px";
    theBound.style.top = "12px";
    theBound.style.position = "relative";
    let largerLegalCopy = document.getElementById("EF-largerLegal");
    let legal = document.getElementById("EF-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.padding = "37px 5px 3px 10px";
    legal.style.justifyContent = "flex-start";
    legal.style.zIndex = "1";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.left = "580px";
    ctaBound.style.paddingTop = "0px";
    legal.style.justifyContent = "center";

    // document.getElementById('EF-1_frameLegal-input_728x90').style.display = 'none';
    legalVisible('EF');

    // document.getElementById('CTA-1_copy-input_728x90').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set([legal, '#EF-1_frameLegal-input_728x90'], {opacity: 0})
        .set(["#EF-1_copy-input_728x90", "#EF-2_copy-input_728x90","#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .to(["#EF-1_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.1")
        .to(["#EF-2_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#EF-3_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#EF-4_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .from(['#EF-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .to([legal, '#EF-1_frameLegal-input_728x90'], lglTm, {opacity:1}, '-=0.2')
    return tl;

}
function endFrameVariantJ() {
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector("#EF-1_image2-src_728x90").style.display = "none";

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    // theBox.style.padding = "5px 0 5px 0";
    theBox.style.position = "relative";
    let theBound = document.getElementById("EF-bound");
    theBound.style.height = "15px";
    theBound.style.width = "140px";
    theBound.style.left = "147px";
    theBound.style.top = "74px";
    theBound.style.position = "relative";
    let largerLegalCopy = document.getElementById("EF-largerLegal");
    let legal = document.getElementById("EF-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.padding = "37px 5px 3px 10px";
    legal.style.justifyContent = "flex-start";
    legal.style.zIndex = "1";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.left = "580px";
    ctaBound.style.paddingTop = "0px";
    legal.style.justifyContent = "center";

    // document.getElementById('EF-1_frameLegal-input_728x90').style.display = 'none';
    legalVisible('EF');

    // document.getElementById('CTA-1_copy-input_728x90').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set([legal, '#EF-1_frameLegal-input_728x90'], {opacity: 0})
        .set(["#EF-1_copy-input_728x90", "#EF-2_copy-input_728x90","#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .set(['#EF-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-70, opacity: 0})
        .to(['#EF-1_image1-src_728x90'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .to([legal, '#EF-1_frameLegal-input_728x90'], lglTm, {opacity:1}, '-=0.2')
    return tl;

}
function endFrameVariantK() {
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector("#EF-1_image2-src_728x90").style.display = "none";

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    // theBox.style.padding = "5px 0 14px 0";
    theBox.style.position = "relative";
    let theBound = document.getElementById("EF-bound");
    theBound.style.height = "71px";
    theBound.style.width = "159px";
    theBound.style.left = "210px";
    theBound.style.top = "5px";
    theBound.style.position = "relative";
    let largerLegalCopy = document.getElementById("EF-largerLegal");
    let legal = document.getElementById("EF-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.padding = "37px 5px 3px 10px";
    legal.style.justifyContent = "flex-start";
    legal.style.zIndex = "1";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.left = "580px";
    ctaBound.style.paddingTop = "0px";
    legal.style.justifyContent = "center";

    // document.getElementById('EF-1_frameLegal-input_728x90').style.display = 'none';
    legalVisible('EF');

    // document.getElementById('CTA-1_copy-input_728x90').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo'], {autoAlpha:1})
        .set([legal, '#EF-1_frameLegal-input_728x90'], {opacity: 0})
        .set(["#EF-1_copy-input_728x90", "#EF-2_copy-input_728x90","#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .set(['#EF-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-70, opacity: 0})
        .to(['#EF-1_image1-src_728x90'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(["#EF-1_copy-input_728x90", "#EF-2_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.2")
        .to(["#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { duration: txtTm, y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.2")
        .from(['#EF-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .to([legal, '#EF-1_frameLegal-input_728x90'], lglTm, {opacity:1}, '-=0.2')
    return tl;

}
function endFrameVariantL() {
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector("#EF-1_image2-src_728x90").style.display = "none";

    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    // theBox.style.padding = "5px 0 5px 0";
    theBox.style.position = "relative";
    let theBound = document.getElementById("EF-bound");
    theBound.style.height = "80px";
    theBound.style.width = "261px"
    theBound.style.left = "108px";
    theBound.style.top = "5px";
    theBound.style.position = "relative";
    let largerLegalCopy = document.getElementById("EF-largerLegal");
    let legal = document.getElementById("EF-frameLegal");
    legal.style.backgroundColor = "#e20074";
    legal.style.position = "absolute";
    legal.style.top = "0";
    legal.style.right = "0";
    legal.style.width = "158px";
    legal.style.padding = "37px 5px 3px 10px";
    legal.style.justifyContent = "flex-start";
    legal.style.zIndex = "1";
    let ctaBound = document.getElementById("CTA-bound");
    ctaBound.style.left = "580px";
    ctaBound.style.paddingTop = "0px";
    legal.style.justifyContent = "center";

    // document.getElementById('EF-1_frameLegal-input_728x90').style.display = 'none';
    legalVisible('EF');

    // document.getElementById('CTA-1_copy-input_728x90').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF', '.t-mobile_logo-mag'], {autoAlpha:1})
        .set([legal, '#EF-1_frameLegal-input_728x90'], {opacity: 0})
        .set(["#EF-1_copy-input_728x90", "#EF-2_copy-input_728x90","#EF-3_copy-input_728x90", "#EF-4_copy-input_728x90"], { y: 20, opacity: 0 })
        .set(['#EF-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:30, opacity: 0})
        .to(['#EF-1_image1-src_728x90'], {duration: 0.8, x:0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .to(["#EF-1_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "=0.1")
        .to(["#EF-2_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#EF-3_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .to(["#EF-4_copy-input_728x90"], txtTm, { y: 0, opacity: 1, ease: "Power2.easeOut" }, "-=0.1")
        .from(['#EF-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .to([legal, '#EF-1_frameLegal-input_728x90'], lglTm, {opacity:1}, '-=0.2')
    return tl;

}
function endFrameVariantM(){
    var d = 2.5;
    var tl = gsap.timeline({onComplete:ctaAnimation});

    document.querySelector('#EF-1_image2-src_728x90').style.display = 'none';
    document.querySelector('#EF-copy').style.display = 'none';
    let theBox = document.getElementById("EF-box");
    theBox.style.justifyContent = "unset";
    let theBound = document.getElementById("EF-bound");
    theBound.style.padding = "81px 213px 12px 105px";
    let ctaBound = document.getElementById("CTA-bound");
    let legal = document.getElementById("EF-frameLegal");
    legal.style.justifyContent = "center";

    // document.getElementById('EF-1_frameLegal-input_728x90').style.display = 'none';
    legalVisible('EF');

    // document.getElementById('CTA-1_copy-input_728x90').style.display = 'none';
    if (ctaVisible('EF') === true) {
        ctaBound.style.display = "none";
    }

    tl
        .set(['.EF'], {autoAlpha:1})
        .set(['#EF-1_image1-src_728x90'], {width: 728, height: 90, y: 0, x:-75, opacity: 0})
        .to(['#EF-1_image1-src_728x90'], 0.8, {x: 0, opacity:1, ease: 'Power2.easeOut'}, 'prod')
        .from(['#EF-1_largerLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
        .from(['#EF-1_frameLegal-input_728x90'], lglTm,{ opacity:0}, '-=0.2')
    return tl;
}


function ctaAnimation () {
    var tl = gsap.timeline({});
    tl.set([".CTA"], {autoAlpha:1}).from(["#CTA-1_copy-input_728x90"],  0.4, {rotationX:90, transformOrigin:"0 bottom", perspective:400, rotation:0.001, force3D:true}, "cta")
}
function setSlicedLegal(EFfl, slicedLegal){
if(EFfl.includes('Ver términos')){elById('EF-1_frameLegal-input_728x90').innerHTML = fixHtml(slicedLegal) + "..." + '<a><u>Ver términos.</u></a>'; addLegalEvents();}
else if(EFfl.includes('See Terms')){elById('EF-1_frameLegal-input_728x90').innerHTML = fixHtml(slicedLegal) + "..." + '<a><u>See Terms.</u></a>'; addLegalEvents();}
}
function fixHtml(html){ var div = document.createElement('div'); div.innerHTML = html; return (div.innerHTML); }
function addLegalEvents(){ if(document.querySelectorAll('#EF-1_frameLegal-input_728x90 a').length >= 1){ crtv.legalBut = document.querySelectorAll('#EF-1_frameLegal-input_728x90 a')[0]; crtv.rollOvOn = elById("RO"); crtv.legalBut.addEventListener("mouseover", legalIn); crtv.legalBut.addEventListener("click", legalStay); } }
function legalIn () {gsap.to(["#EF-1_frameLegal-input_728x90 a"], 0.2, {opacity:0}); gsap.set(["#RO"], {pointerEvents:"none"});     gsap.set(["#RO"], {autoAlpha:1, y:0, onComplete:function(){gsap.set(["#RO-arrow"], {y:0, opacity:1}); gsap.from(["#RO-arrow"], 0.5, {y:4, yoyo:true, repeat:2, opacity:0.5}); }});  gsap.from(["#RO"],  0.2, {autoAlpha:0, y:crtv.height}); crtv.legalBut.addEventListener("mouseout", legalOut); }
function legalStay () { gsap.set(["#RO"], {autoAlpha:1, pointerEvents:"auto"}); addClass(crtv.legalBut, "clicked"); crtv.rollOvOn.addEventListener("click", legalOut); if(hasClass(crtv.legalBut, "clicked")){ crtv.legalBut.removeEventListener("mouseout", legalOut); crtv.legalBut.removeEventListener("mouseover", legalIn); } }
function legalOut () {gsap.to(["#EF-1_frameLegal-input_728x90 a"], 0.2, {opacity:1}); gsap.to(["#RO"],  0.2, {autoAlpha:0, y:crtv.height, pointerEvents:"none"}); removeClass(crtv.legalBut, "clicked"); crtv.rollOvOn.removeEventListener("click", legalOut); crtv.legalBut.addEventListener("mouseover", legalIn); crtv.legalBut.addEventListener("mouseout", legalOut); }
function legalVisible(variant) {
    let pbHeight = document.getElementById( variant + '-1_frameLegal-input_728x90').clientHeight;
    // console.log(pbHeight);

    if (variant === 'EF') {
        if (window.getComputedStyle(document.getElementById( variant + '-1_frameLegal-input_728x90')).display !== 'none') {
            let targetCTA = document.getElementById("CTA-bound");
            targetCTA.style.height = 90 - pbHeight + "px";
            targetCTA.style.paddingTop = "0px";
            targetCTA.style.justifyContent = "center";
        }
        else {
            let targetCTA = document.getElementById("CTA-bound");
            targetCTA.style.height = "90px";
            targetCTA.style.paddingTop = "0px";
            targetCTA.style.justifyContent = "center";
        }
    } else {
        if (window.getComputedStyle(document.getElementById(variant + '-1_frameLegal-input_728x90')).display === 'none' || pbHeight === 0) {
            return true;
        }
    }
}
function ctaVisible(variant) {
    let ctaLength = document.getElementById('CTA-1_copy-input_728x90').childNodes.length;
    // console.log(ctaLength);

    if (ctaLength === 0) {
        // console.log("empty cta");
        return true;
    }
}
