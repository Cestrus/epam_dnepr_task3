export class Slider {
    constructor(){
        document.querySelector('.btn-arrow--forward').addEventListener('click', this.changeCurrent.bind(this, 'next'));
        document.querySelector('.btn-arrow--back').addEventListener('click', this.changeCurrent.bind(this, 'prev'));
        document.querySelector('.row--portfolio-blocks').addEventListener('touchmove', this.touchmoveListener.bind(this));
        document.querySelector('.row--portfolio-blocks').addEventListener('touchstart', this.touchstartListener.bind(this));
        this.portfolioBlockList = document.querySelectorAll('.portfolio-block');
        
        this.portfolioDatas = [
            {
                imgUrl: 'url("./img/bg/bg\ img\ 1.png")',
                title: 'Art Ocean',
                subtitle: 'Photography, art, nature'
            }, 
            {
                imgUrl: 'url("./img/bg/bg\ img\ 2.png")',
                title: 'City guide',
                subtitle: 'Photography, city, way'
            }, 
            {
                imgUrl: 'url("./img/bg/bg\ img\ 3.png")',
                title: 'Mountains',
                subtitle: 'Art, hiking'
            }            
        ];
        this.current = 0;
        this.isCorusel = false;
        this.touchArrX = [];
        this.interval;
    }

    changeCurrent(dir){
        if(dir === 'next'){
            this.current++;
            if(this.current >= this.portfolioDatas.length){
                this.current = 0;
            }
        } else {
            this.current--;
            if(this.current < 0){
                this.current = this.portfolioDatas.length - 1;
            }
        }
        let cur = this.current;
        [...this.portfolioBlockList].map(el => {
            this.renderPortfolio(el, cur);
            cur++;
            if(cur >= this.portfolioDatas.length){
                cur = 0;
            }
        })     
    }

    renderPortfolio(element, num){
        element.innerHTML = '';
        element.style.backgroundImage = this.portfolioDatas[num].imgUrl;
        element.innerHTML = `<p class="portfolio-block__title">${this.portfolioDatas[num].title}</p>
                            <p class="portfolio-block__subtitle">${this.portfolioDatas[num].subtitle}</p>
                            <div class="portfolio-block__animation">
                                <div class="hideblock">
                                    <div class="hideblock__attach"><a href="#"><div class="attach"></div></a></div>
                                    <div class="hideblock__search"><a href="#"><div class="search"></div></a></div>
                                </div>
                            </div>`;
    }

    touchmoveListener(ev){       
        this.touchArrX.push(ev.touches[0].screenX); 
        if(!this.isCorusel){
            if(this.touchArrX[this.touchArrX.length - 1].clientX - this.touchArrX[0].clientX  > 0 ) {
                this.interval = setInterval(()=>{
                    this.changeCurrent('next');
                }, 200);
            } else {
                console.log('prev')
                this.interval = setInterval(()=>{
                    this.changeCurrent('prev');
                }, 200);                
            }
            this.isCorusel = true;
        }
        
    }

    touchstartListener(){
        this.touchArrX = [];
        this.isCorusel = false;
        clearInterval(this.interval);
    }    
}


export class SliderOne extends Slider {
    constructor(){
        super();
    }

    renderPortfolio(element, num){
        super.renderPortfolio(element, num);
        element.style.transition = 'all 0.5s ';
    }
}

export class SliderTwo extends Slider {
    constructor(){
        super();
    }

    renderPortfolio(element, num) {
        element.style.transform = 'scaleX(0)';
        element.style.transition = 'all 0.5s';
        setTimeout(()=>{
            element.style.transform = 'scaleX(1)';
            super.renderPortfolio(element, num);
        }, 500);


    }
}

