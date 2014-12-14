import {_, Marionette} from '../vendor';

/**
 * @description
 * <p>Handle click on any element which has `data-event` attribute and manage it.</p>
 * <p>Use `|` to separate actions.</p>
 * <code>
 *   <a href="http://twitter.com" data-event="stop">Stop</a>
 *   <a href="http://twitter.com" data-event="prevent">Prevent</a>
 *   <a href="http://twitter.com" data-event="stop|prevent">Stop & prevent</a>
 * </code>
 */
export default class EventBehavior extends Marionette.Behavior {

  /**
   * Declare view's events
   * @returns {Object} View's events.
   */
  events () {
    return {
      'click [data-event]': 'eventClickHandler'
    };
  }

  /**
   * Handle click on event element.
   * Parse data-attribute and manage the event.
   * @param e {jQuery.Event}
   */
  eventClickHandler (e) {
    var attributeValue = e.currentTarget.getAttribute('data-event') || '';
    var actions = attributeValue.split('|');

    this.manageEvent(e, _.object(actions, [true, true]));
  }

  /**
   * Manage passed event.
   * @param e {jQuery.Event}
   * @param options {Object} Manage options.
   */
  manageEvent (e, options) {
    options.prevent && e.preventDefault();
    options.stop && e.stopPropagation();
  }

}
