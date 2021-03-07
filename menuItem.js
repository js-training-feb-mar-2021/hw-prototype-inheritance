var Hamburger = require('./hamburger').Hamburger;
/**
 * Класс, параметы которого описывают пункт меню
 *
 * @param itemType Тип
 * @constructor
 */

function MenuItem(itemType) {
    this.itemType = itemType;
}
  
  /**
   * Узнать тип пункта меню
   */
  MenuItem.prototype.getType = function() {
    return this.itemType;
  };
  
  module.exports = {
    MenuItem: MenuItem
  };