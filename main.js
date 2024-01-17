// 🍰header 밑에 그림자주기
let scrollHeader=()=>{
    let header = document.querySelector('#header');
    //삼항연산자를 사용
    //pageYOffset >> top값
    //pageYOffset >=50?A:B; >> 조건문이 참이면 A가 실행되고, 거짓이면 B가 실행된다.
    pageYOffset >=50
    ?header.classList.add('bg-header') //jquery에서는 add만 쓰지만, javaScript에서는 classList.add //class를 부르는 거라서 .을 쓸 필요가 없다.
    :header.classList.remove('bg-header');

}

window.addEventListener('scroll',scrollHeader) //괄호안에(함수이 호출됐다는 뜻, 인자로 함수가 들어가면(콜백함수)는 괄호가 필요없다.)
//window.addEventListener('scroll',function(scrollHeader){}) // 위와 같다.




// 🍦배경테마 변경
let themeButton = document.getElementById("theme-button");
let iconTheme = "ri-sun-line";
let darkTheme = "dark-theme";

//let getCurrentTheme = function(){}
// 위 코드를 화살표 함수로 바꾸면
let getCurrentTheme = ()=>{
    let result = document.body.classList.contains(darkTheme)?"dark":"light"; // document.body.classList.contains(darkTheme) >> body가 class명을 dark-theme를 가지고 있는가? 값은 true / false 로 나온다. 있으면 dark라는 말을 줄 것이고, 없으면 light를 줄것이다
    return result;
};

let getCurrentIcon=()=>{
    let result = themeButton.classList.contains(iconTheme)?"ri-moon-line":"ri-sun-line";
    return result;
};


//웹의 스토어에 값셋팅 (개발자모드 > Application > local storage)
//localStorage.setItem() >> 웹스토어에 값을 입력
//localStorage.getItem() >> 웹 스토어의 값을 가져올 때

themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");
//console.log(selectedTheme);

if(selectedTheme){
    if(selectedTheme == "dark"){
        document.body.classList.add(darkTheme);
    }else{
        document.body.classList.remove(darkTheme);
    }
    
    if(selectedIcon == "ri-moon-line"){ // moon-line이면 sun-line을 넣어라
        themeButton.classList.add(iconTheme);
    }else{
        themeButton.classList.remove(iconTheme);
    }
}


// 🍧모바일 메뉴 보이기
let navToggle = document.getElementById("nav_toggle"); //querySelector를 써도 된다.
let navMenu = document.getElementById("nav_menu");
let navClose = document.getElementById("nav_close");

navToggle.addEventListener("click",()=>{
    navMenu.classList.add("show-menu")
})
navClose.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu")
})


// 🧁전체화면 애니메이션
ScrollReveal().reveal('.home_img,.home_data,.about_img,.about_data,.popular_card,.popular .section_subtitle,.popular .section_title, .recently_data, .recently_img, .home_leaf-1, .home_leaf-2, .about-leaf, .recently .recently_leaf-1, .recently .recently_leaf-2, .newsletter_content, .footer_container, .footer_info',{
    delay: 400,
    duration: 2500,
    distance: '60px',
    origin: 'top'
    //reset: true // false기본값 >> 한번만 애니메이션 실행
});

ScrollReveal().reveal('.home_data',{origin:'bottom'});
ScrollReveal().reveal('.home_leaf-1',{origin:'bottom'});


ScrollReveal().reveal('.about_data, .recently_data, .recently .recently_leaf-1',{origin:'left'});
ScrollReveal().reveal('.about_img, .recently_img, .home_leaf-2, .about-leaf, .recently .recently_leaf-2',{origin:'right'});

ScrollReveal().reveal('.popular_card',{interval:300});

// 🥨scrollup
let scrollup = ()=>{
    let scrollup = document.getElementById('scroll-up')
    pageYOffset>=350?
    scrollup.classList.add('show-scroll')
    :scrollup.classList.remove('show-scroll')
} //350보다 크면
window.addEventListener('scroll',scrollup)

// 🥞menu
let scrollActive=()=>{
    let scrollY = pageYOffset;

    let sections = document.querySelectorAll('section[id]'); //section태그들을 가져오는데 속성 중 id가 있는 section들을 가져와라
    //console.log(sections)
    sections.forEach((current)=>{
        let sectionHeight = current.offsetHeight; //현재 불러온 item인 section의 높이값을 말한다.
        let sectionTop = current.offsetTop - 60; //현재 불러온 item의 머리인 top인 화면의 top의 위치 //=화면에 내머리가 닿아서 화면에 보이는 위치
        let sectionId = current.getAttribute('id');
        //console.log(sectionId)

        let sectionClass=document.querySelector(`.nav_menu a[href*="${sectionId}"]`) //하나만 불러와서 All을 안붙임.
        // a[href*="home"] >> home이 포함되어있는가

        if(scrollY>sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener("scroll",scrollActive) //콜백함수:괄호금지 / 괄호를연다는것은 리턴값을 받는다는 뜻

