import { Component, OnInit } from '@angular/core';
import swal  from 'sweetalert2';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  constructor() { }
  new(){
    swal.mixin({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      showFirstLastButtons:true,
      reverseButton:true,
      onOpen: function() {
        // ('#datepicker').datetimepicker({});
      },
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Create a League',
        html:
        '<label class="swal2-actions" style="font-size: 18px">Sports</label>'+
        '<select id="swal-input1" style="height: 40px" class="swal2-input">,' +
        '<option>Super League</option>'+
        '<option>National League</option>'+
        '<option>Champion League</option>'+
          '<input class="swal2-input" value="Next Level Football Name">'+
        '<label class="swal2-actions" style="font-size: 18px">Level</label>'+
        '<select id="swal-input1" style="height: 40px" class="swal2-input">,' +
        '<option>Super League</option>'+
        '<option>National League</option>'+
        '<option>Champion League</option>'+
        '<input matInput class="swal2-input" placeholder="Tap Venue Here">'+
        '<label class="swal2-actions" style="font-size: 18px">Format</label>'+
        '<select id="swal-input1" style="height: 40px" class="swal2-input">,' +
        '<option>7v7</option>'+
        '<option>National League</option>'+
        '<option>Champion League</option>'


      },

      {
        title: 'Next Level Football League',
        html:
        '<label class="swal2-actions" style="font-size: 18px">Match Days</label>'+
        '<select id="swal-input1" style="height: 40px" class="swal2-input">,' +
        '<option>Super League</option>'+
        '<option>National League</option>'+
        '<option>Champion League</option>'+
        '<input class="swal2-input" value="Depend of Number of Weeks">'+
        '<label class="swal2-actions" style="font-size: 18px">MatchWeeks</label>'+
        '<select id="swal-input1" style="height: 40px" class="swal2-input">,' +
        '<option>Choose Between 8-14</option>'+
        '<option>National League</option>'+
        '<option>Champion League</option>'+
        '<input placeholder="Choose a date"  id="datepicker" class="swal2-input">'+
        '<label class="swal2-actions" style="font-size: 18px">Pay off</label>'+
        '<select id="swal-input1" style="height: 40px" class="swal2-input">,' +
        '<option>Yes or No</option>'+
        '<option>National League</option>'+
        '<option>Champion League</option>'
      },
      {
        title: 'Next Level Football League',
        inputAttributes: {
          'accept': 'image/*',
          'aria-label': 'Upload your profile picture'
        },
        input: 'file',
        html:
        '<label class="swal2-actions" style="font-size: 18px">Match Per Deposit</label>'+
        '<select id="swal-input1" style="height: 40px" class="swal2-input">,' +
        '<option>500</option>'+
        '<option>1000</option>'+
        '<option>2000</option>'+
        '<label class="swal2-actions" style="font-size: 18px">Upload File Logo</label>'

      }
    ]).then((result) => {
      if (result.value) {
        swal({
          title: 'All done!',
          html:
          'Your answers: <pre>' +
          JSON.stringify(result.value) +
          '</pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }


  ngOnInit() {
  }

}
