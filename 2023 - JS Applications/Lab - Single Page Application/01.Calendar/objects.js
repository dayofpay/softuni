export let monthList = {
    "Jan": 1,
    "Feb": 2,
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sept": 9,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12
}
export let yearData = {
    2020: `
    <section class="monthCalendar" id="year-2020">
    <table class="calendar">
        <caption>2020</caption>
        <tbody>
            <tr class="months">
                <th class="month" colspan="4"></th>
            </tr>

            <tr class="days">
                <td class="day">
                    <div class="date">Jan</div>
                </td>
                <td class="day">
                    <div class="date">Feb</div>
                </td>
                <td class="day">
                    <div class="date">Mar</div>
                </td>
                <td class="day">
                    <div class="date">Apr</div>
                </td>
            </tr>
            <tr>
                <td class="day">
                    <div class="date">May</div>
                </td>
                <td class="day">
                    <div class="date">Jun</div>
                </td>
                <td class="day">
                    <div class="date">Jul</div>

                </td>
                <td class="day">
                    <div class="date">Aug</div>
                </td>
            </tr>
            <tr>
                <td class="day">
                    <div class="date">Sept</div>
                </td>
                <td class="day">
                    <div class="date">Oct</div>
                </td>
                <td class="day">
                    <div class="date">Nov</div>
                </td>
                <td class="day">
                    <div class="date">Dec</div>
                </td>
            </tr>
        </tbody>
    </table>
</section>`,
    2021: `<section class="monthCalendar" id="year-2021">
<table class="calendar">
    <caption>2021</caption>
    <tbody>
        <tr class="months">
            <th class="month" colspan="4"></th>
        </tr>

        <tr class="days">
            <td class="day">
                <div class="date">Jan</div>
            </td>
            <td class="day">
                <div class="date">Feb</div>
            </td>
            <td class="day">
                <div class="date">Mar</div>
            </td>
            <td class="day">
                <div class="date">Apr</div>
            </td>
        </tr>
        <tr>
            <td class="day">
                <div class="date">May</div>
            </td>
            <td class="day">
                <div class="date">Jun</div>
            </td>
            <td class="day">
                <div class="date">Jul</div>

            </td>
            <td class="day">
                <div class="date">Aug</div>
            </td>
        </tr>
        <tr>
            <td class="day">
                <div class="date">Sept</div>
            </td>
            <td class="day">
                <div class="date">Oct</div>
            </td>
            <td class="day">
                <div class="date">Nov</div>
            </td>
            <td class="day">
                <div class="date">Dec</div>
            </td>
        </tr>
    </tbody>
</table>
</section>`,
    2022: `<section class="monthCalendar" id="year-2022">
    <table class="calendar">
        <caption>2022</caption>
        <tbody>
            <tr class="months">
                <th class="month" colspan="4"></th>
            </tr>

            <tr class="days">
                <td class="day">
                    <div class="date">Jan</div>
                </td>
                <td class="day">
                    <div class="date">Feb</div>
                </td>
                <td class="day">
                    <div class="date">Mar</div>
                </td>
                <td class="day">
                    <div class="date">Apr</div>
                </td>
            </tr>
            <tr>
                <td class="day">
                    <div class="date">May</div>
                </td>
                <td class="day">
                    <div class="date">Jun</div>
                </td>
                <td class="day">
                    <div class="date">Jul</div>

                </td>
                <td class="day">
                    <div class="date">Aug</div>
                </td>
            </tr>
            <tr>
                <td class="day">
                    <div class="date">Sept</div>
                </td>
                <td class="day">
                    <div class="date">Oct</div>
                </td>
                <td class="day">
                    <div class="date">Nov</div>
                </td>
                <td class="day">
                    <div class="date">Dec</div>
                </td>
            </tr>
        </tbody>
    </table>
</section>`,
    2023: `<section class="monthCalendar" id="year-2023">
<table class="calendar">
    <caption>2023</caption>
    <tbody>
        <tr class="months">
            <th class="month" colspan="4"></th>
        </tr>

        <tr class="days">
            <td class="day">
                <div class="date">Jan</div>
            </td>
            <td class="day">
                <div class="date">Feb</div>
            </td>
            <td class="day">
                <div class="date">Mar</div>
            </td>
            <td class="day">
                <div class="date">Apr</div>
            </td>
        </tr>
        <tr>
            <td class="day">
                <div class="date">May</div>
            </td>
            <td class="day">
                <div class="date">Jun</div>
            </td>
            <td class="day">
                <div class="date">Jul</div>

            </td>
            <td class="day">
                <div class="date">Aug</div>
            </td>
        </tr>
        <tr>
            <td class="day">
                <div class="date">Sept</div>
            </td>
            <td class="day">
                <div class="date">Oct</div>
            </td>
            <td class="day">
                <div class="date">Nov</div>
            </td>
            <td class="day">
                <div class="date">Dec</div>
            </td>
        </tr>
    </tbody>
</table>
</section>`
}

export let monthData = {
    "2020-1": `<section id="month-2020-1" class="daysCalendar">
    <table class="calendar">
        <caption>January 2020</caption>
        <thead>
            <tr class="weekdays">
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wednesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
                <th scope="col">Saturday</th>
                <th scope="col">Sunday</th>
            </tr>
        </thead>
        <tbody>
            <tr class="days">
                <td class="day other-month">
                    <div></div>
                </td>
                <td class="day other-month">
                    <div></div>
                </td>
                <td class="day">
                    <div class="date">1</div>
                </td>
                <td class="day">
                    <div class="date">2</div>
                </td>
                <td class="day">
                    <div class="date">3</div>
                </td>
                <td class="day">
                    <div class="date">4</div>
                </td>
                <td class="day">
                    <div class="date">5</div>
                </td>
            </tr>
            <tr class="days">
                <td class="day">
                    <div class="date">6</div>
                </td>
                <td class="day">
                    <div class="date">7</div>
                </td>
                <td class="day">
                    <div class="date">8</div>
                </td>
                <td class="day">
                    <div class="date">9</div>
                </td>
                <td class="day">
                    <div class="date">10</div>
                </td>
                <td class="day">
                    <div class="date">11</div>
                </td>
                <td class="day">
                    <div class="date">12</div>
                </td>
            </tr>
            <tr class="days">
                <td class="day">
                    <div class="date">13</div>
                </td>
                <td class="day">
                    <div class="date">14</div>
                </td>
                <td class="day">
                    <div class="date">15</div>
                </td>
                <td class="day">
                    <div class="date">16</div>
                </td>
                <td class="day">
                    <div class="date">17</div>
                </td>
                <td class="day">
                    <div class="date">18</div>
                </td>
                <td class="day">
                    <div class="date">19</div>
                </td>
            </tr>
            <tr class="days">
                <td class="day">
                    <div class="date">20</div>
                </td>
                <td class="day">
                    <div class="date">21</div>
                </td>
                <td class="day">
                    <div class="date">22</div>
                </td>
                <td class="day">
                    <div class="date">23</div>
                </td>
                <td class="day">
                    <div class="date">24</div>
                </td>
                <td class="day">
                    <div class="date">25</div>
                </td>
                <td class="day">
                    <div class="date">26</div>
                </td>
            </tr>
            <tr class="days">
                <td class="day">
                    <div class="date">27</div>
                </td>
                <td class="day">
                    <div class="date">28</div>
                </td>
                <td class="day">
                    <div class="date">29</div>
                </td>
                <td class="day">
                    <div class="date">30</div>
                </td>
                <td class="day">
                    <div class="date">31</div>
                </td>
                <td class="day other-month">
                    <div></div>
                </td>
                <td class="day other-month">
                    <div></div>
                </td>
            </tr>
        </tbody>
    </table>
</section>`,
    "2020-2": `<section id="month-2020-2" class="daysCalendar">
<table class="calendar">
    <caption>February 2020</caption>
    <thead>
        <tr class="weekdays">
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
            <th scope="col">Saturday</th>
            <th scope="col">Sunday</th>
        </tr>
    </thead>
    <tbody>
        <tr class="days">
            <td class="day other-month">
                <div></div>
            </td>
            <td class="day other-month">
                <div></div>
            </td>
            <td class="day other-month">
                <div></div>
            </td>
            <td class="day other-month">
                <div></div>
            </td>
            <td class="day other-month">
                <div></div>
            </td>
            <td class="day">
                <div class="date">1</div>
            </td>
            <td class="day">
                <div class="date">2</div>
            </td>
        </tr>
        <tr class="days">
            <td class="day">
                <div class="date">3</div>
            </td>
            <td class="day">
                <div class="date">4</div>
            </td>
            <td class="day">
                <div class="date">5</div>
            </td>
            <td class="day">
                <div class="date">6</div>
            </td>
            <td class="day">
                <div class="date">7</div>
            </td>
            <td class="day">
                <div class="date">8</div>
            </td>
            <td class="day">
                <div class="date">9</div>
            </td>
        </tr>
        <tr class="days">
            <td class="day">
                <div class="date">10</div>
            </td>
            <td class="day">
                <div class="date">11</div>
            </td>
            <td class="day">
                <div class="date">12</div>
            </td>
            <td class="day">
                <div class="date">13</div>
            </td>
            <td class="day">
                <div class="date">14</div>
            </td>
            <td class="day">
                <div class="date">15</div>
            </td>
            <td class="day">
                <div class="date">16</div>
            </td>
        </tr>
        <tr class="days">
            <td class="day">
                <div class="date">17</div>
            </td>
            <td class="day">
                <div class="date">18</div>
            </td>
            <td class="day">
                <div class="date">19</div>
            </td>
            <td class="day">
                <div class="date">20</div>
            </td>
            <td class="day">
                <div class="date">21</div>
            </td>
            <td class="day">
                <div class="date">22</div>
            </td>
            <td class="day">
                <div class="date">23</div>
            </td>
        </tr>
        <tr class="days">
            <td class="day">
                <div class="date">24</div>
            </td>
            <td class="day">
                <div class="date">25</div>
            </td>
            <td class="day">
                <div class="date">26</div>
            </td>
            <td class="day">
                <div class="date">27</div>
            </td>
            <td class="day">
                <div class="date">28</div>
            </td>
            <td class="day">
                <div class="date">29</div>
            </td>
            <td class="day other-month">
                <div></div>
            </td>
        </tr>
    </tbody>
</table>
</section>`,
    "2020-3": `<section id="month-2020-3" class="daysCalendar">
<table class="calendar">
<caption>March 2020</caption>
<thead>
    <tr class="weekdays">
        <th scope="col">Monday</th>
        <th scope="col">Tuesday</th>
        <th scope="col">Wednesday</th>
        <th scope="col">Thursday</th>
        <th scope="col">Friday</th>
        <th scope="col">Saturday</th>
        <th scope="col">Sunday</th>
    </tr>
</thead>
<tbody>
    <tr class="days">
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day">
            <div class="date">1</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">2</div>
        </td>
        <td class="day">
            <div class="date">3</div>
        </td>
        <td class="day">
            <div class="date">4</div>
        </td>
        <td class="day">
            <div class="date">5</div>
        </td>
        <td class="day">
            <div class="date">6</div>
        </td>
        <td class="day">
            <div class="date">7</div>
        </td>
        <td class="day">
            <div class="date">8</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">9</div>
        </td>
        <td class="day">
            <div class="date">10</div>
        </td>
        <td class="day">
            <div class="date">11</div>
        </td>
        <td class="day">
            <div class="date">12</div>
        </td>
        <td class="day">
            <div class="date">13</div>
        </td>
        <td class="day">
            <div class="date">14</div>
        </td>
        <td class="day">
            <div class="date">15</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">16</div>
        </td>
        <td class="day">
            <div class="date">17</div>
        </td>
        <td class="day">
            <div class="date">18</div>
        </td>
        <td class="day">
            <div class="date">19</div>
        </td>
        <td class="day">
            <div class="date">20</div>
        </td>
        <td class="day">
            <div class="date">21</div>
        </td>
        <td class="day">
            <div class="date">22</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">23</div>
        </td>
        <td class="day">
            <div class="date">24</div>
        </td>
        <td class="day">
            <div class="date">25</div>
        </td>
        <td class="day">
            <div class="date">26</div>
        </td>
        <td class="day">
            <div class="date">27</div>
        </td>
        <td class="day">
            <div class="date">28</div>
        </td>
        <td class="day">
            <div class="date">29</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">30</div>
        </td>
        <td class="day">
            <div class="date">31</div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
    </tr>
</tbody>
</table>
</section>`,
    "2020-4": `
<section id="month-2020-4" class="daysCalendar">
    <table class="calendar">
        <caption>April 2020</caption>
        <thead>
            <tr class="weekdays">
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wednesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
                <th scope="col">Saturday</th>
                <th scope="col">Sunday</th>
            </tr>
        </thead>
        <tbody>
            <tr class="days">
                <td class="day other-month">
                    <div></div>
                </td>
                <td class="day other-month">
                    <div></div>
                </td>
                <td class="day">
                    <div class="date">1</div>
                </td>
                <td class="day">
                    <div class="date">2</div>
                </td>
                <td class="day">
                    <div class="date">3</div>
                </td>
                <td class="day">
                    <div class="date">4</div>
                </td>
                <td class="day">
                    <div class="date">5</div>
                </td>
            </tr>
            <tr class="days">
                <td class="day">
                    <div class="date">6</div>
                </td>
                <td class="day">
                    <div class="date">7</div>
                </td>
                <td class="day">
                    <div class="date">8</div>
                </td>
                <td class="day">
                    <div class="date">9</div>
                </td>
                <td class="day">
                    <div class="date">10</div>
                </td>
                <td class="day">
                    <div class="date">11</div>
                </td>
                <td class="day">
                    <div class="date">12</div>
                </td>
            </tr>
            <tr class="days">
                <td class="day">
                    <div class="date">13</div>
                </td>
                <td class="day">
                    <div class="date">14</div>
                </td>
                <td class="day">
                    <div class="date">15</div>
                </td>
                <td class="day">
                    <div class="date">16</div>
                </td>
                <td class="day">
                    <div class="date">17</div>
                </td>
                <td class="day">
                    <div class="date">18</div>
                </td>
                <td class="day">
                    <div class="date">19</div>
                </td>
            </tr>
            <tr class="days">
                <td class="day">
                    <div class="date">20</div>
                </td>
                <td class="day">
                    <div class="date">21</div>
                </td>
                <td class="day">
                    <div class="date">22</div>
                </td>
                <td class="day">
                    <div class="date">23</div>
                </td>
                <td class="day">
                    <div class="date">24</div>
                </td>
                <td class="day">
                    <div class="date">25</div>
                </td>
                <td class="day">
                    <div class="date">26</div>
                </td>
            </tr>
            <tr class="days">
                <td class="day">
                    <div class="date">27</div>
                </td>
                <td class="day">
                    <div class="date">28</div>
                </td>
                <td class="day">
                    <div class="date">29</div>
                </td>
                <td class="day">
                    <div class="date">30</div>
                </td>
                <td class="day other-month">
                    <div></div>
                </td>
                <td class="day other-month">
                    <div></div>
                </td>
                <td class="day other-month">
                    <div></div>
                </td>
            </tr>
        </tbody>
    </table>
</section>`,
    "2020-5": `<section id="month-2020-5" class="daysCalendar">
<table class="calendar">
    <caption>May 2020</caption>
    <thead>
        <tr class="weekdays">
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
            <th scope="col">Saturday</th>
            <th scope="col">Sunday</th>
        </tr>
    </thead>
    <tbody>
        <tr class="days">
            <td class="day other-month">
                <div></div>
            </td>
            <td class="day other-month">
                <div></div>
            </td>
            <td class="day other-month">
                <div></div>
            </td>
            <td class="day other-month">
                <div></div>
            </td>
            <td class="day">
                <div class="date">1</div>
            </td>
            <td class="day">
                <div class="date">2</div>
            </td>
            <td class="day">
                <div class="date">3</div>
            </td>
        </tr>
        <tr class="days">
            <td class="day">
                <div class="date">4</div>
            </td>
            <td class="day">
                <div class="date">5</div>
            </td>
            <td class="day">
                <div class="date">6</div>
            </td>
            <td class="day">
                <div class="date">7</div>
            </td>
            <td class="day">
                <div class="date">8</div>
            </td>
            <td class="day">
                <div class="date">9</div>
            </td>
            <td class="day">
                <div class="date">10</div>
            </td>
        </tr>
        <tr class="days">
            <td class="day">
                <div class="date">11</div>
            </td>
            <td class="day">
                <div class="date">12</div>
            </td>
            <td class="day">
                <div class="date">13</div>
            </td>
            <td class="day">
                <div class="date">14</div>
            </td>
            <td class="day">
                <div class="date">15</div>
            </td>
            <td class="day">
                <div class="date">16</div>
            </td>
            <td class="day">
                <div class="date">17</div>
            </td>
        </tr>
        <tr class="days">
            <td class="day">
                <div class="date">18</div>
            </td>
            <td class="day">
                <div class="date">19</div>
            </td>
            <td class="day">
                <div class="date">20</div>
            </td>
            <td class="day">
                <div class="date">21</div>
            </td>
            <td class="day">
                <div class="date">22</div>
            </td>
            <td class="day">
                <div class="date">23</div>
            </td>
            <td class="day">
                <div class="date">24</div>
            </td>
        </tr>
        <tr class="days">
            <td class="day">
                <div class="date">25</div>
            </td>
            <td class="day">
                <div class="date">26</div>
            </td>
            <td class="day">
                <div class="date">27</div>
            </td>
            <td class="day">
                <div class="date">28</div>
            </td>
            <td class="day">
                <div class="date">29</div>
            </td>
            <td class="day">
                <div class="date">30</div>
            </td>
            <td class="day">
                <div class="date">31</div>
            </td>
        </tr>
    </tbody>
</table>
</section>`,
    "2020-6": `<section id="month-2020-6" class="daysCalendar">
<table class="calendar">
<caption>June 2020</caption>
<thead>
    <tr class="weekdays">
        <th scope="col">Monday</th>
        <th scope="col">Tuesday</th>
        <th scope="col">Wednesday</th>
        <th scope="col">Thursday</th>
        <th scope="col">Friday</th>
        <th scope="col">Saturday</th>
        <th scope="col">Sunday</th>
    </tr>
</thead>
<tbody>
    <tr class="days">
        <td class="day">
            <div class="date">1</div>
        </td>
        <td class="day">
            <div class="date">2</div>
        </td>
        <td class="day">
            <div class="date">3</div>
        </td>
        <td class="day">
            <div class="date">4</div>
        </td>
        <td class="day">
            <div class="date">5</div>
        </td>
        <td class="day">
            <div class="date">6</div>
        </td>
        <td class="day">
            <div class="date">7</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">8</div>
        </td>
        <td class="day">
            <div class="date">9</div>
        </td>
        <td class="day">
            <div class="date">10</div>
        </td>
        <td class="day">
            <div class="date">11</div>
        </td>
        <td class="day">
            <div class="date">12</div>
        </td>
        <td class="day">
            <div class="date">13</div>
        </td>
        <td class="day">
            <div class="date">14</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">15</div>
        </td>
        <td class="day">
            <div class="date">16</div>
        </td>
        <td class="day">
            <div class="date">17</div>
        </td>
        <td class="day">
            <div class="date">18</div>
        </td>
        <td class="day">
            <div class="date">19</div>
        </td>
        <td class="day">
            <div class="date">20</div>
        </td>
        <td class="day">
            <div class="date">21</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">22</div>
        </td>
        <td class="day">
            <div class="date">23</div>
        </td>
        <td class="day">
            <div class="date">24</div>
        </td>
        <td class="day">
            <div class="date">25</div>
        </td>
        <td class="day">
            <div class="date">26</div>
        </td>
        <td class="day">
            <div class="date">27</div>
        </td>
        <td class="day">
            <div class="date">28</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">29</div>
        </td>
        <td class="day">
            <div class="date">30</div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
    </tr>
</tbody>
</table>
</section>`,
    "2020-7": `<section id="month-2020-7" class="daysCalendar">
<table class="calendar">
<caption>July 2020</caption>
<thead>
    <tr class="weekdays">
        <th scope="col">Monday</th>
        <th scope="col">Tuesday</th>
        <th scope="col">Wednesday</th>
        <th scope="col">Thursday</th>
        <th scope="col">Friday</th>
        <th scope="col">Saturday</th>
        <th scope="col">Sunday</th>
    </tr>
</thead>
<tbody>
    <tr class="days">
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day">
            <div class="date">1</div>
        </td>
        <td class="day">
            <div class="date">2</div>
        </td>
        <td class="day">
            <div class="date">3</div>
        </td>
        <td class="day">
            <div class="date">4</div>
        </td>
        <td class="day">
            <div class="date">5</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">6</div>
        </td>
        <td class="day">
            <div class="date">7</div>
        </td>
        <td class="day">
            <div class="date">8</div>
        </td>
        <td class="day">
            <div class="date">9</div>
        </td>
        <td class="day">
            <div class="date">10</div>
        </td>
        <td class="day">
            <div class="date">11</div>
        </td>
        <td class="day">
            <div class="date">12</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">13</div>
        </td>
        <td class="day">
            <div class="date">14</div>
        </td>
        <td class="day">
            <div class="date">15</div>
        </td>
        <td class="day">
            <div class="date">16</div>
        </td>
        <td class="day">
            <div class="date">17</div>
        </td>
        <td class="day">
            <div class="date">18</div>
        </td>
        <td class="day">
            <div class="date">19</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">20</div>
        </td>
        <td class="day">
            <div class="date">21</div>
        </td>
        <td class="day">
            <div class="date">22</div>
        </td>
        <td class="day">
            <div class="date">23</div>
        </td>
        <td class="day">
            <div class="date">24</div>
        </td>
        <td class="day">
            <div class="date">25</div>
        </td>
        <td class="day">
            <div class="date">26</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">27</div>
        </td>
        <td class="day">
            <div class="date">28</div>
        </td>
        <td class="day">
            <div class="date">29</div>
        </td>
        <td class="day">
            <div class="date">30</div>
        </td>
        <td class="day">
            <div class="date">31</div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
    </tr>
</tbody>
</table>
</section>`,
"2020-8" : `<section id="month-2020-8" class="daysCalendar">
<table class="calendar">
<caption>August 2020</caption>
<thead>
    <tr class="weekdays">
        <th scope="col">Monday</th>
        <th scope="col">Tuesday</th>
        <th scope="col">Wednesday</th>
        <th scope="col">Thursday</th>
        <th scope="col">Friday</th>
        <th scope="col">Saturday</th>
        <th scope="col">Sunday</th>
    </tr>
</thead>
<tbody>
    <tr class="days">
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day">
            <div class="date">1</div>
        </td>
        <td class="day">
            <div class="date">2</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">3</div>
        </td>
        <td class="day">
            <div class="date">4</div>
        </td>
        <td class="day">
            <div class="date">5</div>
        </td>
        <td class="day">
            <div class="date">6</div>
        </td>
        <td class="day">
            <div class="date">7</div>
        </td>
        <td class="day">
            <div class="date">8</div>
        </td>
        <td class="day">
            <div class="date">9</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">10</div>
        </td>
        <td class="day">
            <div class="date">11</div>
        </td>
        <td class="day">
            <div class="date">12</div>
        </td>
        <td class="day">
            <div class="date">13</div>
        </td>
        <td class="day">
            <div class="date">14</div>
        </td>
        <td class="day">
            <div class="date">15</div>
        </td>
        <td class="day">
            <div class="date">16</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">17</div>
        </td>
        <td class="day">
            <div class="date">18</div>
        </td>
        <td class="day">
            <div class="date">19</div>
        </td>
        <td class="day">
            <div class="date">20</div>
        </td>
        <td class="day">
            <div class="date">21</div>
        </td>
        <td class="day">
            <div class="date">22</div>
        </td>
        <td class="day">
            <div class="date">23</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">24</div>
        </td>
        <td class="day">
            <div class="date">25</div>
        </td>
        <td class="day">
            <div class="date">26</div>
        </td>
        <td class="day">
            <div class="date">27</div>
        </td>
        <td class="day">
            <div class="date">28</div>
        </td>
        <td class="day">
            <div class="date">29</div>
        </td>
        <td class="day">
            <div class="date">30</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">31</div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
    </tr>
</tbody>
</table>
</section>`,
"2020-9" : `<section id="month-2020-9" class="daysCalendar">
<table class="calendar">
<caption>September 2020</caption>
<thead>
    <tr class="weekdays">
        <th scope="col">Monday</th>
        <th scope="col">Tuesday</th>
        <th scope="col">Wednesday</th>
        <th scope="col">Thursday</th>
        <th scope="col">Friday</th>
        <th scope="col">Saturday</th>
        <th scope="col">Sunday</th>
    </tr>
</thead>
<tbody>
    <tr class="days">
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day">
            <div class="date">1</div>
        </td>
        <td class="day">
            <div class="date">2</div>
        </td>
        <td class="day">
            <div class="date">3</div>
        </td>
        <td class="day">
            <div class="date">4</div>
        </td>
        <td class="day">
            <div class="date">5</div>
        </td>
        <td class="day">
            <div class="date">6</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">7</div>
        </td>
        <td class="day">
            <div class="date">8</div>
        </td>
        <td class="day">
            <div class="date">9</div>
        </td>
        <td class="day">
            <div class="date">10</div>
        </td>
        <td class="day">
            <div class="date">11</div>
        </td>
        <td class="day">
            <div class="date">12</div>
        </td>
        <td class="day">
            <div class="date">13</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">14</div>
        </td>
        <td class="day">
            <div class="date">15</div>
        </td>
        <td class="day">
            <div class="date">16</div>
        </td>
        <td class="day">
            <div class="date">17</div>
        </td>
        <td class="day">
            <div class="date">18</div>
        </td>
        <td class="day">
            <div class="date">19</div>
        </td>
        <td class="day">
            <div class="date">20</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">21</div>
        </td>
        <td class="day">
            <div class="date">22</div>
        </td>
        <td class="day">
            <div class="date">23</div>
        </td>
        <td class="day">
            <div class="date">24</div>
        </td>
        <td class="day">
            <div class="date">25</div>
        </td>
        <td class="day">
            <div class="date">26</div>
        </td>
        <td class="day">
            <div class="date">27</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">28</div>
        </td>
        <td class="day">
            <div class="date">29</div>
        </td>
        <td class="day">
            <div class="date">30</div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
    </tr>
</tbody>
</table>
</section>`,
"2020-10" : `<section id="month-2020-10" class="daysCalendar">
<table class="calendar">
<caption>October 2020</caption>
<thead>
    <tr class="weekdays">
        <th scope="col">Monday</th>
        <th scope="col">Tuesday</th>
        <th scope="col">Wednesday</th>
        <th scope="col">Thursday</th>
        <th scope="col">Friday</th>
        <th scope="col">Saturday</th>
        <th scope="col">Sunday</th>
    </tr>
</thead>
<tbody>
    <tr class="days">
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day">
            <div class="date">1</div>
        </td>
        <td class="day">
            <div class="date">2</div>
        </td>
        <td class="day">
            <div class="date">3</div>
        </td>
        <td class="day">
            <div class="date">4</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">5</div>
        </td>
        <td class="day">
            <div class="date">6</div>
        </td>
        <td class="day">
            <div class="date">7</div>
        </td>
        <td class="day">
            <div class="date">8</div>
        </td>
        <td class="day">
            <div class="date">9</div>
        </td>
        <td class="day">
            <div class="date">10</div>
        </td>
        <td class="day">
            <div class="date">11</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">12</div>
        </td>
        <td class="day">
            <div class="date">13</div>
        </td>
        <td class="day">
            <div class="date">14</div>
        </td>
        <td class="day">
            <div class="date">15</div>
        </td>
        <td class="day">
            <div class="date">16</div>
        </td>
        <td class="day">
            <div class="date">17</div>
        </td>
        <td class="day">
            <div class="date">18</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">19</div>
        </td>
        <td class="day">
            <div class="date">20</div>
        </td>
        <td class="day">
            <div class="date">21</div>
        </td>
        <td class="day">
            <div class="date">22</div>
        </td>
        <td class="day">
            <div class="date">23</div>
        </td>
        <td class="day">
            <div class="date">24</div>
        </td>
        <td class="day">
            <div class="date">25</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">26</div>
        </td>
        <td class="day">
            <div class="date">27</div>
        </td>
        <td class="day">
            <div class="date">28</div>
        </td>
        <td class="day">
            <div class="date">29</div>
        </td>
        <td class="day">
            <div class="date">30</div>
        </td>
        <td class="day">
            <div class="date">31</div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
    </tr>
</tbody>
</table>
</section>`,
"2020-11" : `<section id="month-2020-11" class="daysCalendar">
<table class="calendar">
<caption>November 2020</caption>
<thead>
    <tr class="weekdays">
        <th scope="col">Monday</th>
        <th scope="col">Tuesday</th>
        <th scope="col">Wednesday</th>
        <th scope="col">Thursday</th>
        <th scope="col">Friday</th>
        <th scope="col">Saturday</th>
        <th scope="col">Sunday</th>
    </tr>
</thead>
<tbody>
    <tr class="days">
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day">
            <div class="date">1</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">2</div>
        </td>
        <td class="day">
            <div class="date">3</div>
        </td>
        <td class="day">
            <div class="date">4</div>
        </td>
        <td class="day">
            <div class="date">5</div>
        </td>
        <td class="day">
            <div class="date">6</div>
        </td>
        <td class="day">
            <div class="date">7</div>
        </td>
        <td class="day">
            <div class="date">8</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">9</div>
        </td>
        <td class="day">
            <div class="date">10</div>
        </td>
        <td class="day">
            <div class="date">11</div>
        </td>
        <td class="day">
            <div class="date">12</div>
        </td>
        <td class="day">
            <div class="date">13</div>
        </td>
        <td class="day">
            <div class="date">14</div>
        </td>
        <td class="day">
            <div class="date">15</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">16</div>
        </td>
        <td class="day">
            <div class="date">17</div>
        </td>
        <td class="day">
            <div class="date">18</div>
        </td>
        <td class="day">
            <div class="date">19</div>
        </td>
        <td class="day">
            <div class="date">20</div>
        </td>
        <td class="day">
            <div class="date">21</div>
        </td>
        <td class="day">
            <div class="date">22</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">23</div>
        </td>
        <td class="day">
            <div class="date">24</div>
        </td>
        <td class="day">
            <div class="date">25</div>
        </td>
        <td class="day">
            <div class="date">26</div>
        </td>
        <td class="day">
            <div class="date">27</div>
        </td>
        <td class="day">
            <div class="date">28</div>
        </td>
        <td class="day">
            <div class="date">29</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">30</div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
    </tr>
</tbody>
</table>
</section>`,
"2020-12" : `<section id="month-2020-12" class="daysCalendar">
<table class="calendar">
<caption>December 2020</caption>
<thead>
    <tr class="weekdays">
        <th scope="col">Monday</th>
        <th scope="col">Tuesday</th>
        <th scope="col">Wednesday</th>
        <th scope="col">Thursday</th>
        <th scope="col">Friday</th>
        <th scope="col">Saturday</th>
        <th scope="col">Sunday</th>
    </tr>
</thead>
<tbody>
    <tr class="days">
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day">
            <div class="date">1</div>
        </td>
        <td class="day">
            <div class="date">2</div>
        </td>
        <td class="day">
            <div class="date">3</div>
        </td>
        <td class="day">
            <div class="date">4</div>
        </td>
        <td class="day">
            <div class="date">5</div>
        </td>
        <td class="day">
            <div class="date">6</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">7</div>
        </td>
        <td class="day">
            <div class="date">8</div>
        </td>
        <td class="day">
            <div class="date">9</div>
        </td>
        <td class="day">
            <div class="date">10</div>
        </td>
        <td class="day">
            <div class="date">11</div>
        </td>
        <td class="day">
            <div class="date">12</div>
        </td>
        <td class="day">
            <div class="date">13</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">14</div>
        </td>
        <td class="day">
            <div class="date">15</div>
        </td>
        <td class="day">
            <div class="date">16</div>
        </td>
        <td class="day">
            <div class="date">17</div>
        </td>
        <td class="day">
            <div class="date">18</div>
        </td>
        <td class="day">
            <div class="date">19</div>
        </td>
        <td class="day">
            <div class="date">20</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">21</div>
        </td>
        <td class="day">
            <div class="date">22</div>
        </td>
        <td class="day">
            <div class="date">23</div>
        </td>
        <td class="day">
            <div class="date">24</div>
        </td>
        <td class="day">
            <div class="date">25</div>
        </td>
        <td class="day">
            <div class="date">26</div>
        </td>
        <td class="day">
            <div class="date">27</div>
        </td>
    </tr>
    <tr class="days">
        <td class="day">
            <div class="date">28</div>
        </td>
        <td class="day">
            <div class="date">29</div>
        </td>
        <td class="day">
            <div class="date">30</div>
        </td>
        <td class="day">
            <div class="date">31</div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
        <td class="day other-month">
            <div></div>
        </td>
    </tr>
</tbody>
</table>
</section>`

}
export default {
    monthList,
    yearData,
    monthData,
  };