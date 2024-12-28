AFRAME.registerComponent("collisiondetector",{
    init: function(){
        counter=0;
        this.el.addEventListener("collide",function(e){
            e.detail.target.el.remove();
            console.log("hello")

        });
        // el is element
    },

});