export class ModelPostPage{
    constructor(renderPostPage){  
        this.renderPostPage = renderPostPage;

        this.loadPost();
    }

    loadPost(){
        const URL = 'http://127.0.0.1:3000/api/list';

        fetch(URL)
            .then(response => response.json())
            .then(res => {
                res[res.length-1]['date'] = this.parseDate(res[res.length-1]['date']);
                this.renderPostPage(res[res.length-1]);
            })
    }

    parseDate(oldDate){
        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'spt', 'oct', 'nov', 'dec'];
        let newDate = oldDate.split('-').reverse();
        newDate.splice(1, 1, months[+newDate[1]-1] + ',');
        return newDate.join(' ');
    }
    
}