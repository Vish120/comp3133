@Component({
    selector: 'students',
    template: '<h2>{{getTitle}}</h2>',

})
export class StudentsComponent {
    title = "My List of Students";
    date = "Current Date";

    getTitle() {
        return this.title;
    }
    getCurrentDate() {
        return this.date;       
    }

}
import {Component} from '@angular/core';

