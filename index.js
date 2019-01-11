 document.addEventListener('DOMContentLoaded', function(e) {

    // init enterController
    var enterController = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onEnter'
        }
    });

    // init exitController
    var exitController = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // add nav Scene to exit Controller 
    var navScene = new ScrollMagic.Scene({
        triggerElement: '#form',
    })
    navScene.on("enter", () => addNavForm())
    navScene.addTo(exitController)

    // reverse nav Scene 
    var reverseNavScene = new ScrollMagic.Scene({
        triggerElement: '#form',
    })
    reverseNavScene.on("leave", () => removeNavForm())
    reverseNavScene.addTo(exitController)

    // add Scenes to Controller
    var sceneTwo = new ScrollMagic.Scene({
        triggerElement: '#two',
    })
    sceneTwo.on("enter", () => enterMaxims())
    sceneTwo.addTo(enterController)


    // var sceneThree = new ScrollMagic.Scene({
    //     triggerElement: '#three',
    // })
    // sceneThree.on("progress", () => enterPlayer())
    // sceneThree.addTo(enterController)

    var sceneFour = new ScrollMagic.Scene({
        triggerElement: '#four',
    })
    sceneFour.on("enter", () => enterProcess())
    sceneFour.addTo(enterController)

    var sceneFive = new ScrollMagic.Scene({
        triggerElement: '#five',
        offset: 50,
    })
    sceneFive.on("progress", () => enterAbout())  
    sceneFive.addTo(enterController)

    // functions
    function addNavForm() {
        if ( window.innerWidth < 416 ) {
            TweenMax.fromTo(".first", 0, { display: "block" }, { display: "none" })
            TweenMax.fromTo(".second", 0, { opacity: 0 }, { opacity: 1})
            TweenMax.fromTo(".second", 0, { display: "none" }, { display: "block" })
            // TweenMax.fromTo(".third", 0, { display: "block" }, { display: "none" })

        } else {
            TweenMax.fromTo(".second", 1, { opacity: 0 }, { opacity: 1 })
        }
    }

    function removeNavForm() {
        if (window.innerWidth < 416) {
            TweenMax.fromTo(".first", 0, { opacity: 0 }, { opacity: 1})
            TweenMax.fromTo(".first", 0, { display: "none" }, { display: "block" })
            TweenMax.fromTo(".second", 0, { display: "block" }, { display: "none" })
            TweenMax.fromTo(".second", 0, { opacity: 1 }, { opacity: 0 })

        } else {
            TweenMax.fromTo(".second", 1, { opacity: 1 }, { opacity: 0 })
        }
    }

    function enterMaxims() {
        TweenMax.fromTo("#sale", 0.5, { opacity: 0, y: 25 }, { opacity: 1, y:0, delay: 0.5 })
        TweenMax.fromTo("#cash", 0.5, { opacity: 0, y: 25}, { opacity: 1, y: 0, delay: 1 })
        TweenMax.fromTo("#cal", 0.5, { opacity: 0, y: 25 }, { opacity: 1, y:0, delay: 1.5})
    }

    // function enterPlayer() {
    //     // TweenMax.fromTo(".movie-background", 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 1 })
    //     TweenMax.fromTo(".first-card", 0.5, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 0.5 })
    //     TweenMax.fromTo(".second-card", 0.5, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 1 })
    //     TweenMax.fromTo(".third-card", 0.5, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 1.5 })
    // }

    function enterProcess() {
        TweenMax.fromTo("#head-text", 0.5, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 1 })
        TweenMax.fromTo("#first", 0.5, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 1.5 })
        TweenMax.fromTo("#second", 0.5, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 2 })
        TweenMax.fromTo("#third", 0.5, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 2.5})
    }

    function enterAbout() {
        if (window.innerWidth < 400) {
            TweenMax.fromTo(".about", 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 3.5 })
        } else {
            TweenMax.fromTo(".about", 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 1 })
        }
    }

    function writeUserData(address) {
        firebase.database().ref('addresses-list/').push({
            address
        });
    }

    document.addEventListener('click', function (e) {
        if (event.target.id === "submit") {
            let text = event.target.parentElement.children[0]
            writeUserData(text.value)
            text.value = ""
            window.open("https://benjaminshelley.typeform.com/to/AmrxvK", "_blank")
        }
    })
})
