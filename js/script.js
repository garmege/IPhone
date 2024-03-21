//섹션 구역들 선택
const sections = document.querySelectorAll(".wallpaper");
//클릭할 메뉴 선택
const BtnList = document.querySelectorAll(".side_menu > li");
const circleBtn = document.querySelectorAll(".pager > li");
//중간구역의 시작위치값
let movePoint = 0;

//웹브라우저 스크롤 이벤트 구간
window.addEventListener("scroll",()=>{
    //스크롤바가 움직일 때 해당 스크롤바 위치값
    let scTop = window.scrollY;
    scTop = Math.ceil(scTop);//스크롤바 위치값 소숫점 올림 
    //console.log(scTop);

    //동그라미 버튼 전부 비활성화
    for (let i=0; i<BtnList.length; i++)
    {
        BtnList[i].classList.remove("on");
        circleBtn[i].classList.remove("on");
    }
    //스크롤바가 해당 중간구역에 위치하고 있을 때 해당버튼 활성화
        //스크롤바의 위치 : 첫번째구역시작위치~두번째구역시작위치직전
        if (scTop>=sections[0].offsetTop && scTop<sections[1].offsetTop)
        {
            BtnList[0].classList.add("on");
            circleBtn[0].classList.add("on");
        }
            //스크롤바의 위치 : 두번째구역시작위치~세번째구역시작위치직전
        else if (scTop>=sections[1].offsetTop && scTop<sections[2].offsetTop)
        {
            BtnList[1].classList.add("on");
            circleBtn[1].classList.add("on");
        }
            //스크롤바의 위치 : 세번째구역시작위치~네번째구역시작위치직전
        else if (scTop>=sections[2].offsetTop && scTop<sections[3].offsetTop)
        {
            BtnList[2].classList.add("on");
            circleBtn[2].classList.add("on");
        }
        //스크롤바의 위치 : 네번째구역시작위치~
        else if (scTop>=sections[3].offsetTop && scTop<sections[4].offsetTop)
        {
            BtnList[3].classList.add("on");
            circleBtn[3].classList.add("on");
        }
        else if (scTop>=sections[4].offsetTop && scTop<sections[5].offsetTop)
        {
            BtnList[4].classList.add("on");
            circleBtn[4].classList.add("on");
        }
        else if (scTop>=sections[5].offsetTop && scTop<sections[6].offsetTop)
        {
            BtnList[5].classList.add("on");
            circleBtn[5].classList.add("on");
        }
        else if (scTop >= sections[6].offsetTop)
        {
            BtnList[6].classList.add("on");
            circleBtn[6].classList.add("on");
        }
});

// 중간구역 휠 이벤트 구간
for (let i=0; i<sections.length; i++)
{
    //중간구역 4개에다가 휠 이벤트 달아줌
    sections[i].addEventListener("wheel",wheelMove);
}

//휠이벤트가 많이 쓰이니까 따로 함수로 정의함
function wheelMove(e)
{
    e.preventDefault();
    // 휠을 올렸는지 내렸는지 조건문으로 작업
    if (e.wheelDelta > 0)
    {
        //휠을 실행한 중간구역의 이전 형제구역의 시작위치값
        movePoint = e.currentTarget.previousElementSibling.offsetTop;
    }
    else if (e.wheelDelta < 0)
    {
        //휠을 실행한 중간구역의 이후 형제구역의 시작위치값
        movePoint = e.currentTarget.nextElementSibling.offsetTop;
    }
    window.scrollTo({
        top:movePoint,
        left:0,
        behavior:"smooth"
    });

}

//사이드 버튼 클릭 이벤트
for (let i=0; i<BtnList.length; i++) {
    BtnList[i].addEventListener("click",(e)=>{
        //a태그 기본기능 중지
        e.preventDefault();

        //클릭한 버튼의 순번과 매칭되는 중간구역의 시작위치값
        let secOffset = sections[i].offsetTop;

        //동그라미 버튼 전부 비활성화
        for (let i=0; i<BtnList.length; i++)
        {
            BtnList[i].classList.remove("on");
        }

        e.currentTarget.classList.add("on");

        //스크롤바 이동
        window.scrollTo ({
            top:secOffset,
            left:0,
            behavior:"smooth"
        })
    });
}

//동그라미 버튼 클릭 이벤트
for (let i=0; i<circleBtn.length; i++) {
    circleBtn[i].addEventListener("click",(e)=>{
        //a태그 기본기능 중지
        e.preventDefault();

        //클릭한 버튼의 순번과 매칭되는 중간구역의 시작위치값
        let secOffset = sections[i].offsetTop;

        //스크롤바 이동
        window.scrollTo ({
            top:secOffset,
            left:0,
            behavior:"smooth"
        })
    });
}

// gnb 마우스오버 마우스 아웃
const depth1 = document.querySelector(".gnb");
const depth2 = document.querySelectorAll(".depth2");
const gnbBg = document.querySelector(".gnb_bg");
const gnbSet = [depth1, gnbBg];

for (let i=0; i<gnbSet.length; i++) {
    gnbSet[i].addEventListener("mouseover",()=>{
        for (let j=0; j<depth2.length; j++) {
            depth2[j].style.height="180px";
        }
        gnbBg.style.height="180px"
    });
    gnbSet[i].addEventListener("mouseout",()=>{
        for (let j=0; j<depth2.length; j++) {
            depth2[j].style.height="0px";
        }
        gnbBg.style.height="0px"
    });
}

//모바일 버튼 클릭시 모바일 메뉴 등장
const mBtn = document.querySelector(".m_btn");
const mMenu = document.querySelector(".m_menu");

//웹브라우저가 로딩됬을 때 / 웹브라우저창 크기를 조절했을 때 
var stopWheel = window.matchMedia("screen and (max-width: 768px)");

//윈도우 크기 조절했을 때 체크휠 실행 >> PC나 태블릿PC에서 사이즈 조절한 경우
window.addEventListener("resize",checkWheel);

//윈도우 로딩이 끝났을 때 체크휠 실행 >> 모바일에서 바로 연 경우
window.addEventListener("load",checkWheel);

function checkWheel()
{
    if (stopWheel.matches) { 
        //윈도우의 크기가 768이하일 때 실행
        for (let i=0; i<sections.length; i++)
        {
            //중간구역 7개에다가 휠 이벤트 달아줌
            sections[i].removeEventListener("wheel",wheelMove);
        }
    }
    else
    {
        //윈도우 크기가 768보다 클 때 실행
        for (let i=0; i<sections.length; i++) {
            //중간구역 7개에다가 휠 이벤트 달아줌 
            sections[i].addEventListener("wheel",wheelMove);
        }
    }
}

//제이쿼리 사용 시작
$(function(){
    //aos
    AOS.init();

    //햄버거 메뉴 클릭시 모바일 메뉴 등장
    $(".m_btn").click(function(e)
    {
        e.preventDefault();
        $(".m_menu").animate({"right":0},500);
    });

     //X버튼 클릭시 모바일 메뉴 사라짐
     $(".m_close_btn").click(function(e)
     {
         e.preventDefault();
         $(".m_menu").animate({"right":"-300px"},500);
     });

    //모바일 gnb 메뉴 클릭시 스크롤바 이동
    let headerHeight = $("#header").height();
    $(".m_gnb li").click(function(e){
        let f = 0;
        e.preventDefault();
        //>>표시되는 클래스 제거
        $(".m_gnb li").removeClass("on");
        //클릭한 모바일 gnb li 버튼 순서값
        f = $(this).index();
        //무브포인트 c랑 f 따로
        //컨테이너 안에 섹션들 시작 위치값 알아내기 - > offset().top 위 offset().left 왼쪽
        let movePoint = $(".wallpaper").eq(f).offset().top;
        //animate 안에서 scrollTop (스크롤바 위치값)으로 접근
        $("html,body").stop().animate({"scrollTop":movePoint - headerHeight},1500);
        //gnb 메뉴들 클래스 제거
        $(".gnb li").removeClass("on");
        //해당 gnb 클래스 on 추가
        $(".gnb li").eq(f).addClass("on");
        //클릭한 모바일 메뉴 li에 >> 표시 추가
        $(this).addClass("on");
    }); 
});
