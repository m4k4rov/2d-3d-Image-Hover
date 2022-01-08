let tooltip = null;

const calendar = new Calendar('#calendar', {
  language: 'ru',
  //style:'background',
  dataSource: async function() {
    const result = await fetch('./file.txt');
    const result_2 = await result.json();
    if (result_2) {
      const calend = result_2.map(r => ({
        startDate: new Date(r.startDate),
        endDate: r.endDate ? new Date(r.endDate) : new Date(r.startDate),
        name: r.endDate ? new Date(r.startDate).toLocaleDateString() + ' - ' + new Date(r.endDate).toLocaleDateString() + '<br>' + (r.title ? r.title : '') : new Date(r.startDate).toLocaleDateString() + '<br>' + (r.title ? r.title : ''),
        details: r.comments ? r.comments : '',
        color: r.color
      }));
      calend.push({ startDate: new Date(), endDate: new Date(), color: "#fb7287", name: "Сегодня", details: new Date().toLocaleDateString()});
      return calend;
    }
    return [];
  },
  mouseOnDay: function(e) {
    if (e.events.length > 0) {
      var content = '';

      for (var i in e.events) {
        content += '<div class="event-tooltip-content">'
          + '<div class="event-name" style="color:' + e.events[i].color + '">' + e.events[i].name + '</div>'
                                      + '<div class="event-details">' + e.events[i].details + '</div>'
          + '</div>';
      }

      if (tooltip !== null) {
        tooltip.destroy();
        tooltip = null;
      }

      tooltip = tippy(e.element, {
          placement: 'right',
          content: content,
          animateFill: false,
          animation: 'shift-away',
          arrow: true
      });
      tooltip.show();
    }
  },
  mouseOutDay: function() {
    if (tooltip !== null) {
      tooltip.destroy();
      tooltip = null;
    }
  }
});

setTimeout(() => {
  thisDay();
}, 500);

function thisDay() {
  let thisD = document.querySelector("[style*='rgb(251, 114, 135) 0px -4px 0px 0px inset']");
  if (thisD) thisD.classList.add('thisDay');
  let calendarHeader = document.querySelector('.calendar-header');
  calendarHeader.addEventListener('click', () => setTimeout(() => thisDay(), 500));
};