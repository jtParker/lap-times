app.module('timeTracker')
  .directive('ngEnterTime', function() {
    return {
      restrict: 'E',
      template: '<div class="enter-time-container">

        <h2>Enter lap time</h2>
          <input type="date" name="lapDate" placeholder="date">
          <select name="Track">
            <option>East Track</option>
            <option>West Track</option>
            <option>Full Track</option>
          </select>
          <input type="text" name="minutes" value="00" ng-model="time.minutes">
          <span class="time-separator">:</span>
          <input type="text" name="seconds" value="00" ng-model="time.seconds">
          <span class="time-separator">:</span>
          <input type="text" name="milliseconds" value="00" ng-model="time.milliseconds">
      </div>'
    }
  })
