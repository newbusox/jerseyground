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


    var sceneThree = new ScrollMagic.Scene({
        triggerElement: '#three',
    })
    sceneThree.on("progress", () => enterPlayer())
    sceneThree.addTo(enterController)

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
        TweenMax.fromTo(".middle", 1, { opacity: 0 }, { opacity: 1 })
    }

    function removeNavForm() {
        TweenMax.fromTo(".middle", 1, { opacity: 1 }, { opacity: 0, color: "red" })
    }

    function enterMaxims() {
        TweenMax.fromTo("#sale", 1, { opacity: 0, y: 25 }, { opacity: 1, y:0, delay: 1 })
        TweenMax.fromTo("#cash", 1, { opacity: 0, y: 25}, { opacity: 1, y: 0, delay: 2 })
        TweenMax.fromTo("#cal", 1, { opacity: 0, y: 25 }, { opacity: 1, y:0, delay: 3})
    }

    function enterPlayer() {
        TweenMax.fromTo(".movie-background", 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 1 })
    }

    function enterProcess() {
        TweenMax.fromTo("#head-text", 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 1 })
        TweenMax.fromTo("#first", 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 2 })
        TweenMax.fromTo("#second", 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 3 })
        TweenMax.fromTo("#third", 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 4})
    }

    function enterAbout() {
        TweenMax.fromTo(".about", 1, { opacity: 0, y: 25 }, { opacity: 1, y: 0, delay: 1 })
    }
})
