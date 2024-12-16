const scrollContainer = document.querySelector('.scroll-container');
const horizontalScroll = document.querySelector('.horizontal-scroll');

// Detect when the scroll has passed from vertical to horizontal content and vice versa
let isHorizontalScrolling = true;

scrollContainer.addEventListener('wheel', (evt) => {
    if (isHorizontalScrolling) {
        evt.preventDefault();
        horizontalScroll.scrollLeft += evt.deltaY;

        // If horizontal scroll is finished, allow vertical scrolling
        if (horizontalScroll.scrollWidth === horizontalScroll.scrollLeft + horizontalScroll.clientWidth && evt.deltaY > 0) {
            isHorizontalScrolling = false;
        }
    } else {
        // If scrolling upward and at the top of vertical content, switch to horizontal scrolling
        if (scrollContainer.scrollTop === 0 && evt.deltaY < 0) {
            evt.preventDefault();
            horizontalScroll.scrollLeft += evt.deltaY;

            if (horizontalScroll.scrollLeft <= 0) {
                isHorizontalScrolling = true;
            }
        }
    }
});

scrollContainer.addEventListener('keydown', (evt) => {
    if (isHorizontalScrolling) {
        if (evt.key === "ArrowDown" || evt.key === "ArrowUp") {
            evt.preventDefault();
            horizontalScroll.scrollLeft += (evt.key === "ArrowDown" ? 100 : -100);

            // If horizontal scroll is finished, allow vertical scrolling
            if (horizontalScroll.scrollWidth === horizontalScroll.scrollLeft + horizontalScroll.clientWidth && evt.key === "ArrowDown") {
                isHorizontalScrolling = false;
            }
        }
    } else {
        // If scrolling upward and at the top of vertical content, switch to horizontal scrolling
        if (scrollContainer.scrollTop === 0 && evt.key === "ArrowUp") {
            evt.preventDefault();
            horizontalScroll.scrollLeft -= 100;

            if (horizontalScroll.scrollLeft <= 0) {
                isHorizontalScrolling = true;
            }
        }
    }
});
