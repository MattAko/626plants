import { Pipe, PipeTransform } from "@angular/core";

/**
 *  Converts rfc3339 Internet Date-Time Format to a more readable date-time.
 *  Documentation for rfc3339 Internet Date/Time format can be found here:
 *  https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
 */


@Pipe({
    name: 'datetime',
})
export class DateTimeAdminPipe implements PipeTransform{

    transform(value: string, ) {
        if(value.length===0){
            return value;
        }
        // Get date 
        const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        const year = value.slice(0,4);
        const month = months[parseInt(value.slice(5,7))]; 
        const day = value.slice(8, 10);
        const time = value.slice(11, 16);
        const newDate = `${day} ${month} ${year} ${time} GMT`
        return newDate;
    }
}