$(document).ready(()=> {
const $headerIcon = $('.menu');
const $design = $('.design');
const $navigation = $('#navbar');
const $contactSession = $('.contact')
const $aboutMe = $('.about-me');
const $contactImageHover = $('.image-hover')
const $image = $('.image');
const $viewProjects = $('.button-div');
const $projects = $('.sample-column-1')
const $education = $('.sample-column-2')

//Blocks
const $blockOne = $('.block-1');
const $blockTwo = $('.block-2');
const $blockThree = $('.block-3');
const $blockFour = $('.block-4');
const $blockFive = $('.block-5');
const $blockSix = $('.block-6');
const $blockSeven = $('.block-7');
const $blockEigth = $('.block-8');

//Block Text
const $TextOne = $('.project-description-1');
const $TextTwo = $('.project-description-2');
const $TextThree = $('.project-description-3');
const $TextFour = $('.project-description-4');
const $TextFive = $('.project-description-5');
const $TextSix = $('.project-description-6');
const $TextSeven = $('.project-description-7');
const $TextEight= $('.project-description-8');
// const $TextOne = $('.project-description');

//Animation functions
//block 1
$blockOne.on('mouseenter', ()=> {
    $TextOne.fadeIn(1100)
}).on('mouseleave', () => {
    $TextOne.fadeOut()
})
//block 2
$blockTwo.on('mouseenter', ()=> {
    $TextTwo.fadeIn(1100)
}).on('mouseleave', () => {
    $TextTwo.fadeOut()
})
//block 3
$blockThree.on('mouseenter', ()=> {
    $TextThree.fadeIn(1100)
}).on('mouseleave', () => {
    $TextThree.fadeOut()
})
//block 4
$blockFour.on('mouseenter', ()=> {
    $TextFour.fadeIn(1100)
}).on('mouseleave', () => {
    $TextFour.fadeOut()
})
//block 5
$blockFive.on('mouseenter', ()=> {
    $TextFive.fadeIn(1100)
}).on('mouseleave', () => {
    $TextFive.fadeOut()
})
//block 6
$blockSix.on('mouseenter', ()=> {
    $TextSix.fadeIn(1100)
}).on('mouseleave', () => {
    $TextSix.fadeOut()
})
//block 7
$blockSeven.on('mouseenter', ()=> {
    $TextSeven.fadeIn(1100)
}).on('mouseleave', () => {
    $TextSeven.fadeOut()
})
//block 8
$blockEigth.on('mouseenter', ()=> {
    $TextEight.fadeIn(1100)
}).on('mouseleave', () => {
    $TextEight.fadeOut()
});

$viewProjects.on('click', ()=> {
    $projects.toggle();
    $education.toggle();
})






$design.fadeIn(7000);

$headerIcon.on('click', () => {
    $navigation.toggle()
})
 $navigation.on('mouseleave', () => {
     $navigation.hide();
 })


 $contactImageHover.on('mouseenter', () => {
    $aboutMe.slideDown(3000);
    $contactImageHover.hide();
    $image.fadeIn(8000);
 })
 $contactSession.on('mouseleave', ()=> {
    $image.hide();
    $aboutMe.hide();
    $contactImageHover.fadeIn(3000);
 })
//  .on('mouseleave', () =>{
//      $aboutMe.slideUp();
    //  $contactImageHover.show();
//  })

})

