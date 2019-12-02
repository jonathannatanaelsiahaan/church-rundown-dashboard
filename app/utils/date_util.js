class DateUtil {
    static convertToDisplayedDate(date) {
      var displayedDate = date.getDate()
      var displayedMonth = date.getMonth()
      var displayedHours = date.getHours()
      var displayedMinutes = date.getMinutes()

      if(displayedDate < 10) {
        displayedDate = "0" + displayedDate;
      }

      if(displayedMonth < 10) {
        displayedMonth = "0" + displayedMonth;
      }

      if(displayedHours < 10) {
        displayedHours = "0" + displayedHours;
      }

      if(displayedMinutes < 10) {
        displayedMinutes = "0" + displayedMinutes;
      }

      return date.getFullYear() + "-" + displayedMonth + "-" + displayedDate + " " + displayedHours + ":" + displayedMinutes
    }

    static convertToDisplayedDateWithISOFormat(date) {
      var displayedDate = date.getDate()
      var displayedMonth = date.getMonth()
      var displayedHours = date.getHours()
      var displayedMinutes = date.getMinutes()

      if(displayedDate < 10) {
        displayedDate = "0" + displayedDate;
      }

      if(displayedMonth < 10) {
        displayedMonth = "0" + displayedMonth;
      }

      if(displayedHours < 10) {
        displayedHours = "0" + displayedHours;
      }

      if(displayedMinutes < 10) {
        displayedMinutes = "0" + displayedMinutes;
      }

      return date.getFullYear() + "-" + displayedMonth + "-" + displayedDate + "T" + displayedHours + ":" + displayedMinutes
    }
}

export default DateUtil;