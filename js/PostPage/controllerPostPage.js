import { ModelPostPage } from './modelPostPage.js';
import { ViewPostPage } from './viewPostPage.js';

export class ControllerPostPage{
    constructor(){    
        this.view = new ViewPostPage();
        this.model = new ModelPostPage(this.view.renderPage.bind(this.view));       
    }
}