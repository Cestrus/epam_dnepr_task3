export class ViewPostPage{
    constructor(){
        this.postTitle = document.querySelector('.author-post__title p');
        this.author = document.querySelector('.author-info__name p');
        this.postDate = document.querySelector('.statistic__date p');
        this.postImg = document.querySelector('.post-main__img img');

        this.postDescriptionAll = document.querySelectorAll('.post-main__text');
        this.postSubtitleAll = document.querySelectorAll('.post-main__subtitle');

        this.postQuote = document.querySelector('.post-main__notice-block');
    }

    renderPostTitle(title){
        this.postTitle.innerText = '';
        this.postTitle.innerText = title;
    }

    renderAuthor(author){
        this.author.innerText = '';
        this.author.innerText = author;
    }

    renderPostDate(date){
        this.postDate.innerText = '';
        this.postDate.innerText = date;
    }

    renderPostImg(imgLink){
        this.postImg.setAttribute('src', imgLink);
    }

    renderPostDescription(description){
        this.postDescriptionAll[0].innerText = '';
        this.postDescriptionAll[0].innerText = description;
        this.postSubtitleAll.forEach(el => {
            el.remove();
        });
        this.postDescriptionAll.forEach((el, index) => {
            if(index != 0){
                el.remove();
            }
        })
    }

    renderPostQuote(quote){
        this.postQuote.innerText = '';
        this.postQuote.innerText = quote;
    }

    renderPage(obj){
        this.renderPostTitle(obj.postTitle);
        this.renderAuthor(obj.author);
        this.renderPostDate(obj.date);
        this.renderPostImg(obj.imgLink);
        this.renderPostDescription(obj.postDescription);
        this.renderPostQuote(obj.postQuote);
    }  
}