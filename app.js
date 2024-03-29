const faqItemHeaders = document.querySelectorAll('.faq-item-header');

faqItemHeaders.forEach( faqItemHeader => {
    faqItemHeader.addEventListener("click", event => {
        faqItemHeader.classList.toggle("active");
        const faqItemBody = faqItemHeader.nextElementSibling;
        if(faqItemHeader.classList.contains("active"))
        {
            faqItemBody.style.maxHeight = faqItemBody.scrollHeight + "px";
        }
        else
        {
            faqItemBody.style.maxHeight = 0;
        }
    });
});