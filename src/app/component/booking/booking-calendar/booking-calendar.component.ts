import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';

export interface CalendarDate {
    mDate: moment.Moment;
    selected?: boolean;
    today?: boolean;
    available?:boolean;
    prix?:number;


}

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent implements OnInit {

    currentDate = moment();
    dayNames = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    weeks: CalendarDate[][] = [];
    sortedDates: CalendarDate[] = [];

    @Input() availableDates: CalendarDate[] = [];
    @Output() onSelectDate = new EventEmitter<CalendarDate>();

    constructor() {}

    ngOnInit(): void {
        this.generateCalendar();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.availableDates &&
            changes.availableDates.currentValue &&
            changes.availableDates.currentValue.length  > 1) {
            this.sortedDates = _.sortBy(changes.availableDates.currentValue, (m: CalendarDate) => m.mDate.valueOf());
            this.generateCalendar();
        }
    }


    isToday(date: moment.Moment): boolean {
        return moment().isSame(moment(date), 'day');
    }

    getPrice(date: moment.Moment): number {
        const index = _.findIndex(this.availableDates, (selectedDate) => {
            return moment(date).isSame(selectedDate.mDate, 'day');
        });
        if(index !== -1) return this.availableDates[index].prix
        return null
    }

    isAvailable(date: moment.Moment): boolean {
        return _.findIndex(this.availableDates, (selectedDate) => {
            return moment(date).isSame(selectedDate.mDate, 'day');
        }) > -1;
    }


    isSelectedMonth(date: moment.Moment): boolean {
        return moment(date).isSame(this.currentDate, 'month');
    }

    selectDate(date: CalendarDate): void {
        if(this.isAvailable(date.mDate)) this.onSelectDate.emit(date);

    }

    // actions from calendar

    prevMonth(): void {
        this.currentDate = moment(this.currentDate).subtract(1, 'months');
        this.generateCalendar();
    }

    nextMonth(): void {
        this.currentDate = moment(this.currentDate).add(1, 'months');
        this.generateCalendar();
    }

    firstMonth(): void {
        this.currentDate = moment(this.currentDate).startOf('year');
        this.generateCalendar();
    }

    lastMonth(): void {
        this.currentDate = moment(this.currentDate).endOf('year');
        this.generateCalendar();
    }

    prevYear(): void {
        this.currentDate = moment(this.currentDate).subtract(1, 'year');
        this.generateCalendar();
    }

    nextYear(): void {
        this.currentDate = moment(this.currentDate).add(1, 'year');
        this.generateCalendar();
    }

    // generate the calendar grid

    generateCalendar(): void {
        const dates = this.fillDates(this.currentDate);
        const weeks: CalendarDate[][] = [];
        while (dates.length > 0) {
            weeks.push(dates.splice(0, 7));
        }
        this.weeks = weeks;
    }

    fillDates(currentMoment: moment.Moment): CalendarDate[] {
        const firstOfMonth = moment(currentMoment).startOf('month').day();
        const firstDayOfGrid = moment(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
        const start = firstDayOfGrid.date();
        return _.range(start, start + 42)
            .map((date: number): CalendarDate => {
                const d = moment(firstDayOfGrid).date(date);
                return {
                    today: this.isToday(d),
                    available: this.isAvailable(d),
                    mDate: d,
                    prix: this.getPrice(d)
                };
            });
    }
}