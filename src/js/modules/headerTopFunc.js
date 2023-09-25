// function headerTopFunc(){
//     var windowScrollTop = window.scrollY;
//   console.log(windowScrollTop);

//   const block = document.querySelector('.header-top__content');
//   console.log(block);
//   const blockParent = block.offsetParent;
//   console.log(blockParent);
//   const blockHeight = block.offsetHeight;
//   console.log(blockHeight);
  
  
  
//   $(window).scroll(function(){
//     var wrapHeight = $(this).scrollTop();
//     console.log(wrapHeight);
//     var attrstyle = 'height:' + $(this).scrollTop() + 'px;';
//     $(".header-top__content-wrapper").attr('style', attrstyle);
//   });


//   const hideItems = document.querySelectorAll('.hide-items');
//   console.log(hideItems);
//   // var 
//   if (hideItems.length > 0) {
//     window.addEventListener('scroll', hideOnScroll);
//     function hideOnScroll(params) {
//       for (let index = 0; index < hideItems.length; index++) {
//         const hideItem = hideItems[index];
//         console.log(hideItem);
//         const hideItemHeight = hideItem.offsetHeight;
//         console.log(hideItemHeight);
//         const hideItemOffset = getOffset(hideItem).top;
//         console.log(hideItemOffset);
//         var windowScrollTop = window.scrollY;
//         console.log(windowScrollTop); 
        
//         if (blockHeight - windowScrollTop < hideItemOffset){
//           hideItem.classList.add('none');
//         } else {
//           hideItem.classList.remove('none');
//         }
//       }
//     }
//     function getOffset(el) {
//       el = el.getBoundingClientRect();
//       return {
//         left: el.left + window.scrollX,
//         top: el.top + window.scrollY
//       }
//     }
//   }

// }

// export default headerTopFunc;