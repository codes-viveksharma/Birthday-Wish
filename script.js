const knife = document.getElementById('knife');
const celebration = document.getElementById('celebration');
let cakeCut = false;

knife.addEventListener('mousedown', (e) => {
    document.onmousemove = function(event) {
        knife.style.left = event.pageX + 'px';
        knife.style.top = event.pageY + 'px';
    };
    
    document.onmouseup = function() {
        document.onmousemove = null;
        knife.style.transform = 'rotate(30deg)'; // Slice effect
        cakeCut = true;

        setTimeout(() => {
            if (cakeCut) {
                celebration.style.display = 'block'; // Show celebration
            }
        }, 500); // Delay for effect
    };
});