// const scrollContainer = document.querySelector('.scroll-container');
// const horizontalScroll = document.querySelector('.horizontal-scroll');

// // Detect when the scroll has passed from vertical to horizontal content and vice versa
// let isHorizontalScrolling = true;

// scrollContainer.addEventListener('wheel', (evt) => {
//     if (isHorizontalScrolling) {
//         evt.preventDefault();
//         horizontalScroll.scrollLeft += evt.deltaY;

//         // If horizontal scroll is finished, allow vertical scrolling
//         if (horizontalScroll.scrollWidth === horizontalScroll.scrollLeft + horizontalScroll.clientWidth && evt.deltaY > 0) {
//             isHorizontalScrolling = false;
//         }
//     } else {
//         // If scrolling upward and at the top of vertical content, switch to horizontal scrolling
//         if (scrollContainer.scrollTop === 0 && evt.deltaY < 0) {
//             evt.preventDefault();
//             horizontalScroll.scrollLeft += evt.deltaY;

//             if (horizontalScroll.scrollLeft <= 0) {
//                 isHorizontalScrolling = true;
//             }
//         }
//     }
// });

// scrollContainer.addEventListener('keydown', (evt) => {
//     if (isHorizontalScrolling) {
//         if (evt.key === "ArrowDown" || evt.key === "ArrowUp") {
//             evt.preventDefault();
//             horizontalScroll.scrollLeft += (evt.key === "ArrowDown" ? 100 : -100);

//             // If horizontal scroll is finished, allow vertical scrolling
//             if (horizontalScroll.scrollWidth === horizontalScroll.scrollLeft + horizontalScroll.clientWidth && evt.key === "ArrowDown") {
//                 isHorizontalScrolling = false;
//             }
//         }
//     } else {
//         // If scrolling upward and at the top of vertical content, switch to horizontal scrolling
//         if (scrollContainer.scrollTop === 0 && evt.key === "ArrowUp") {
//             evt.preventDefault();
//             horizontalScroll.scrollLeft -= 100;

//             if (horizontalScroll.scrollLeft <= 0) {
//                 isHorizontalScrolling = true;
//             }
//         }
//     }
// });
function findSecondSmallestLargest(arr) {
    if (arr.length < 2) {
      return "Array needs at least two elements.";
    }
  
    let smallest = Number.MAX_VALUE;
    let secondSmallest = Number.MAX_VALUE;
    let largest = Number.MIN_VALUE;
    let secondLargest = Number.MIN_VALUE;
    console.log("smallest ",smallest)
    console.log("secondSmallest",smallest)
    console.log("largest ",smallest)
    console.log("secondLargest",smallest)
  
    for (let i = 0; i < arr.length; i++) {
      // Update smallest and second smallest
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
  
      // Update largest and second largest
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
  
    return {
      secondSmallest,
      secondLargest
    };
  }
  let array = [10, 5, 7, 2,8,1,3,4,5,2,3,4,56,7,8,123,300];
console.log(findSecondSmallestLargest(array)); 
// Output: { secondSmallest: 5, secondLargest: 8 }
