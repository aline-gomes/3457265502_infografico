// DRONE - FLOAT
gsap.to(drone, 4, { delay: 1, y: "+14%", ease: Linear.easeInOut, repeat: -1, yoyo: true });

// POPS
const pops = document.querySelector('.pop')
const btns_pops = document.querySelectorAll('.btns')
const pop_container = document.querySelector('.pop_container')

function showPops(index) {
    pop_container.classList.remove('hide')
    pops.innerHTML = txts_pops[index].title + txts_pops[index].txt + '<div class="line"></div>' + '<div class="divImg btn_close"></div>'

    btns_pops[index].style.cssText = 'filter: sepia(1);'
    hidePops()
}

function hidePops() {
    document.querySelector('.btn_close').onclick = function () {
        pop_container.classList.add('hide')
    }
}